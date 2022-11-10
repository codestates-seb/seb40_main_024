package com.codestates.server.asset.dto;

import com.codestates.server.asset.entity.Asset;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public class AssetDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "자산을 입력하세요.")
        private String title;

        @NotBlank(message = "금액을 입력하세요.")
//        String currency = getCurrency().
        @Size(min = 1, message = "최소 단위는 1 입니다")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long assetId;

        @NotBlank(message = "자산을 입력하세요 ")
        private String title;

        @NotBlank(message = "금액을 입력하세요")
        @Size(min = 1, message = "최소 단위는 1 입니다")
        private String content;
    }


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private long assetId;
        private String title;
        private String content;

//        public void setAsset(Asset asset) {
//            this.assetId = asset.getAssetId();
//            this.asset = asset.getAsset();
//        }
    }


}
