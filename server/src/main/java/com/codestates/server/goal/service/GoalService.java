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

    // --------------------------------------- test ------------------------------------------------
    public GoalDto.Response findOne(long id) {
        return mapper.goalToGoalResponseDto(findVerifiedGoal(id));
    }

    public List<GoalDto.Response> findAll() {
        return mapper.goalsToGoalResponses(repository.findAll());
    }
    // --------------------------------------- test ------------------------------------------------

    public List<GoalDto.Response> findAllCommentsByMember(String email) {

        if (email.equals("anonymousUser")) throw new CustomException(ExceptionCode.GOAL_POSTER_NOT_FOUND);
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND));

        return mapper.goalsToGoalResponses(repository.findAllByMemberId(member.getId()));
    }

    @Transactional
    public GoalDto.Response createOne(GoalDto.Post postGoal, String email) {

        if (email.equals("anonymousUser")) throw new CustomException(ExceptionCode.GOAL_POSTER_NOT_FOUND);

        Goal goal = mapper.goalPostToGoal(postGoal);
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND));

        Goal newGoal = new Goal(goal.getGoalName(), goal.getGoalPrice(), goal.getTargetLength(), member);

        return mapper.goalToGoalResponseDto(repository.save(newGoal));
    }

    @Transactional
    public GoalDto.Response updateOne(GoalDto.Patch patchGoal, String email) {
        Goal goal = mapper.goalPatchToGoal(patchGoal);

        // Member, Goal and id verifications
        Goal verifiedGoal = verifyLoggedInMemberForGoal(goal.getGoalId(), email);
        if (! verifiedGoal.getMember().getEmail().equals(email)) throw new CustomException(ExceptionCode.GOAL_POSTER_NOT_MATCHED);

        // changed price
        verifiedGoal.setGoalPrice(goal.getGoalPrice());

        // optionally changed values
        verifiedGoal.setGoalName(goal.getGoalName() != null ? goal.getGoalName() : verifiedGoal.getGoalName());
        verifiedGoal.setTargetLength(goal.getTargetLength() > 0 ? goal.getTargetLength() : verifiedGoal.getTargetLength());

        // new monthly price
        int newMonthly = (int) Math.ceil((double) goal.getGoalPrice() / verifiedGoal.getTargetLength());
        verifiedGoal.setCalculatedPrice(newMonthly);

        // Modified time
        verifiedGoal.setModifiedAt(LocalDateTime.now());
        return mapper.goalToGoalResponseDto(repository.save(verifiedGoal));
    }

    @Transactional
    public void deleteOne(long id, String email) {
        Goal verifiedGoal = verifyLoggedInMemberForGoal(id, email);

        // DB 완전 삭제
        repository.delete(verifiedGoal);
    }

    @Transactional
    public GoalDto.Response changeCompletion(long id, String operator, String email) {
        // verification
        if (!operator.equals("complete") && !operator.equals("incomplete")) {
            throw new CustomException(ExceptionCode.GOAL_URL_NOT_FOUND);
        }

        Goal verifiedGoal = verifyLoggedInMemberForGoal(id, email);
        int newCompleted = verifiedGoal.getCompleted();

        if (operator.equals("complete")) {
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

    public Goal verifyLoggedInMemberForGoal(long id, String email) {
        Goal verifiedGoal = findVerifiedGoal(id);
        if (email.equals("anonymousUser")) {
            throw new CustomException(ExceptionCode.GOAL_POSTER_NOT_FOUND);
        } else if (! email.equals(verifiedGoal.getMember().getEmail())) {
            throw new CustomException(ExceptionCode.GOAL_POSTER_NOT_MATCHED);
        }
        return verifiedGoal;
    }
}
