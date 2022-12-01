package com.codestates.server.member.entity;


import com.codestates.server.asset.entity.Asset;
import com.codestates.server.audit.Auditable;
import com.codestates.server.board.entity.Board;
import com.codestates.server.member.status.MemberStatus;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class Member extends Auditable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;
    @Column(nullable = false, unique = true, updatable = false)
    private String email;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, length = 100)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    public List<String> roles = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private MemberStatus memberStatus = MemberStatus.ACTIVE;

    @OneToMany(mappedBy = "member", orphanRemoval = true)
    private final List<Board> boards = new ArrayList<>();
// ---------------------  민주님 위에 두 리스트 참조하세요. --------------------------------------------
    @OneToMany(mappedBy = "member", orphanRemoval = true)
    private final List<Asset> assets = new ArrayList<>();

    //게시글 작성에 필요한 생성자
    public Member (String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    @Builder
    public Member(Long id , String email, String name, String password, List<String> roles) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.roles = roles;
    }


    //이름 변경 메서드
    public void updateName(String name) {
        this.name = name;
    }
    //비밀번호 변경 메서드
    public void updatePassword(String password) {
        this.password = password;
    }


    public void changeRoles(List<String> roles) {
        this.roles = roles;
    }

    public void deleteMember(MemberStatus memberStatus) {
        this.memberStatus = MemberStatus.SLEEP;
    }


}
