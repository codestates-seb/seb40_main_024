package com.codestates.server.board.service;


import com.codestates.server.board.entity.Board;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class BoardService {

    private final BoardRepository repository;

    public BoardService(BoardRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Board findOne(long id) {
        return findVerifiedBoard(id);
    }

    public List<Board> findAll() {
        return new ArrayList<>(repository.findAll());
    }

    public Board createOne(Board board) {
        return repository.save(board);
    }

    public Board updateOne(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // title and body
        verifiedBoard.setTitle(board.getTitle());
        verifiedBoard.setBody(board.getBody());

        return repository.save(verifiedBoard);
    }

    public Board updateLike(Board board) {
        Board verifiedBoard = findVerifiedBoard(board.getBoardId());

        // increase 1 like
        int like = board.getLike();
        verifiedBoard.setLike(++like);

        return repository.save(verifiedBoard);
    }

    public void deleteOne(Long id) {
        Board verifiedBoard = findVerifiedBoard(id);

        // only status is changed
        verifiedBoard.setBoardStatus(Board.BoardStatus.BOARD_DELETED);
    }


    @Transactional(readOnly = true)
    public Board findVerifiedBoard(long id) {
        Optional<Board> optionalBoard = repository.findById(id);
        return optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
    }
}