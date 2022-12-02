package com.codestates.server.asset.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class AssetEditDto {

    @NotNull(message = "부호와 금액을 입력하세요. ex) +3000")
    @Pattern(regexp = ("[-+]?\\d*")) // 숫자 앞에 -.+ 허용. 문자열에 최소 하나 이상의 숫자 존재해야
//    @Size(min = 1, message = "최소 단위는 1 입니다")
    private String content;

    @AllArgsConstructor
    @Builder
    public static class Response {

        private long assetEditorId;
        private String content;

    }

}
