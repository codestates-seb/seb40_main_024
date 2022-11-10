package com.codestates.server.board.mapper;

import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BoardMapper {

    BoardDto.Response boardToBoardResponseDto(Board board);
}
