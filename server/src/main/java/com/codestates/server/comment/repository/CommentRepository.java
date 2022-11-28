package com.codestates.server.comment.repository;

import com.codestates.server.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    // 게시물 연관 댓글
    @Query("select c from Comment c where c.board.boardId = :id")
    List<Comment> findAll(long id);
}
