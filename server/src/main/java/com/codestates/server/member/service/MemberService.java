package com.codestates.server.member.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.jwt.auth.utils.CustomAuthorityUtils;
import com.codestates.server.jwt.entity.Jwt;
import com.codestates.server.jwt.repository.JwtRepository;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import com.codestates.server.member.status.MemberStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        //중복 검증을 거쳐
        verifyEmail(member);

        member.updatePassword(passwordEncoder.encode(member.getPassword()));
        member.changeRoles(authorityUtils.createRole(member.getEmail()));

        return memberRepository.save(member);
    }

    @Transactional
    public Member updateMember(Member member) {
        Member verifyMember = findVerifyMember(member.getId());
        Optional.ofNullable(member.getName()).ifPresent(verifyMember::updateName);
        Optional.ofNullable(member.getPassword()).ifPresent(verifyMember::updatePassword);
        return verifyMember;
    }

    @Transactional
    public void deleteMember(Long id) {
        Member findMemberId = findVerifyMember(id);
        memberRepository.delete(findMemberId);
    }

    public List<Member> findAll() {
        List<Member> members = memberRepository.findAll();
        return members.stream()
                .map(member -> member)
                .collect(Collectors.toList());
    }

    @Transactional
    public String getAccessToken(String refreshToken) {

        Jwt token = jwtRepository.findRefreshToken(refreshToken).orElseThrow(() -> new CustomException(ExceptionCode.REFRESH_TOKEN_NOT_FOUND));
        String accessToken = JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis() + (600000)))
                .withClaim("id", token.getMember().getId())
                .withClaim("username", token.getMember().getEmail())
                .sign(Algorithm.HMAC256("hong"));
        token.changeAccessToken(accessToken);
        return accessToken;
    }

    @Transactional
    public void deleteToken(String refreshToken) {
        jwtRepository.deleteJwtToken(refreshToken);
    }


    //중복 메일 찾는 메서드
    public void verifyEmail(Member member) {
        if (memberRepository.findByEmail(member.getEmail()).isPresent()) {
            throw new CustomException(ExceptionCode.DUPLICATE_MEMBER);
        }
    }

    //맴버 검증로직
    public Member findVerifyMember(Long id) {
       return memberRepository.findById(id).orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Member getMemberFromToken(String token) {
        String pureToken = token.replace("Bearer ", "");
        Jwt jwt = jwtRepository.findAccessToken(pureToken).orElseThrow(() -> new CustomException(ExceptionCode.MISMATCH_ACCESS_TOKEN));
        Member verifyMember = findVerifyMember(jwt.getMember().getId());
        return findVerifyMember(jwt.getMember().getId());
    }
}
