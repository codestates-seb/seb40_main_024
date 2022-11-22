package com.codestates.server.member.mapper;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    // Request Mapper
    Member memberPostToMember(MemberDto.Post post);
    Member memberPatchToMember(MemberDto.Patch memberDto);

    // Response Mapper
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponses(List<Member> members);
}
