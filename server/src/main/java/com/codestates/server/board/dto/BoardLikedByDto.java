package com.codestates.server.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class BoardLikedByDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private String name;
    }
}
