package com.codestates.server.goal.controller;

import com.codestates.server.goal.assembler.GoalAssembler;
import com.codestates.server.goal.dto.GoalDto;
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
@RequestMapping("/")
@Validated
public class GoalController {

    private final GoalService goalService;
    private final GoalAssembler assembler;

    public GoalController(GoalService goalService, GoalAssembler assembler) {
        this.goalService = goalService;
        this.assembler = assembler;
    }

    // --------------------------------------- test ------------------------------------------------
    @GetMapping("/goal/{id}")
    public EntityModel<GoalDto.Response> getGoal(@PathVariable("id") long id) {
        return assembler.toModel(goalService.findOne(id));
    }

    @GetMapping("/goal")
    public CollectionModel<EntityModel<GoalDto.Response>> getGoals() {
        List<EntityModel<GoalDto.Response>> goals = goalService.findAll().stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(goals,
                linkTo(methodOn(GoalService.class).findAll()).withSelfRel());
    }
    // --------------------------------------- test ------------------------------------------------

    @GetMapping("/{member_id}/goal")
    public CollectionModel<EntityModel<GoalDto.Response>> getGoalsByMember(@PathVariable("member_id") long memberId) {
        List<EntityModel<GoalDto.Response>> goals = goalService.findByMember(memberId).stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(goals,
                linkTo(methodOn(GoalService.class).findAll()).withSelfRel());
    }

    @PostMapping("/{member_id}/goal")
    public ResponseEntity<?> postGoal(@Valid @RequestBody GoalDto.Post requestBody,
                                      @PathVariable("member_id") long memberId) {
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.createOne(requestBody, memberId));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{member_id}/goal/{id}")
    public ResponseEntity<?> patchGoal(@PathVariable long id, @Valid @RequestBody GoalDto.Patch requestBody,
                                       @PathVariable("member_id") long memberId) {
        requestBody.setGoalId(id);
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.updateOne(requestBody, memberId));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{member_id}/goal/{id}/complete")
    public ResponseEntity<?> completedGoal(@PathVariable long id,
                                           @PathVariable("member_id") long memberId) {
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.changeCompletion(id, '1', memberId));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{member_id}/goal/{id}/incomplete")
    public ResponseEntity<?> uncompletedGoal(@PathVariable long id,
                                             @PathVariable("member_id") long memberId) {
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.changeCompletion(id, '0', memberId));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{member_id}/goal/{id}")
    public ResponseEntity<?> deleteGoal(@PathVariable long id,
                                        @PathVariable("member_id") long memberId) {
        goalService.deleteOne(id, memberId);
        return ResponseEntity.noContent().build();
    }

}
