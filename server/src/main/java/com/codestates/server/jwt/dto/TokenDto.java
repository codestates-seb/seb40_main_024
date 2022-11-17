package com.codestates.server.jwt.dto;

import lombok.Getter;

@Getter
public class TokenDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpiresIn;
}
