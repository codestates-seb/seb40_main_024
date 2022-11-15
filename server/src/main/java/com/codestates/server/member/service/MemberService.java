package com.codestates.server.member.service;

import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.jwt.auth.utils.CustomAuthorityUtils;
import com.codestates.server.jwt.repository.JwtRepository;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtRepository jwtRepository;
    private final EntityManager em;


    @Transactional
    public Member createMember(Member member) {
        verifyEmail(member);
    }

    private void verifyEmail(Member member) {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new CustomException(ExceptionCode.DUPLICATE_MEMBER);
        }
    }
}
