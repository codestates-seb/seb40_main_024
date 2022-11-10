package com.codestates.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    INVALID_USER_STATUS(400, "Invalid user status"),

    ORDER_NOT_FOUND(404, "Order not found"),
    CANNOT_CHANGE_ORDER(403, "Order can not change"),

    NOT_IMPLEMENTATION(501, "Not Implementation"),

    // Board related
    BOARD_NOT_FOUND(404, "Board not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
