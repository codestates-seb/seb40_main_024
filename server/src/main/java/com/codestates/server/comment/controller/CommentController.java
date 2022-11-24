package com.codestates.server.comment.controller;


import com.codestates.server.comment.assembler.CommentAssembler;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.mapper.CommentMapper;
import com.codestates.server.comment.service.CommentService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/")
@Validated
public class CommentController {
    
    private final CommentService commentService;
    private final CommentMapper mapper;
    private final CommentAssembler assembler;

    public CommentController(CommentService commentService, CommentMapper mapper, CommentAssembler assembler) {
        this.commentService = commentService;
        this.mapper = mapper;
        this.assembler = assembler;
    }


    // --------------------------------------- test ------------------------------------------------
    @GetMapping("/comment/{id}")
    public EntityModel<CommentDto.Response> getComment(@PathVariable("id") @Positive long id) {
        Comment comment = commentService.findOne(id);
        CommentDto.Response response = mapper.commentToCommentResponseDto(comment);
        return assembler.toModel(response);
    }

    @GetMapping("/comment")
    public CollectionModel<EntityModel<CommentDto.Response>> getComments() {
        List<EntityModel<CommentDto.Response>> comments = commentService.findAll().stream()
                .map(mapper::commentToCommentResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());
        return CollectionModel.of(comments,
                linkTo(methodOn(CommentService.class).findAll()).withSelfRel());
    }
    // --------------------------------------- test ------------------------------------------------

    @PostMapping("/board/{board_id}/comment")
    public ResponseEntity<?> postComment(@Valid @RequestBody CommentDto.Post requestBody,
                                         @PathVariable("board_id") @Positive long boardId) {
        Comment comment = commentService.createOne(mapper.commentPostToComment(requestBody), boardId);
        EntityModel<CommentDto.Response> entityModel = assembler.toModel(mapper.commentToCommentResponseDto(comment));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/board/{board_id}/comment/{id}")
    public ResponseEntity<?> patchComment(@PathVariable("id") @Positive long id,
                                          @PathVariable("board_id") @Positive long boardId,
                                          @Valid @RequestBody CommentDto.Patch requestBody) {
        requestBody.setCommentId(id);
        Comment comment = commentService.updateOne(mapper.commentPatchToComment(requestBody), boardId);
        EntityModel<CommentDto.Response> entityModel = assembler.toModel(mapper.commentToCommentResponseDto(comment));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/board/{board_id}/comment/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") @Positive long id,
                                           @PathVariable("board_id") @Positive long boardId) {
        commentService.deleteOne(id, boardId);
        return ResponseEntity.noContent().build();
    }
    
}
