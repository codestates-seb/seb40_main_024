package com.codestates.server.member.mapper;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member MemberPostDtoToMember(MemberDto.Post post);
    Member memberPatchDtoToMember(MemberDto.Patch patch);
    MemberDto.Response memberToMemberResponseDto(Member member);
}
