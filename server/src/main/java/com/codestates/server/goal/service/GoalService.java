package com.codestates.server.goal.service;

import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.entity.Goal;
import com.codestates.server.goal.mapper.GoalMapper;
import com.codestates.server.goal.repository.GoalRepository;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@AllArgsConstructor
public class GoalService {
    
    private final GoalRepository repository;
    private final GoalMapper mapper;
    private final MemberRepository memberRepository;

    public GoalDto.Response findOne(long id) {
        return mapper.goalToGoalResponseDto(findVerifiedGoal(id));
    }

    public List<GoalDto.Response> findAll() {
        return mapper.goalsToGoalResponses(repository.findAll());
    }

    public List<GoalDto.Response> findByMember(long memberId) {
        memberRepository.findById(memberId).orElseThrow(() ->
                new CustomException(ExceptionCode.MEMBER_NOT_FOUND));

        return mapper.goalsToGoalResponses(repository.findAllByMemberId(memberId));
    }

    @Transactional
    public GoalDto.Response createOne(GoalDto.Post postGoal, long memberId) {
        Goal goal = mapper.goalPostToGoal(postGoal);
        Optional<Member> member = memberRepository.findById(memberId);

        Goal newGoal = new Goal(goal.getGoalName(), goal.getGoalPrice(), goal.getTargetLength(),
                member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND)));

        return mapper.goalToGoalResponseDto(repository.save(newGoal));
    }

    @Transactional
    public GoalDto.Response updateOne(GoalDto.Patch patchGoal, long memberId) {
        Goal goal = mapper.goalPatchToGoal(patchGoal);

        // Member, Goal and id verifications
        if (memberRepository.findById(memberId).isEmpty()) throw new CustomException(ExceptionCode.MEMBER_NOT_FOUND);
        Goal verifiedGoal = findVerifiedGoal(goal.getGoalId());
        commentMemberIdMatch(verifiedGoal, memberId);

        // changed price
        verifiedGoal.setGoalPrice(goal.getGoalPrice());

        // optionally changed values
        verifiedGoal.setGoalName(goal.getGoalName() != null ? goal.getGoalName() : verifiedGoal.getGoalName());
        verifiedGoal.setTargetLength(goal.getTargetLength() > 0 ? goal.getTargetLength() : verifiedGoal.getTargetLength());

        // new monthly price
        verifiedGoal.setCalculatedPrice(goal.getGoalPrice() / verifiedGoal.getTargetLength());

        // Modified time
        verifiedGoal.setModifiedAt(LocalDateTime.now());
        return mapper.goalToGoalResponseDto(repository.save(verifiedGoal));
    }

    @Transactional
    public void deleteOne(long id, long memberId) {
        Goal verifiedGoal = findVerifiedGoal(id);
        if (memberRepository.findById(memberId).isEmpty()) throw new CustomException(ExceptionCode.MEMBER_NOT_FOUND);
        commentMemberIdMatch(verifiedGoal, memberId);

        // DB 완전 삭제
        repository.delete(verifiedGoal);
    }

    @Transactional
    public GoalDto.Response changeCompletion(long id, char operator, long memberId) {
        // verification
        Goal verifiedGoal = findVerifiedGoal(id);
        if (memberRepository.findById(memberId).isEmpty()) throw new CustomException(ExceptionCode.MEMBER_NOT_FOUND);
        commentMemberIdMatch(verifiedGoal, memberId);

        int newCompleted = verifiedGoal.getCompleted();

        if (operator == '1') {
            int maxLength = verifiedGoal.getTargetLength();
            // 목표 설정 기간 보다 작은 경우에만 increase
            verifiedGoal.setCompleted(newCompleted + 1 > maxLength ? maxLength : ++newCompleted);
        } else {
            // 0 보다 큰 경우에만 decrease
            verifiedGoal.setCompleted(newCompleted > 0 ? --newCompleted : 0);
        }
        return mapper.goalToGoalResponseDto(repository.save(verifiedGoal));
    }

    public Goal findVerifiedGoal(long id) {
        Optional<Goal> optionalGoal = repository.findById(id);
        return optionalGoal.orElseThrow(() -> new CustomException(ExceptionCode.GOAL_NOT_FOUND));
    }

    public void commentMemberIdMatch(Goal goal, long memberId) {
        if (goal.getMember().getId() != memberId) throw new CustomException(ExceptionCode.GOAL_NOT_FOUND);
    }
}
