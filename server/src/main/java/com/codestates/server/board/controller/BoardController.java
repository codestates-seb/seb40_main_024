package com.codestates.server.board.controller;

import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.service.BoardService;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/boards")
public class BoardController {

    private final BoardService boardService;

    private final BoardMapper mapper;

    private final BoardAssembler assembler;

    public BoardController(BoardService boardService, BoardMapper mapper, BoardAssembler assembler) {
        this.boardService = boardService;
        this.mapper = mapper;
        this.assembler = assembler;
    }

    @GetMapping("/{id}")
    public EntityModel<BoardDto.Response> getBoard(@PathVariable long id) {
        Board board = boardService.findOne(id);
        BoardDto.Response response = mapper.boardToBoardResponseDto(board);
        return assembler.toModel(response);
    }

    @GetMapping
    public CollectionModel<EntityModel<BoardDto.Response>> getBoards() {
        List<EntityModel<BoardDto.Response>> boards = boardService.findAll().stream()
                .map(mapper::boardToBoardResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());

        // Page WIP

        return CollectionModel.of(boards,
                linkTo(methodOn(BoardService.class).findAll()).withSelfRel());
    }


}
