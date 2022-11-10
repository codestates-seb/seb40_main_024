package com.codestates.server.board.repository;

import com.codestates.server.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query(nativeQuery = true, value = "select * from Board b where b.status > 0")
    List<Board> findAll();
}
