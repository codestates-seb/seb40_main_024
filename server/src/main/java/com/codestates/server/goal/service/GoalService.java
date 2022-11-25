package com.codestates.server.goal.service;

import com.codestates.server.exception.CustomException;
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

        // 로그인된 멤버 정보 추가

        Goal newGoal = new Goal(goal.getGoalId(), goal.getGoalName(), goal.getGoalPrice(), goal.getTargetLength());
        return repository.save(newGoal);
    }

    @Transactional
    public Goal updateOne(Goal goal) {
        Goal verifiedGoal = findVerifiedGoal(goal.getGoalId());

        // changed price
        verifiedGoal.setGoalPrice(goal.getGoalPrice());

        // optionally changed values
        verifiedGoal.setGoalName(goal.getGoalName() != null ? goal.getGoalName() : verifiedGoal.getGoalName());
        verifiedGoal.setTargetLength(goal.getTargetLength() > 0 ? goal.getTargetLength() : verifiedGoal.getTargetLength());

        // new monthly price
        verifiedGoal.setCalculatedPrice(goal.getGoalPrice() / verifiedGoal.getTargetLength());

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

    @Transactional
    public Goal increaseCompletion(Long id) {
        Goal verifiedGoal = findVerifiedGoal(id);
        int newCompleted = verifiedGoal.getCompleted();
        int maxLength = verifiedGoal.getTargetLength();
        // 목표 설정 기간 보다 작은 경우에만 increase
        verifiedGoal.setCompleted(newCompleted + 1 > maxLength ? maxLength : ++newCompleted);
        return repository.save(verifiedGoal);
    }

    @Transactional
    public Goal decreaseCompletion(Long id) {
        Goal verifiedGoal = findVerifiedGoal(id);
        int completed = verifiedGoal.getCompleted();
        // 0 보다 큰 경우에만 decrease
        verifiedGoal.setCompleted(completed > 0 ? --completed : 0);
        return repository.save(verifiedGoal);
    }

    public Goal findVerifiedGoal(long id) {
        Optional<Goal> optionalGoal = repository.findById(id);
        return optionalGoal.orElseThrow(() -> new CustomException(ExceptionCode.GOAL_NOT_FOUND));
    }
}
