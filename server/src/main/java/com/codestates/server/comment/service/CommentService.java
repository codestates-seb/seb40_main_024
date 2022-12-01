package com.codestates.server.comment.service;

import com.codestates.server.board.entity.Board;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.comment.dto.CommentDto;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.mapper.CommentMapper;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@AllArgsConstructor
public class CommentService {

    private final CommentRepository repository;
    private final CommentMapper mapper;
    private final BoardService boardService;
    private final MemberRepository memberRepository;

    public CommentDto.Response findOne(long id) {
        return mapper.commentToCommentResponseDto(findVerifiedComment(id));
    }

    public List<CommentDto.Response> findAll() {
        return mapper.commentsToCommentResponses(repository.findAll());
    }

    @Transactional
    public CommentDto.Response createOne(CommentDto.Post postComment, long boardId, String email) {

        // If member info is not provided
        if (email.isEmpty()) throw new CustomException(ExceptionCode.MEMBER_INFO_NOT_FOUND);

        Board board = boardService.findVerifiedBoard(boardId);
        Comment comment = mapper.commentPostToComment(postComment);
        comment.setBoard(board);
        board.getComments().add(comment); // board repo?

        Optional<Member> member = memberRepository.findByEmail(email);
        comment.setMember(member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND)));

        return mapper.commentToCommentResponseDto(repository.save(comment));
    }

    @Transactional
    public CommentDto.Response updateOne(CommentDto.Patch patchComment, long boardId) {
        Comment comment = mapper.commentPatchToComment(patchComment);

        Comment verifiedComment = findVerifiedComment(comment.getCommentId());
        verifyBoard(boardId, verifiedComment.getBoard());
        verifiedComment.setBody(comment.getBody());  // body

        // Modified time
        verifiedComment.setModifiedAt(LocalDateTime.now());
        return mapper.commentToCommentResponseDto(repository.save(verifiedComment));
    }

    @Transactional
    public void deleteOne(Long id, long boardId) {
        Comment verifiedComment = findVerifiedComment(id);
        verifyBoard(boardId, verifiedComment.getBoard());
        repository.delete(verifiedComment);
    }

    public Comment findVerifiedComment(long id) {
        Optional<Comment> optionalComment = repository.findById(id);
        return optionalComment.orElseThrow(() -> new CustomException(ExceptionCode.COMMENT_NOT_FOUND));
    }

    public void verifyBoard(long boardId, Board commentBoard) {
        if (! (boardId == commentBoard.getBoardId())) {
            throw new CustomException(ExceptionCode.BOARD_NOT_MATCHED_WITH_COMMENT);
        }
    }
}
