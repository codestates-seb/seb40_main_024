package com.codestates.server.member.controller;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.mapper.MemberMapper;
import com.codestates.server.member.service.MemberService;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Validated
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

    // 회원 로그인 구현 -> "/api/auth/login" 시큐리티 사용으로 인해 SecurityConfiguration 에서 구현 되었음.

    // 회원 로그아웃 구현 -> 보안인증[O] Optinal

    // 회원 내 정보 구현 -> 보안인증[O]
    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId") String email) {
        Member member = memberService.findMember(email);
        return ResponseEntity.ok(mapper.memberToMemberResponse(member));
    }

    // 회원 내 정보 수정 -> 보안인증[O]
    @PatchMapping("/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") String email,
                                      @Valid @RequestBody MemberDto.Patch patch) {
        Member member = memberService.updateMember(email ,mapper.memberPatchToMember(patch));
        return ResponseEntity.ok(mapper.memberToMemberResponse(member));
    }

    // 패스워드 검증 구현 -> 보안인증 [O]
    @PostMapping("{memberId}")
    public ResponseEntity getPassword(@PathVariable("memberId") String email,
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
    @DeleteMapping("/{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") String memberId,
                                       @Valid @RequestBody Member member) {
        Member findMember = memberService.findPassword(memberId);

        if (passwordEncoder.matches(member.getPassword(), findMember.getPassword())) {
            memberService.deleteMember(memberId);
            return ResponseEntity.ok().build();
        }
        else
            return ResponseEntity.badRequest().build();
    }
}
