package com.codestates.server.board.entity;

import com.codestates.server.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
//@Table(name = "BOARD_TABLE")
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

//    @CreatedDate
//    @Column(nullable = false, updatable = false, name = "CREATED_AT")
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @LastModifiedDate
//    @Column(nullable = false, name = "LAST_MODIFIED_AT")
//    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column
    @Enumerated(EnumType.ORDINAL)
    private BoardStatus boardStatus = BoardStatus.BOARD_POSTED;

    // user & reply mapping WIP

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
