package com.codestates.server.auth.event;

import com.codestates.server.member.entity.Member;
import lombok.Getter;

@Getter
public class MemberRegistrationApplicationEvent {
    private final Member member;
    public MemberRegistrationApplicationEvent(Member member) {
        this.member = member;
    }
}
