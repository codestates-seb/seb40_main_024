package com.codestates.server.board.repository;

import com.codestates.server.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query(nativeQuery = true, value = "select * from Board where board_status > 0"
            + " order by board_id asc")
    Page<Board> findAllPaged(Pageable pageable);

    // status -> posted 만 조회
}
