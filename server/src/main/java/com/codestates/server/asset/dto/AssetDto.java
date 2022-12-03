package com.codestates.server.asset.dto;

import com.codestates.server.member.dto.MemberDto;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


public class AssetDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Post {

        @NotBlank(message = "자산을 입력하세요.") // @NotBlank - String 타입에 쓰는 애너테이션
        private String assetType;

        @NotNull(message = "금액을 입력하세요.") // @NotNull - long 타입에 쓰는 애너테이션
        private Long assetValue;

        private String email;

        }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Patch {

        private long assetId;

        @NotBlank(message = "자산을 입력하세요 ")
        private String assetType;

        @NotNull(message = "부호와 금액을 입력하세요. ex) +3000")
        @Pattern(regexp = ("[-+]?\\d*")) // 숫자 앞에 -.+ 허용. 문자열에 최소 하나 이상의 숫자 존재해야
        private String strValue;



    }


    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Response {

        private long assetId;
        private String assetType;
        private long assetValue;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        private MemberDto.ResponseObject memberPosted;


    }


}