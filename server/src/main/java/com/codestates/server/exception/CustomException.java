package com.codestates.server.exception;

import lombok.Getter;

public class CustomException extends RuntimeException {
    @Getter
    private final ExceptionCode exceptionCode;

    public CustomException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }

}
