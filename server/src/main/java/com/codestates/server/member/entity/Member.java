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

    private String name;

    private String password;

    @ElementCollection(fetch = FetchType.LAZY)
    public List<String> roles = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private MemberStatus memberStatus = MemberStatus.ACTIVE;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Board> boards = new ArrayList<>();
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answers = new ArrayList<>();
// ---------------------  민주님 위에 두 리스트 참조하세요. --------------------------------------------
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Asset> assets = new ArrayList<>();

    @Builder
    public Member(Long id , String email, String name, String password, MemberStatus memberStatus) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.memberStatus = memberStatus;
    }


    //이름 변경 메서드
    public void updateName(String name) {
        this.name = name;
    }
    //비밀번호 변경 메서드
    public void updatePassword(String password) {
        this.password = password;
    }

    //유저 권한 뭐로 할지 고민..
    public void changeRoles(List<String> roles) {
        this.roles = roles;
    }

    public void deleteMember(MemberStatus memberStatus) {
        this.memberStatus = memberStatus;
    }
}
