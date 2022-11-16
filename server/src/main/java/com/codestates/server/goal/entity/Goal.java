package com.codestates.server.goal.entity;

import com.codestates.server.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

    public Goal(Long goalId, String goalName, long goalPrice, int targetLength) {
        this.goalId = goalId;
        this.goalName = goalName;
        this.goalPrice = goalPrice;
        this.targetLength = targetLength;
        // 옵션 1 -> 목표 월 저축액 산출
        this.calculatedPrice = goalPrice / targetLength;

        // necessary?
        this.completed = 0;
    }
}
