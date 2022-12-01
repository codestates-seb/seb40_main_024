package com.codestates.server.board.dto;

import com.codestates.server.board.entity.Board;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class BoardDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Post {

        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        @Size(min = 10, message = "내용은 10자 이상 입력하세요.")
        private String body;

        @NotBlank(message = "일반 / 자산 - 태그를 선택하세요.")
        private String category;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Patch {

        private long boardId;

        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        @Size(min = 10, message = "내용은 10자 이상 입력하세요.")
        private String body;

        private String category;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private long boardId;
        private String title;
        private String body;
        private int view;
        private int like;
        private Board.BoardCategory category;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        private MemberDto.ResponseObject memberPosted;
        private List<CommentDto.Response> commentsPosted;
    }

}
