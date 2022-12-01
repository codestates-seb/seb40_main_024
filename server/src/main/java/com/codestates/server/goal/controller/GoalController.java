package com.codestates.server.goal.controller;

import com.codestates.server.goal.assembler.GoalAssembler;
import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.service.GoalService;
import lombok.AllArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@AllArgsConstructor
@RestController
@RequestMapping("/goal")
@Validated
public class GoalController {

    private final GoalService goalService;
    private final GoalAssembler assembler;

    // --------------------------------------- test ------------------------------------------------
    @GetMapping("/{id}")
    public EntityModel<GoalDto.Response> getGoal(@PathVariable("id") long id) {
        return assembler.toModel(goalService.findOne(id));
    }
//
//    @GetMapping("/goal")
//    public CollectionModel<EntityModel<GoalDto.Response>> getGoals() {
//        List<EntityModel<GoalDto.Response>> goals = goalService.findAll().stream()
//                .map(assembler::toModel)
//                .collect(Collectors.toList());
//
//        return CollectionModel.of(goals,
//                linkTo(methodOn(GoalService.class).findAll()).withSelfRel());
//    }
    // --------------------------------------- test ------------------------------------------------



    // --------------------------------- JWT header needed -----------------------------------------
    @GetMapping
    public CollectionModel<EntityModel<GoalDto.Response>> getGoalsByMember(@AuthenticationPrincipal String email) {

        List<GoalDto.Response> foundGoals = goalService.findAllCommentsByMember(email);

        List<EntityModel<GoalDto.Response>> goals = foundGoals.stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(goals,
                linkTo(methodOn(GoalService.class).findAll()).withSelfRel());
    }

    @PostMapping
    public ResponseEntity<?> postGoal(@Valid @RequestBody GoalDto.Post requestBody,
                                      @AuthenticationPrincipal String email) {
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.createOne(requestBody, email));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchGoal(@PathVariable long id,
                                       @Valid @RequestBody GoalDto.Patch requestBody,
                                       @AuthenticationPrincipal String email) {
        requestBody.setGoalId(id);
        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.updateOne(requestBody, email));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}/{completion}")
    public ResponseEntity<?> completedGoal(@PathVariable long id,
                                           @PathVariable("completion") String completion,
                                           @AuthenticationPrincipal String email) {

        EntityModel<GoalDto.Response> entityModel =
                assembler.toModel(goalService.changeCompletion(id, completion, email));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGoal(@PathVariable long id,
                                        @AuthenticationPrincipal String email) {
        goalService.deleteOne(id, email);
        return ResponseEntity.noContent().build();
    }

}
