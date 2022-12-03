package com.codestates.server.board.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonValue;
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

    @Column(nullable = false)
    private int view = 0;

    @Column(name = "likes")
    private int like = 0;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private BoardCategory category;

    @Column
    @Enumerated(EnumType.STRING)
    private BoardStatus boardStatus = BoardStatus.BOARD_POSTED;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BoardLikedBy> likedBy = new ArrayList<>();

    public Board(String title, String body, BoardCategory category, Member member) {
        this.title = title;
        this.body = body;
        this.category = category;
        this.member = member;
    }

    public enum BoardStatus {

        BOARD_DELETED("삭제된 게시글"),
        BOARD_POSTED("일반 게시글");

        @Getter
        private final String status;

        BoardStatus(String status) {
            this.status = status;
        }
    }

    public enum BoardCategory {

        POST("일반"),
        ASSET("자산");

        @Getter
        @JsonValue
        private final String category;

        BoardCategory(String category) {
            this.category = category;
        }
    }
}
