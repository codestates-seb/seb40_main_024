package com.codestates.server.comment.assembler;

import com.codestates.server.comment.controller.CommentController;
import com.codestates.server.comment.dto.CommentDto;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class CommentAssembler implements RepresentationModelAssembler <CommentDto.Response, EntityModel<CommentDto.Response>> {

    @Override
    public EntityModel<CommentDto.Response> toModel(CommentDto.Response comment) {
        return EntityModel.of(comment,
                WebMvcLinkBuilder.linkTo(methodOn(CommentController.class).getComment(comment.getCommentId())).withSelfRel(),
                linkTo(methodOn(CommentController.class).getComments()).withRel("comments"));
    }
}
