package com.codestates.server.board.repository;

import com.codestates.server.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {

    // status related
    @Query("select b from Board b where b.boardStatus = 'BOARD_POSTED' order by b.boardId desc")
    Page<Board> findAllPaged(Pageable pageable);

    @Query("select b from Board b where b.boardStatus = 'BOARD_POSTED'")
    List<Board> findAll();

    // view
    @Modifying
    @Query("update Board b set b.view = b.view + 1 where b.boardId = :id")
    int updateView(long id);

    // category related
    @Query("select b from Board b where b.category = 'POST' and b.boardStatus = 'BOARD_POSTED' order by b.boardId desc")
    Page<Board> findAllPost(Pageable pageable);

    @Query("select b from Board b where b.category = 'ASSET' and b.boardStatus = 'BOARD_POSTED' order by b.boardId desc")
    Page<Board> findAllAssetPost(Pageable pageable);
}
