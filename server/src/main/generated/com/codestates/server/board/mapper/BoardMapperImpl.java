package com.codestates.server.board.mapper;

import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T14:22:51+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPatchToBoard(BoardDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Board board = new Board();

        board.setBoardId( requestBody.getBoardId() );
        board.setTitle( requestBody.getTitle() );
        board.setBody( requestBody.getBody() );

        return board;
    }

    @Override
    public Board boardPostToBoard(BoardDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Board board = new Board();

        board.setTitle( requestBody.getTitle() );
        board.setBody( requestBody.getBody() );

        return board;
    }
}
