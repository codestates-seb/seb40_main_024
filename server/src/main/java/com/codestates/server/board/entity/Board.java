package com.codestates.server.board.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Board extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    @Column(name = "likes")
    private int like = 0;

    @Column
    @Enumerated(EnumType.ORDINAL)  // STRING?
    private BoardStatus boardStatus = BoardStatus.BOARD_POSTED;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    public Board(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public enum BoardStatus {

        BOARD_DELETED(0, "삭제된 게시글"),

        BOARD_POSTED(1, "일반 게시글");

        @Getter
        private final int statusCode;

        @Getter
        private final String status;

        BoardStatus(int statusCode, String status) {
            this.statusCode = statusCode;
            this.status = status;
        }
    }
}
