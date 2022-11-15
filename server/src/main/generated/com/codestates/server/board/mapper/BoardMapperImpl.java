package com.codestates.server.board.mapper;

import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-15T17:09:45+0900",
    comments = "version: 1.5.2.Final, compiler: Eclipse JDT (Batch) , environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPatchToBoard(BoardDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        String title = null;
        String body = null;

        Board board = new Board( title, body );

        return board;
    }

    @Override
    public Board boardPostToBoard(BoardDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        String title = null;
        String body = null;

        Board board = new Board( title, body );

        return board;
    }
}
