package com.codestates.server.board.service;


import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.repository.BoardRepository;
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

        // If member info is not provided
        if (email.isEmpty()) throw new CustomException(ExceptionCode.MEMBER_INFO_NOT_FOUND);

        Board board = mapper.boardPostToBoard(postBoard);
        board.setCategory(verifyCategory(postBoard));

        Optional<Member> member = memberRepository.findByEmail(email);
        board.setMember(member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND)));

        return mapper.boardToBoardResponseDto(repository.save(board));
    }

    @Transactional
    public BoardDto.Response updateOne(BoardDto.Patch patchBoard) {

        Board board = mapper.boardPatchToBoard(patchBoard);
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // verify category if not null
        if (patchBoard.getCategory() != null) {
            board.setCategory(verifyCategory(patchBoard));
        }

        // title and body
        verifiedBoard.setTitle(board.getTitle());
        verifiedBoard.setBody(board.getBody());
        verifiedBoard.setCategory(board.getCategory() != null ? board.getCategory() : verifiedBoard.getCategory());

        // Modified time
        verifiedBoard.setModifiedAt(LocalDateTime.now());

        return mapper.boardToBoardResponseDto(repository.save(verifiedBoard));
    }

    @Transactional
    public BoardDto.Response changeLike(long id, String which) {

        if (!which.equals("like") && !which.equals("dislike")) throw new CustomException(ExceptionCode.BOARD_URL_NOT_FOUND);

        Board verifiedBoard = findVerifiedBoard(id);
        int like = verifiedBoard.getLike();

        if (which.equals("like")) {
            verifiedBoard.setLike(++like);  // increase 1 like
        } else {
            verifiedBoard.setLike(like > 0 ? --like : 0);  // decrease 1 like (no - value)
        }

        return mapper.boardToBoardResponseDto(repository.save(verifiedBoard));
    }

    @Transactional
    public void deleteOne(Long id) {
        Board verifiedBoard = findVerifiedBoard(id);

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

}