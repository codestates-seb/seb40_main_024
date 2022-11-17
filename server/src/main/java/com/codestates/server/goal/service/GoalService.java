package com.codestates.server.goal.service;

import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.goal.entity.Goal;
import com.codestates.server.goal.repository.GoalRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class GoalService {
    
    private final GoalRepository repository;

    public GoalService(GoalRepository repository) {
        this.repository = repository;
    }

    public Goal findOne(long id) {
        return findVerifiedGoal(id);
    }

    public List<Goal> findAll() {
        return new ArrayList<>(repository.findAll());
    }

    @Transactional
    public Goal createOne(Goal goal) {
        Goal newGoal = new Goal(goal.getGoalId(), goal.getGoalName(), goal.getGoalPrice(), goal.getTargetLength());
        return repository.save(newGoal);
    }

    @Transactional
    public Goal updateOne(Goal goal) {
        Goal verifiedGoal = findVerifiedGoal(goal.getGoalId());
        // 수정 부
        verifiedGoal.setGoalName(goal.getGoalName());
        verifiedGoal.setGoalPrice(goal.getGoalPrice());
        verifiedGoal.setTargetLength(goal.getTargetLength());
        verifiedGoal.setCalculatedPrice(goal.getGoalPrice() / verifiedGoal.getTargetLength());
//        Goal newGoal = new Goal(verifiedGoal.getGoalId(), verifiedGoal.getGoalName(),
//                verifiedGoal.getGoalPrice(), verifiedGoal.getTargetLength());

        // Modified time
        verifiedGoal.setModifiedAt(LocalDateTime.now());
        return repository.save(verifiedGoal);
    }

    @Transactional
    public void deleteOne(Long id) {
        Goal verifiedGoal = findVerifiedGoal(id);
        // DB 완전 삭제
        repository.delete(verifiedGoal);
    }

    public Goal findVerifiedGoal(long id) {
        Optional<Goal> optionalGoal = repository.findById(id);
        return optionalGoal.orElseThrow(() -> new BusinessLogicException(ExceptionCode.GOAL_NOT_FOUND));
    }
}
