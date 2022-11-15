package com.codestates.server.board.controller;

import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.service.BoardService;
import org.springframework.data.domain.Page;
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
@RequestMapping("/board")
@Validated
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
    public CollectionModel<EntityModel<BoardDto.Response>> getBoards(@Positive @RequestParam int page,
                                                                     @Positive @RequestParam int size) {

        Page<Board> pagedBoards = boardService.findAll(page - 1, size);
        List<Board> listedBoards = pagedBoards.getContent();

        List<EntityModel<BoardDto.Response>> boards = listedBoards.stream()
                .map(mapper::boardToBoardResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());

        return CollectionModel.of(boards,
                linkTo(methodOn(BoardService.class).findAll(page - 1, size)).withSelfRel());
    }

    @PostMapping
    public ResponseEntity<?> postBoard(@Valid @RequestBody BoardDto.Post requestBody) {
        Board board = boardService.createOne(mapper.boardPostToBoard(requestBody));
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(mapper.boardToBoardResponseDto(board));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchBoard(@PathVariable long id, @Valid @RequestBody BoardDto.Patch requestBody) {
        requestBody.setBoardId(id);
        Board board = boardService.updateOne(mapper.boardPatchToBoard(requestBody));
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(mapper.boardToBoardResponseDto(board));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable long id) {
        boardService.deleteOne(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/like")
    public ResponseEntity<?> likeBoard(@PathVariable long id) {
        Board board = boardService.findVerifiedBoard(id);
        boardService.increaseLike(board);
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(mapper.boardToBoardResponseDto(board));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}/dislike")
    public ResponseEntity<?> dislikeBoard(@PathVariable long id) {
        Board board = boardService.findVerifiedBoard(id);
        boardService.decreaseLike(board);
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(mapper.boardToBoardResponseDto(board));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

}
