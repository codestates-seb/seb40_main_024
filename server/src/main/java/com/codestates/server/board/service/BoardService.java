package com.codestates.server.board.service;


import com.codestates.server.board.entity.Board;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service
public class BoardService {

    private final BoardRepository repository;

    private final CommentRepository commentRepository;

    public BoardService(BoardRepository repository, CommentRepository commentRepository) {
        this.repository = repository;
        this.commentRepository = commentRepository;
    }

    public Board findOne(long id) {
        Board verifiedBoard = findVerifiedBoard(id);
        if (verifiedBoard.getBoardStatus() == Board.BoardStatus.BOARD_DELETED) {
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }
        return verifiedBoard;
    }

//    public List<Board> findAll() {
//        return new ArrayList<>(repository.findAll());
//    }

    public Page<Board> findAll(int page, int size) {
        return repository.findAll(PageRequest.of(page, size));
    }

    @Transactional
    public Board createOne(Board board) {
        return repository.save(board);
    }

    @Transactional
    public Board updateOne(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // title and body
        verifiedBoard.setTitle(board.getTitle());
        verifiedBoard.setBody(board.getBody());

        // Modified time
        verifiedBoard.setModifiedAt(LocalDateTime.now());

        return repository.save(verifiedBoard);
    }

    @Transactional
    public Board increaseLike(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // increase 1 like
        int like = board.getLike();
        verifiedBoard.setLike(++like);

        return repository.save(verifiedBoard);
    }

    @Transactional
    public Board decreaseLike(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // decrease 1 like
        int like = board.getLike();
        verifiedBoard.setLike(like > 0 ? --like : 0);

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
}
