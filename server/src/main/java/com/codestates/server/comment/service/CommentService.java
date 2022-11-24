package com.codestates.server.comment.service;

import com.codestates.server.board.entity.Board;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class CommentService {

    private final CommentRepository repository;
    private final BoardService boardService;

    // WIP: 맴버 구현 끝난 후 (멤버 서비스 등 필요) + 로그인 유저 verification 필요

    public CommentService(CommentRepository repository, BoardService boardService) {
        this.repository = repository;
        this.boardService = boardService;
    }

    public Comment findOne(long id) {
        return findVerifiedComment(id);
    }

    public List<Comment> findAll() {
        return new ArrayList<>(repository.findAll());
    }

    @Transactional
    public Comment createOne(Comment comment, long boardId) {
        Board board = boardService.findVerifiedBoard(boardId);
        comment.setBoard(board);
        board.getComments().add(comment);
        return repository.save(comment);
    }

    @Transactional
    public Comment updateOne(Comment comment, long boardId) {
        Comment verifiedComment = findVerifiedComment(comment.getCommentId());
        verifyBoard(boardId, verifiedComment.getBoard());  // 보드 검증
        verifiedComment.setBody(comment.getBody());  // 내용 수정

        // Modified time
        verifiedComment.setModifiedAt(LocalDateTime.now());
        return repository.save(verifiedComment);
    }

    @Transactional
    public void deleteOne(Long id, long boardId) {
        Comment verifiedComment = findVerifiedComment(id);
        verifyBoard(boardId, verifiedComment.getBoard());  // 보드 검증
        repository.delete(verifiedComment);
    }

    public Comment findVerifiedComment(long id) {
        Optional<Comment> optionalComment = repository.findById(id);
        return optionalComment.orElseThrow(() -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND));
    }

    // 보드 id 검증
    public void verifyBoard(long boardId, Board commentBoard) {
        if (! (boardId == commentBoard.getBoardId())) {
            throw new CustomException(ExceptionCode.BOARD_NOT_MATCHED_WITH_COMMENT);
        }
    }
}
