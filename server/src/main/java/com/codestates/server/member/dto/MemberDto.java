package com.codestates.server.member.dto;

import com.codestates.server.member.entity.Member;
import com.codestates.server.member.status.MemberStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {

    @Getter
    public static class Post {
        @Email
        private String email;

        @NotBlank
        @Size(min = 2, max = 15)
        private String name;

        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "최소 8 자, 하나 이상의 문자와 하나의 숫자를 입력해주셔야 합니다.")
        private String password;
    }

    @Getter
    public static class Patch {

        private Long memberId;

        @Email
        private String email;

        @NotBlank
        @Size(min = 2, max = 15)
        private String name;

        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "최소 8 자, 하나 이상의 문자와 하나의 숫자를 입력해주셔야 합니다.")
        private String password;

        public void addMemberId(Long memberId) {
            this.memberId = memberId;
        }
    }
    @Getter
    @Setter
    public static class ResponseObject {
        private Long id;
        private String name;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private String email;
        private String name;
        private String password;
        private MemberStatus memberStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<String> roles;

        public Response(Member member) {
            this.id = member.getId();
            this.name = member.getName();
            this.email = member.getEmail();
            this.password = member.getPassword();
            this.memberStatus = member.getMemberStatus();
            this.createdAt = member.getCreatedAt();
            this.modifiedAt = member.getModifiedAt();
            this.roles = member.getRoles();
        }
    }
}
