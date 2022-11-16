package com.codestates.server.goal.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class GoalDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @NotBlank(message = "목표를 입력하세요.")
        private String goalName;

        @NotNull(message = "가격을 입력하세요.")
        private long goalPrice;

        @NotNull(message = "목표 기간을 입력하세요.")
        private int targetLength;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long goalId;

        @NotBlank(message = "목표를 입력하세요.")
        private String goalName;

        @NotNull(message = "가격을 입력하세요.")
        private long goalPrice;

        @NotNull(message = "목표 기간을 입력하세요.")
        private int targetLength;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Response {

        private Long goalId;
        private String goalName;
        private long goalPrice;
        private int targetLength;
        private long calculatedPrice;

        // WIP: add MemberDto.Response

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}