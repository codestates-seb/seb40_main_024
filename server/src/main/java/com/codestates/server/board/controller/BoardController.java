package com.codestates.server.board.controller;

import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@AllArgsConstructor
@RestController
@RequestMapping("/board")
@Validated
public class BoardController {

    private final BoardService boardService;
    private final BoardAssembler assembler;

    @GetMapping("/{id}")
    public EntityModel<BoardDto.Response> getBoard(@PathVariable long id) {
        return assembler.toModel(boardService.findOne(id));
    }

    @GetMapping
    public ResponseEntity getBoardsPaged(@Positive @RequestParam int page,
                                         @Positive @RequestParam int size) {

        Page<Board> pagedBoards = boardService.findAllByPage(page - 1, size);
        List<EntityModel<BoardDto.Response>> boards = boardService.boardStream(pagedBoards.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(boards, pagedBoards), HttpStatus.OK);
    }

    // Page 없는 전체 게시물 조회
    @GetMapping("/all")
    public CollectionModel<EntityModel<BoardDto.Response>> getBoards() {

        List<Board> boards = boardService.findAll();
        List<EntityModel<BoardDto.Response>> response = boardService.boardStream(boards);

        return CollectionModel.of(response,
                linkTo(methodOn(BoardService.class).findAll()).withSelfRel());
    }

    @PostMapping
    public ResponseEntity<?> postBoard(@Valid @RequestBody BoardDto.Post requestBody) {

        EntityModel<BoardDto.Response> entityModel = assembler.toModel(boardService.createOne(requestBody));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchBoard(@PathVariable long id, @Valid @RequestBody BoardDto.Patch requestBody) {

        requestBody.setBoardId(id);
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(boardService.updateOne(requestBody));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}/{like}")
    public ResponseEntity<?> likeBoard(@PathVariable("id") @Positive long id,
                                       @PathVariable("like") String like) {

        EntityModel<BoardDto.Response> entityModel = assembler.toModel(boardService.changeLike(id, like));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable long id) {
        boardService.deleteOne(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity getBoardsByCategory(@Positive @RequestParam int page, @Positive @RequestParam int size,
                                         @PathVariable("category") String category) {

        Page<Board> pagedBoards = boardService.findAllByCategory(page - 1, size, category);
        List<EntityModel<BoardDto.Response>> boards = boardService.boardStream(pagedBoards.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(boards, pagedBoards), HttpStatus.OK);
    }

}
