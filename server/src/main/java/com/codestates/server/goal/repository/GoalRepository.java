package com.codestates.server.goal.repository;

import com.codestates.server.goal.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GoalRepository extends JpaRepository<Goal, Long> {

    @Query("select g from Goal g where g.member.id = :id")
    List<Goal> findAllByMemberId(long id);
}
