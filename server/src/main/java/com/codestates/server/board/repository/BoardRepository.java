package com.codestates.server.board.repository;

import com.codestates.server.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    // status related
    @Query("select b from Board b where b.boardStatus = 'BOARD_POSTED'")
    Page<Board> findAllPaged(Pageable pageable);

    @Query("select b from Board b where b.boardStatus = 'BOARD_POSTED'")
    List<Board> findAll();

    // tag related
    @Query("select b from Board b where b.tag = 'POST'")
    Page<Board> findAllPost(Pageable pageable);

    @Query("select b from Board b where b.tag = 'ASSET'")
    Page<Board> findAllAssetPost(Pageable pageable);
}
