package com.codestates.server.comment.dto;

import com.codestates.server.member.dto.MemberDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class CommentDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @NotBlank(message = "내용을 입력하세요.")
        private String body;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private long commentId;

        @NotBlank(message = "내용을 입력하세요.")
        private String body;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private long commentId;
        private String body;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private MemberDto.ResponseObject memberPosted;
    }

}
