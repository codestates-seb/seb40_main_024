package com.codestates.server.comment.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.board.entity.Board;
import com.codestates.server.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    private String body;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    public Comment(String body, Board board) {
        this.body = body;
        this.board = board;
    }

    public Comment(String body, Member member, Board board) {
        this.body = body;
        this.member = member;
        this.board = board;
    }
}
