package com.codestates.server.comment.mapper;

import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment commentPostToComment(CommentDto.Post requestBody);
    Comment commentPatchToComment(CommentDto.Patch requestBody);
    default CommentDto.Response commentToCommentResponseDto(Comment comment) {
        Member member = comment.getMember();

        return CommentDto.Response.builder()
                .commentId(comment.getCommentId())
                .body(comment.getBody())
                .createdAt(comment.getCreatedAt())
                .modifiedAt(comment.getModifiedAt())
                .memberPosted(memberToMemberResponseDto(member))
                .build();

        // WIP: add member info
    }
    MemberDto.Response memberToMemberResponseDto(Member member);
}
