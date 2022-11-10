package com.codestates.server.asset.entity;

import com.codestates.server.audit.Auditable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assetId;

    @Column(nullable = false)
    private String assetType; // type은 어떻게 지정해야 할 지? (주식, 현금, 예금 등 유동성자산 택 1 가능?)

    @Column(nullable = false) // null값 가능?
    private Long assetValue; // int인지 long인지?

    @Builder
    public Asset(String assetType, long assetValue) {
        this.assetType = assetType;
        this.assetValue = assetValue;
    }

//    @Column
//    @Enumerated(EnumType.ORDINAL)

}
