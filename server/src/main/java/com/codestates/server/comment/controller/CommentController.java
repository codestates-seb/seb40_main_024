package com.codestates.server.comment.controller;


import com.codestates.server.comment.assembler.CommentAssembler;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@AllArgsConstructor
@RestController
@RequestMapping("/")
@Validated
public class CommentController {

    private final CommentService commentService;
    private final CommentAssembler assembler;

    // --------------------------------------- test ------------------------------------------------
    @GetMapping("/comment/{id}")
    public EntityModel<CommentDto.Response> getComment(@PathVariable("id") @Positive long id) {
        return assembler.toModel(commentService.findOne(id));
    }

    @GetMapping("/comment")
    public CollectionModel<EntityModel<CommentDto.Response>> getComments() {
        List<EntityModel<CommentDto.Response>> comments = commentService.findAll().stream()
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(comments,
                linkTo(methodOn(CommentService.class).findAll()).withSelfRel());
    }
    // --------------------------------------- test ------------------------------------------------

    @PostMapping("/board/{board_id}/comment")
    public ResponseEntity<?> postComment(@Valid @RequestBody CommentDto.Post requestBody,
                                         @PathVariable("board_id") @Positive long boardId,
                                         @AuthenticationPrincipal String email) {

        EntityModel<CommentDto.Response> entityModel =
                assembler.toModel(commentService.createOne(requestBody, boardId, email));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/board/{board_id}/comment/{id}")
    public ResponseEntity<?> patchComment(@PathVariable("id") @Positive long id,
                                          @PathVariable("board_id") @Positive long boardId,
                                          @Valid @RequestBody CommentDto.Patch requestBody,
                                          @AuthenticationPrincipal String email) {

        requestBody.setCommentId(id);
        EntityModel<CommentDto.Response> entityModel =
                assembler.toModel(commentService.updateOne(requestBody, boardId, email));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/board/{board_id}/comment/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") @Positive long id,
                                           @PathVariable("board_id") @Positive long boardId,
                                           @AuthenticationPrincipal String email) {

        commentService.deleteOne(id, boardId, email);
        return ResponseEntity.noContent().build();
    }

}
