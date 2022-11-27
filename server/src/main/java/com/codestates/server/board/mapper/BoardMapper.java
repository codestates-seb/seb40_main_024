package com.codestates.server.board.mapper;

import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface BoardMapper {

    default Board boardPostToBoard(BoardDto.Post requestBody) {
        Board postBoard = new Board();

        // verify tag
        for (Board.BoardTag c : Board.BoardTag.values()) {
            if (c.getTag().equals(requestBody.getTag())){
                postBoard.setTag(c);
                break;
            }
        }
        if (postBoard.getTag() == null) throw new CustomException(ExceptionCode.TAG_NOT_FOUND);

        postBoard.setTitle(requestBody.getTitle());
        postBoard.setBody(requestBody.getBody());

        return postBoard;
    }

    default Board boardPatchToBoard(BoardDto.Patch requestBody) {
        Board patchBoard = new Board();

        // verify tag if not null
        String oldTag = requestBody.getTag();
        if (oldTag != null) {
            for (Board.BoardTag c : Board.BoardTag.values()) {
                if (c.getTag().equals(oldTag)){
                    patchBoard.setTag(c);
                    break;
                }
            }
            if (patchBoard.getTag() == null) throw new CustomException(ExceptionCode.TAG_NOT_FOUND);
        }
        patchBoard.setBoardId(requestBody.getBoardId());
        patchBoard.setTitle(requestBody.getTitle());
        patchBoard.setBody(requestBody.getBody());

        return patchBoard;
    }


    default BoardDto.Response boardToBoardResponseDto(Board board) {
        Member member = board.getMember();
        List<Comment> comments = board.getComments();

        List<CommentDto.Response> commentResponse = comments.stream()
                .map(c -> new CommentDto.Response(c.getCommentId(),
                        c.getBody(),
                        c.getCreatedAt(),
                        c.getModifiedAt(),
                        memberToMemberResponseObject(c.getMember())))
                .collect(Collectors.toList());

        return BoardDto.Response.builder()
                .boardId(board.getBoardId())
                .title(board.getTitle())
                .body(board.getBody())
                .like(board.getLike())
                .tag(board.getTag())
                .createdAt(board.getCreatedAt())
                .modifiedAt(board.getModifiedAt())
                .memberPosted(memberToMemberResponseObject(member))
                .commentsPosted(commentResponse)
                .build();
    }

    MemberDto.ResponseObject memberToMemberResponseObject(Member member);
}
