package com.codestates.server.asset.dto;

import com.codestates.server.member.dto.MemberDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;


public class AssetDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "자산을 입력하세요.") // @NotBlank - String 타입에 쓰는 애너테이션
        private String assetType;

        @NotNull(message = "금액을 입력하세요.") // @NotNull - long 타입에 쓰는 애너테이션
//        String currency = getCurrency().
//        @Size(min = 1, message = "최소 단위는 1 입니다")
        private long assetValue;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private long assetId;

        @NotBlank(message = "자산을 입력하세요 ")
        private String assetType;

//        private long assetValue;

        @NotNull(message = "부호와 금액을 입력하세요. ex) +3000")
        @Pattern(regexp = ("[-+]?\\d*")) // 숫자 앞에 -.+ 허용. 문자열에 최소 하나 이상의 숫자 존재해야
//        @Size(min = 1, message = "최소 단위는 1 입니다")
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
        private long memberId;
        private MemberDto.ResponseObject memberPosted;

//        public void setAsset(Asset asset) {
//            this.assetId = asset.getAssetId();
//            this.asset = asset.getAsset();
//        }
    }


}
