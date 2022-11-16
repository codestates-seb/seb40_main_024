package com.codestates.server.goal.controller;

import com.codestates.server.goal.assembler.GoalAssembler;
import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.entity.Goal;
import com.codestates.server.goal.mapper.GoalMapper;
import com.codestates.server.goal.service.GoalService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/goal")
@Validated
public class GoalController {

    private final GoalService goalService;

    private final GoalMapper mapper;

    private final GoalAssembler assembler;

    public GoalController(GoalService goalService, GoalMapper mapper, GoalAssembler assembler) {
        this.goalService = goalService;
        this.mapper = mapper;
        this.assembler = assembler;
    }

    @GetMapping("/{id}")
    public EntityModel<GoalDto.Response> getGoal(@PathVariable("id") long id) {
        Goal goal = goalService.findOne(id);
        GoalDto.Response response = mapper.goalToGoalResponseDto(goal);
        return assembler.toModel(response);
    }

    @GetMapping
    public CollectionModel<EntityModel<GoalDto.Response>> getGoals() {
        List<EntityModel<GoalDto.Response>> goals = goalService.findAll().stream()
                .map(mapper::goalToGoalResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(goals,
                linkTo(methodOn(GoalService.class).findAll()).withSelfRel());
    }

    @PostMapping
    public ResponseEntity<?> postGoal(@Valid @RequestBody GoalDto.Post requestBody) {
        Goal goal = goalService.createOne(mapper.goalPostToGoal(requestBody));
        EntityModel<GoalDto.Response> entityModel = assembler.toModel(mapper.goalToGoalResponseDto(goal));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchGoal(@PathVariable long id, @Valid @RequestBody GoalDto.Patch requestBody) {
        requestBody.setGoalId(id);
        Goal goal = goalService.updateOne(mapper.goalPatchToGoal(requestBody));
        EntityModel<GoalDto.Response> entityModel = assembler.toModel(mapper.goalToGoalResponseDto(goal));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGoal(@PathVariable long id) {
        goalService.deleteOne(id);
        return ResponseEntity.noContent().build();
    }

    // TODO: KIM - 목표 자산 성취도 구현
}
