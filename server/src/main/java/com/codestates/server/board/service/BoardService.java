package com.codestates.server.board.service;


import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Transactional(readOnly = true)
@Service
public class BoardService {

    private final BoardRepository repository;
    private final BoardMapper mapper;
    private final CommentRepository commentRepository;

    public Board findOne(long id) {
        Board verifiedBoard = findVerifiedBoard(id);
        if (verifiedBoard.getBoardStatus() == Board.BoardStatus.BOARD_DELETED) {
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }
        repository.updateView(id);
        return verifiedBoard;
    }

    public List<Board> findAll() {
        return new ArrayList<>(repository.findAll());
    }

    public Page<Board> findAllByPage(int page, int size) {
        return repository.findAllPaged(PageRequest.of(page, size));
    }

    public Page<Board> findAllByTag(int page, int size, char operator) {
        return operator == 'p' ? repository.findAllPost(PageRequest.of(page, size))
                : repository.findAllAssetPost(PageRequest.of(page, size));
    }

    @Transactional
    public BoardDto.Response createOne(BoardDto.Post postBoard) {

        Board board = mapper.boardPostToBoard(postBoard);
        board.setTag(verifyTag(postBoard));

        return mapper.boardToBoardResponseDto(repository.save(board));
    }

    @Transactional
    public BoardDto.Response updateOne(BoardDto.Patch patchBoard) {

        Board board = mapper.boardPatchToBoard(patchBoard);
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // verify tag if not null
        if (patchBoard.getTag() != null) {
            board.setTag(verifyTag(patchBoard));
        }

        // title and body
        verifiedBoard.setTitle(board.getTitle());
        verifiedBoard.setBody(board.getBody());
        verifiedBoard.setTag(board.getTag() != null ? board.getTag() : verifiedBoard.getTag());

        // Modified time
        verifiedBoard.setModifiedAt(LocalDateTime.now());

        return mapper.boardToBoardResponseDto(repository.save(verifiedBoard));
    }

    @Transactional
    public Board changeLike(Board board, char operator) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());
        int like = board.getLike();

        if (operator == '1') {
            verifiedBoard.setLike(++like);  // increase 1 like
        } else {
            verifiedBoard.setLike(like > 0 ? --like : 0);  // decrease 1 like (no - value)
        }
        return repository.save(verifiedBoard);
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

    public Board findVerifiedBoard(long id) {
        Optional<Board> optionalBoard = repository.findById(id);
        Board board = optionalBoard.orElseThrow(() -> new CustomException(ExceptionCode.BOARD_NOT_FOUND));

        if (board.getBoardStatus() == Board.BoardStatus.BOARD_DELETED) {
            throw new CustomException(ExceptionCode.BOARD_DELETED);
        }
        return board;
    }

//    public List<EntityModel<BoardDto.Response>> boardStream(List<Board> listedBoards) {
//        return listedBoards.stream()
//                .map(mapper::boardToBoardResponseDto)
//                .map(assembler::toModel)
//                .collect(Collectors.toList());
//    }

    public Board.BoardTag verifyTag(Object board) {

        String oldTag = null;
        Board.BoardTag newTag = null;

        if (board instanceof BoardDto.Post && ((BoardDto.Post) board).getTag() != null) {
            oldTag = ((BoardDto.Post) board).getTag();
        } else if (board instanceof BoardDto.Patch) {
            oldTag = ((BoardDto.Patch) board).getTag();
        }

        for (Board.BoardTag t : Board.BoardTag.values()) {
            if (t.getTag().equals(oldTag)) {
                newTag = t;
            }
        }

        if (newTag == null) throw new CustomException(ExceptionCode.BOARD_TAG_NOT_FOUND);
        return newTag;
    }

}
