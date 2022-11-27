package com.codestates.server.goal.dto;

import com.codestates.server.member.dto.MemberDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class GoalDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @NotBlank(message = "목표를 입력하세요.")
        private String goalName;

        @NotNull(message = "금액을 입력하세요.")
        private long goalPrice;

        @NotNull(message = "목표 기간을 입력하세요.")
        @Positive(message = "목표 기간은 0 보다 큰 기간을 입력하세요.")
        private int targetLength;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long goalId;

        // optional
        private String goalName;

        @NotNull(message = "변경된 금액을 입력하세요.")
        private long goalPrice;

        // optional
        @Positive(message = "목표 기간은 0 보다 큰 기간을 입력하세요.")
        private Integer targetLength;
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
        private int completed;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        private MemberDto.ResponseObject memberPosted;
    }
}
