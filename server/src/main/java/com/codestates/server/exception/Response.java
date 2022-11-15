package com.codestates.server.exception;

import com.codestates.server.response.ErrorResponse;
import lombok.Getter;

import javax.validation.ConstraintViolation;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Set;

@Getter
public class Response {
    private int status;
    private String message;
    private List<Field> fieldError;
    private List<ErrorResponse.ConstraintViolationError> violationErrors;

    public Response(List<Field> fieldError, List<ErrorResponse.ConstraintViolationError> violationErrors) {
        this.fieldError = fieldError;
        this.violationErrors = violationErrors;
    }

    public Response(int status, String message) {
        this.status = status;
        this.message = message;
    }

    private static Response of(Set<ConstraintViolation<?>> violations) {
        return new Response(null, ConstraintViolation.);
    }
}
