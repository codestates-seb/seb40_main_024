package com.codestates.server.member.entity;


import com.codestates.server.audit.Auditable;
import com.codestates.server.member.status.MemberStatus;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Member extends Auditable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String email;

    private String username;

    private String password;

    //활동 상태??? enum으로 처리할지 말지 상의
    private boolean active;

    @Enumerated(EnumType.STRING)
    private MemberStatus memberStatus = MemberStatus.R0LE_NORMAL;

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Board> boards = new ArrayList<>();
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Answer> answers = new ArrayList<>();
// ---------------------  민주님 위에 두 리스트 참조하세요. --------------------------------------------
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Asset> assets = new ArrayList<>();

    @Builder
    public Member(String email, String username, String password, MemberStatus memberStatus) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.memberStatus = memberStatus;
    }


    //이름 변경 메서드
    public Member(String username) {
        this.username = username;
    }
    //비밀번호 변경 메서드
    public String getPassword() {
        return password;
    }
}
