package com.codestates.server.goal.mapper;

import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.entity.Goal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface GoalMapper {

    Goal goalPostToGoal(GoalDto.Post requestBody);
    Goal goalPatchToGoal(GoalDto.Patch requestBody);
    GoalDto.Response goalToGoalResponseDto(Goal goal);
}
