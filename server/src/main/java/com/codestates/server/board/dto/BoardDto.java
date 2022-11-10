package com.codestates.server.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class BoardDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long boardId;
        private String title;
        private String body;
        private int like;

//        private LocalDateTime createdAt;
//        private LocalDateTime modifiedAt;
    }

}
