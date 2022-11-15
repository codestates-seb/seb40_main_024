package com.codestates.server.jwt.filter;

import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.jwt.auth.CustomDetails;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final MemberRepository memberRepository;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, MemberRepository memberRepository) {
        super(authenticationManager);
        this.memberRepository = memberRepository;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String jwtHeader = request.getHeader("Authorization");

        // JWT 토큰을 검증 해서 정상적인 사용자 인지 확인

        //header 존재유무 확인
        if (jwtHeader == null || !jwtHeader.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        String jwtToken = request.getHeader("Authorization").replace("Bearer ", "");

        String username = com.auth0.jwt.JWT.require(Algorithm.HMAC256("hong")).build().verify(jwtToken).getClaim("username")
                .asString();

        //username이 존재하면 정상적으로 처리 됨
        if  (username != null) {
            Member member = memberRepository.findByEmail(username).orElseThrow(() -> new CustomException(ExceptionCode.USER_NOT_FOUND));

            CustomDetails customDetails = new CustomDetails(member);

            // jwt 토큰 서명을 통해 정상이면 authentication 객체를 만들어줘 (위에서 검증 완료) 패스워드가 null 이어도 상관없음.
            UsernamePasswordAuthenticationToken authentication
                    = new UsernamePasswordAuthenticationToken(customDetails, null, customDetails.getAuthorities());

            //시큐리티 세션에 강제로 접근하여 Authentication 객체를 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request, response);
        }
    }
}
