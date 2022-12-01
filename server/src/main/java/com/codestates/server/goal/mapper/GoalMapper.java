package com.codestates.server.goal.mapper;

import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.entity.Goal;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GoalMapper {

    Goal goalPostToGoal(GoalDto.Post requestBody);

    List<GoalDto.Response> goalsToGoalResponses(List<Goal> goals);

    default Goal goalPatchToGoal(GoalDto.Patch requestBody) {
        Goal patchGoal = new Goal();

        patchGoal.setGoalId(requestBody.getGoalId());
        patchGoal.setGoalName(requestBody.getGoalName());
        patchGoal.setGoalPrice(requestBody.getGoalPrice());
        // check 'null' -> gives a negative value
        patchGoal.setTargetLength(requestBody.getTargetLength() != null ? requestBody.getTargetLength() : -1);

        return patchGoal;
    }

    default GoalDto.Response goalToGoalResponseDto(Goal goal) {
        Member member = goal.getMember();

        return GoalDto.Response.builder()
                .goalId(goal.getGoalId())
                .goalName(goal.getGoalName())
                .goalPrice(goal.getGoalPrice())
                .targetLength(goal.getTargetLength())
                .calculatedPrice(goal.getCalculatedPrice())
                .completed(goal.getCompleted())
                .createdAt(goal.getCreatedAt())
                .modifiedAt(goal.getModifiedAt())
                .memberPosted(memberToMemberResponseObject(member))
                .build();
    }

    MemberDto.ResponseObject memberToMemberResponseObject(Member member);
}