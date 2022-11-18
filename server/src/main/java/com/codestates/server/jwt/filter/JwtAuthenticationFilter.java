package com.codestates.server.jwt.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.server.jwt.auth.CustomDetails;
import com.codestates.server.jwt.entity.Jwt;
import com.codestates.server.jwt.repository.JwtRepository;
import com.codestates.server.member.dto.LoginDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtRepository jwtRepository;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

            //이게 실행되면 CustomDetailsService의 loadUsername()함수가 실행
            Authentication authenticate = authenticationManager.authenticate(authenticationToken);
            return authenticationManager.authenticate(authenticationToken);


        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        CustomDetails principal = (CustomDetails) authResult.getPrincipal();


        //jwt 토큰 생성 라이브러리
        String accessToken = JWT.create()
                .withSubject("JWT")
                .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * 6000)))
                .withClaim("id", principal.getMember().getId())
                .withClaim("username", principal.getUsername())
                .sign(Algorithm.HMAC256("hong"));
        jwtRepository.findMemberId(String.valueOf(principal.getMember().getId())).ifPresent(jwtRepository::delete);

        String refreshToken = JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis() + (600000) * 4))
                .withClaim("id", principal.getMember().getId())
                .withClaim("username", principal.getUsername())
                .sign(Algorithm.HMAC256("hong"));

        Jwt jwt = new Jwt(accessToken, refreshToken, principal.getMember());
        jwtRepository.save(jwt);

        //토큰 전달
        response.addHeader("Authorization", "Bearer " + accessToken);
        response.addHeader("Refresh", refreshToken);
        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }
}
