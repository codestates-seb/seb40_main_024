package com.codestates.server.goal.assembler;

import com.codestates.server.goal.controller.GoalController;
import com.codestates.server.goal.dto.GoalDto;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class GoalAssembler implements RepresentationModelAssembler<GoalDto.Response, EntityModel<GoalDto.Response>> {

    @Override
    public EntityModel<GoalDto.Response> toModel(GoalDto.Response goal) {
        return EntityModel.of(goal,
                WebMvcLinkBuilder.linkTo(methodOn(GoalController.class).getGoal(goal.getGoalId())).withSelfRel());
//                linkTo(methodOn(GoalController.class).getGoals()).withRel("goals"));
    }
}
