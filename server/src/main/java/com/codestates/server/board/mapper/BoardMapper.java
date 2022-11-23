package com.codestates.server.board.mapper;

import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {

    Board boardPatchToBoard(BoardDto.Patch requestBody);
    Board boardPostToBoard(BoardDto.Post requestBody);

    default BoardDto.Response boardToBoardResponseDto(Board board) {
        Member member = board.getMember();
        List<Comment> comments = board.getComments();

        List<CommentDto.Response> commentResponse = comments.stream()
                .map(c -> new CommentDto.Response(c.getCommentId(),
                        c.getBody(),
                        c.getCreatedAt(),
                        c.getModifiedAt()))
                .collect(Collectors.toList());

        return BoardDto.Response.builder()
                .boardId(board.getBoardId())
                .title(board.getTitle())
                .body(board.getBody())
                .like(board.getLike())
                .createdAt(board.getCreatedAt())
                .modifiedAt(board.getModifiedAt())
                .memberPosted(memberToMemberResponseDto(member))
                .commentsPosted(commentResponse)
                .build();

    }
    MemberDto.Response memberToMemberResponseDto(Member member);
}
