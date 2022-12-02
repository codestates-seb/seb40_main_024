package com.codestates.server.board.repository;

import com.codestates.server.board.entity.BoardLikedBy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepositoryLikedBy extends JpaRepository<BoardLikedBy, Long> {

//    @Query("select l from BoardLikedBy l where l.name = :name")
//    BoardLikedBy findByName(String name);

    @Query("select l from BoardLikedBy l where l.board.boardId = :boardId")
    List<BoardLikedBy> findByBoardId(long boardId);
}
