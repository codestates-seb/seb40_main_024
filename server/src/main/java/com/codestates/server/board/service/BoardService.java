package com.codestates.server.board.service;


import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.entity.BoardLikedBy;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.board.repository.BoardRepositoryLikedBy;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.hateoas.EntityModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Transactional(readOnly = true)
@Service
public class BoardService {

    private final BoardRepository repository;
    private final BoardMapper mapper;
    private final BoardAssembler assembler;
    private final CommentRepository commentRepository;
    private final MemberRepository memberRepository;
    private final BoardRepositoryLikedBy likedByRepository;

    public BoardDto.Response findOne(long id) {
        Board verifiedBoard = findVerifiedBoard(id);
        repository.updateView(id);
        return mapper.boardToBoardResponseDto(verifiedBoard);
    }

    public Page<Board> findAllByPage(int page, int size) {
        return repository.findAllPaged(PageRequest.of(page, size));
    }

    public Page<Board> findAllByCategory(int page, int size, String category) {
        if (!category.equals("post") && !category.equals("asset")) throw new CustomException(ExceptionCode.BOARD_CATEGORY_NOT_FOUND);
        return category.equals("post") ? repository.findAllPost(PageRequest.of(page, size)) :  repository.findAllAssetPost(PageRequest.of(page, size));
    }

    @Transactional
    public BoardDto.Response createOne(BoardDto.Post postBoard, String email) {

        if (email.equals("anonymousUser")) throw new CustomException(ExceptionCode.BOARD_POSTER_NOT_FOUND);

        Board board = mapper.boardPostToBoard(postBoard);
        board.setCategory(verifyCategory(postBoard));

        Optional<Member> member = memberRepository.findByEmail(email);
        board.setMember(member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND)));

        return mapper.boardToBoardResponseDto(repository.save(board));
    }

    @Transactional
    public BoardDto.Response updateOne(BoardDto.Patch patchBoard, String email) {

        Board board = mapper.boardPatchToBoard(patchBoard);
        Board verifiedBoard = verifyLoggedInMemberForBoard(board.getBoardId(), email);

        // verify category if not null
        if (patchBoard.getCategory() != null) board.setCategory(verifyCategory(patchBoard));

        // title and body
        verifiedBoard.setTitle(board.getTitle());
        verifiedBoard.setBody(board.getBody());
        verifiedBoard.setCategory(board.getCategory() != null ? board.getCategory() : verifiedBoard.getCategory());

        // Modified time
        verifiedBoard.setModifiedAt(LocalDateTime.now());

        return mapper.boardToBoardResponseDto(repository.save(verifiedBoard));
    }

    @Transactional
    public BoardDto.Response changeLike(long id, String which, String email) {

        if (!which.equals("like") && !which.equals("dislike")) throw new CustomException(ExceptionCode.BOARD_URL_NOT_FOUND);
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new CustomException(ExceptionCode.BOARD_LIKE_NOT_PERMITTED));
        String nameLiked = member.getName();

        List<BoardLikedBy> likes = likedByRepository.findByBoardId(id);
        likes.forEach(l -> {if (l.getName().equals(nameLiked)) throw new CustomException(ExceptionCode.BOARD_ALREADY_LIKED);});

        Board verifiedBoard = findVerifiedBoard(id);
        int like = verifiedBoard.getLike();

        if (which.equals("like")) {
            verifiedBoard.setLike(++like);  // increase 1 like
        } else {
            verifiedBoard.setLike(like > 0 ? --like : 0);  // decrease 1 like (no - value)
        }

        Board newBoard = repository.save(verifiedBoard);
        likedByRepository.save(new BoardLikedBy(nameLiked, newBoard));

        return mapper.boardToBoardResponseDto(newBoard);
    }

    @Transactional
    public void deleteOne(Long id, String email) {

        Board verifiedBoard = verifyLoggedInMemberForBoard(id, email);

        // only board's status is changed
        verifiedBoard.setBoardStatus(Board.BoardStatus.BOARD_DELETED);

        // delete related comments
        List<Comment> relatedComments = commentRepository.findAll(id);
        commentRepository.deleteAllInBatch(relatedComments);
    }

    public List<EntityModel<BoardDto.Response>> boardStream(List<Board> listedBoards) {
        return listedBoards.stream()
                .map(mapper::boardToBoardResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());
    }

    public Board findVerifiedBoard(long id) {
        Optional<Board> optionalBoard = repository.findById(id);
        Board board = optionalBoard.orElseThrow(() -> new CustomException(ExceptionCode.BOARD_NOT_FOUND));

        if (board.getBoardStatus() == Board.BoardStatus.BOARD_DELETED) {
            throw new CustomException(ExceptionCode.BOARD_DELETED);
        }
        return board;
    }

    public Board.BoardCategory verifyCategory(Object board) {

        String oldCategory = null;
        Board.BoardCategory newCategory = null;

        // Check classes
        if (board instanceof BoardDto.Post && ((BoardDto.Post) board).getCategory() != null) {
            oldCategory = ((BoardDto.Post) board).getCategory();
        } else if (board instanceof BoardDto.Patch) {
            oldCategory = ((BoardDto.Patch) board).getCategory();
        }

        // Category loop
        for (Board.BoardCategory c : Board.BoardCategory.values()) {
            if (c.getCategory().equals(oldCategory)) {
                newCategory = c;
            }
        }

        if (newCategory == null) throw new CustomException(ExceptionCode.BOARD_CATEGORY_NOT_FOUND);
        return newCategory;
    }

    public Board verifyLoggedInMemberForBoard(long id, String email) {
        Board verifiedBoard = findVerifiedBoard(id);
        if (email.equals("anonymousUser")) {
            throw new CustomException(ExceptionCode.BOARD_POSTER_NOT_FOUND);
        } else if (! email.equals(verifiedBoard.getMember().getEmail())) {
            throw new CustomException(ExceptionCode.BOARD_POSTER_NOT_MATCHED);
        }
        return verifiedBoard;
    }

}