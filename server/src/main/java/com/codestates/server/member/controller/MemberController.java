package com.codestates.server.member.controller;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.mapper.MemberMapper;
import com.codestates.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Validated
@Log4j2
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;
    private final PasswordEncoder passwordEncoder;

    // 회원 가입 구현 -> 보안인증[O]
    @PostMapping
    public ResponseEntity registerMember(@Valid @RequestBody MemberDto.Post post) {
        Member member = mapper.memberPostToMember(post);
        Member registerMember = memberService.createMember(member);
        return ResponseEntity.ok(registerMember);
    }



    // 회원 내 정보 구현 -> 보안인증[O]
    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId") Long id) {
        Member member = memberService.findVerifiedMember(id);
        return ResponseEntity.ok(mapper.memberToMemberResponse(member));
    }

    // 회원 내 정보 수정 -> 보안인증[O]
    @PatchMapping("/update")
    public ResponseEntity patchMember(@AuthenticationPrincipal String email,
                                      @Valid @RequestBody MemberDto.Patch patch) {
        log.info("email ={}", email);
        Member member = memberService.updateMember(email ,mapper.memberPatchToMember(patch));
        return ResponseEntity.ok(mapper.memberToMemberResponse(member));
    }
    // 패스워드 검증 구현 -> 보안인증 [O]
    @PostMapping("/members")
    public ResponseEntity getPassword(@AuthenticationPrincipal String email,
                                      @Valid @RequestBody Member member) {
        Member findMember = memberService.findPassword(email);

        if (passwordEncoder.matches(member.getPassword(), findMember.getPassword())) {
            return ResponseEntity.ok().build();
        }
        else
            return ResponseEntity.badRequest().build();
    }

    // 전체 회원 목록 구현 -> 보안인증[x] 필요하지 않음
//    @GetMapping
//    public ResponseEntity getMembers(@Valid @RequestBody PageInfo.Request request) {
//        Page<Member> pageMembers = memberService.findAllMembers(request.getPage() - 1, request.getSize());
//        List<Member> members = pageMembers.getContent();
//        return ResponseEntity.ok(new MemberListDto<>(mapper.membersToMemberResponses(members),pageMembers));
//    }

    // 회원 탈퇴 구현
    @DeleteMapping("/delete")
    public ResponseEntity deleteMember(@AuthenticationPrincipal String email
                                       ) {
//        Member findMember = memberService.findPassword(email);
/*
        if (passwordEncoder.matches(member.getPassword(), findMember.getPassword())) {
            memberService.deleteMember(email);
            return ResponseEntity.ok().build();
        }
        else
            return ResponseEntity.badRequest().build();
*/ //
        memberService.deleteMember(email);
        return ResponseEntity.ok().build();
    }

//     회원 로그아웃 구현 -> 보안인증[O] Optional
/*    @PostMapping("/logout")
    public ResponseEntity<?> logoutMember(@AuthenticationPrincipal String email, HttpServletRequest request){
//        MemberService.logout(request, email);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }*/
}
