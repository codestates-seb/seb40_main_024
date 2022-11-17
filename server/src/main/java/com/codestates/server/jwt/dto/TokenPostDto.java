package com.codestates.server.jwt.dto;

import lombok.Getter;

@Getter
public class TokenPostDto {

    private String accessToken;
    private String refreshToken;
}
