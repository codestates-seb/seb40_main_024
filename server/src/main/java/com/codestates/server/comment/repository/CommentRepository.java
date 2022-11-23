package com.codestates.server.comment.repository;

import com.codestates.server.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    // 게시물 연관 댓글
    @Query(nativeQuery = true, value = "select * from Comment where board_id = :id")
    List<Comment> findAll(long id);
}
