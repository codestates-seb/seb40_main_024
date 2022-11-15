package com.codestates.server.jwt;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Calendar;
import java.util.Date;

@Slf4j
@Component
public class TokenProvider {
    /**
     *  유저 정보로 JWT 토큰을 만들거나 토큰을 바탕으로 유저 정보를 가져옴
     *  JWT 토큰 관련 암호화, 복호화, 검증 로직
     */
    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "bearer";

    @Value("${jwt.access-token-expiration-time}")
    private int ACCESS_TOKEN_EXPIRE_TIME;

    @Value("${jwt.refresh-token-expiration-time}")
    private int ACCESS_TOKEN_REFRESH_TIME;

    private final Key key;

    public TokenProvider (@Value("${jwt.secret}") String secreteKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secreteKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();
        return calendar.getTime();
    }

}
