package com.codestates.server.member.mapper;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    default Member PostDtoToMember(MemberDto.Post post) {
        return Member.builder()
                .email(post.getEmail())
                .name(post.getName())
                .password(post.getPassword())
                .build();
    }
    default Member PatchDtoToMember(MemberDto.Patch patch) {
        return  Member.builder()
                    .id(patch.getMemberId())
                    .name(patch.getName())
                    .password(patch.getPassword())
                    .build();
    }
    default MemberDto.Response MemberToResponse(Member member) {
        return new MemberDto.Response(member);
    }
}
