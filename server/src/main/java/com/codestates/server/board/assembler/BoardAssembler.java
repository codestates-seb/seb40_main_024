package com.codestates.server.board.assembler;

import com.codestates.server.board.controller.BoardController;
import com.codestates.server.board.dto.BoardDto;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Component
public class BoardAssembler implements RepresentationModelAssembler <BoardDto.Response, EntityModel<BoardDto.Response>> {

    @Override
    public EntityModel<BoardDto.Response> toModel(BoardDto.Response board) {
        return EntityModel.of(board,
                WebMvcLinkBuilder.linkTo(methodOn(BoardController.class).getBoard(board.getBoardId())).withSelfRel());
//                linkTo(methodOn(BoardController.class).getBoards()).withRel("boards"));
    }

}
