package com.codestates.server.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {

    //유저
    DUPLICATE_MEMBER(409, "해당 아이디는 이미 존재합니다."),
    MEMBER_NOT_FOUND(404, "존재하지 않는 멤버 입니다."),
    DUPLICATE_RESOURCE(409, "데이터가 이미 존재합니다"),
    USER_EXISTS(409, "User exists"),

    //토큰
    INVALID_REFRESH_TOKEN(400, "리프레시 토큰이 유효하지 않습니다"),
    MISSING_HEADER_ACCESS_TOKEN(404,"헤더에 엑세스 토큰을 넣어주세요"),
    MISMATCH_ACCESS_TOKEN(400, "엑세스 토큰의 유저 정보가 일치하지 않습니다"),
    INVALID_AUTH_TOKEN(401, "권한 정보가 없는 토큰입니다"),
    REFRESH_TOKEN_NOT_FOUND(404, "로그아웃 된 사용자입니다"),

    //시큐리티
    USER_NOT_FOUNT(404, "로그인 시도중 -> 해당 유저가 존재하지 않습니다."),

    // 게시글
    BOARD_NOT_FOUND(404, "존재하지 않는 게시글입니다."),
    BOARD_DELETED(405, "삭제된 게시글 입니다."),
    BOARD_NOT_MATCHED_WITH_COMMENT(404, "게시글에서 해당 코멘트를 찾을 수 없습니다."),
    BOARD_CATEGORY_NOT_FOUND(400, "존재하지 않는 카테고리입니다. '일반', '자산' 중 선택하세요."),
    BOARD_URL_NOT_FOUND(400, "'like', 'dislike' 중 선택하세요."),
    BOARD_POSTER_NOT_FOUND(400, "게시글 작성을 위해 로그인하세요."),
    BOARD_POSTER_NOT_MATCHED(400, "게시글 작성자로 로그인하세요."),
    BOARD_LIKE_NOT_PERMITTED(400, "게시글 '좋아요'를 위해 로그인하세요."),
    BOARD_ALREADY_LIKED(400, "이미 '좋아요'한 게시글입니다."),

    // 댓글
    COMMENT_NOT_FOUND(404, "존재하지 않는 댓글입니다."),
    COMMENT_POSTER_NOT_FOUND(400, "댓글 작성을 위해 로그인하세요."),
    COMMENT_POSTER_NOT_MATCHED(400, "댓글 작성자로 로그인하세요."),

    // 자산
    ASSET_NOT_FOUND(404, "존재하지 않는 자산입니다."),
    ASSET_DELETED(405, "삭제된 자산입니다."),
    ASSET_POSTER_NOT_FOUND(400, "자산 작성을 위해 로그인하세요."),
    ASSET_POSTER_NOT_MATCHED(400, "자산 작성자로 로그인하세요."),

    // 목표 자산
    GOAL_NOT_FOUND(404, "존재하지 않는 목표 자산입니다."),
    GOAL_URL_NOT_FOUND(400, "PathVariable 은 complete 혹은 incomplete 입니다."),
    GOAL_POSTER_NOT_FOUND(400, "목표자산 접근을 위해 로그인하세요."),
    GOAL_POSTER_NOT_MATCHED(400, "목표자산 작성자로 로그인하세요.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
