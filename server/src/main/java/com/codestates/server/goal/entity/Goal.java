package com.codestates.server.goal.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Goal extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goalId;

    private String goalName;

    private long goalPrice;

    // 먼슬리 가정
    private int targetLength;

    private long calculatedPrice;

    // 성취도
    private int completed = 0;

    // 멤버 쪽 OneToMany 업데이트 확인 후 테스트 필요
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    public Goal(String goalName, long goalPrice, int targetLength, Member member) {
        this.goalName = goalName;
        this.goalPrice = goalPrice;
        this.member = member;
        this.targetLength = targetLength;
        // 옵션 1 -> 목표 월 저축액 산출
        this.calculatedPrice = (int) Math.ceil((double) goalPrice / targetLength);
    }
}
