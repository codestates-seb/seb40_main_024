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
    BOARD_DELETED(405, "삭제된 게시물 입니다."),
    BOARD_NOT_MATCHED_WITH_COMMENT(404, "해당 게시글에서 해당 코멘트를 찾을 수 없습니다. ID를 확인해 주세요."),
    TAG_NOT_FOUND(400, "존재하지 않는 태그입니다. '일반', '자산' 중 선택하세요."),

    // 댓글
    COMMENT_NOT_FOUND(404, "존재하지 않는 댓글입니다."),

    // 자산
    ASSET_NOT_FOUND(404, "존재하지 않는 자산입니다."),

    // 목표 자산
    GOAL_NOT_FOUND(404, "존재하지 않는 목표 자산입니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
