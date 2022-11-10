package com.codestates.server.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class BoardDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        @Size(min = 10, message = "내용은 10자 이상 입력하세요.")
        private String body;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private long boardId;

        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        @Size(min = 10, message = "내용은 10자 이상 입력하세요.")
        private String body;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long boardId;
        private String title;
        private String body;
        private int like;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

}
