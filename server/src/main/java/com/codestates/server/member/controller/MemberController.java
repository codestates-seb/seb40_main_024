package com.codestates.server.member.controller;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.mapper.MemberMapper;
import com.codestates.server.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;
    private final HttpServletResponse response;

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post post) {
        Member member = memberService.createMember(mapper.PostDtoToMember(post));
        MemberDto.Response response = mapper.MemberToResponse(member);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PostMapping("/refresh")
    public ResponseEntity refreshToken(@RequestHeader String Refresh) {
        String accessToken = memberService.getAccessToken(Refresh);
        response.addHeader("Authorization", accessToken);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{memberId}")
    public ResponseEntity updateMember(@PathVariable("member-id") @Positive Long memberId, @Valid @RequestBody MemberDto.Patch patch) {
        patch.addMemberId(memberId);
        Member member = memberService.updateMember(mapper.PatchDtoToMember(patch));
        MemberDto.Response response = mapper.MemberToResponse(member);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive Long memberId) {
        Member verifyMember = memberService.findVerifyMember(memberId);
        MemberDto.Response response = mapper.MemberToResponse(verifyMember);
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
