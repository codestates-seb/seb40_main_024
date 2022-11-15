package com.codestates.server.jwt.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class TokenPostDto {

    private String accessToken;
    private String refreshToken;
}
