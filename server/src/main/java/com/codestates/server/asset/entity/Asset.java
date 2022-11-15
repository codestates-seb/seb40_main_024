package com.codestates.server.asset.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.member.entity.Member;
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
//@Setter
@Entity
public class Asset {

    @Id
    @Column(name = "asset_Id")
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

    @ManyToOne // 단방향
    @JoinColumn(name = "MEMBER_ID")
    private Member member;



//    @Column
//    @Enumerated(EnumType.ORDINAL)

    @Enumerated(EnumType.STRING)
    private AssetStatus assetStatus = AssetStatus.ASSET_POSTED;


    // AssetStatus 다시 확인해 볼 것!
    public enum AssetStatus {
        ASSET_DELETED(0, "삭제된 자산"),
        ASSET_POSTED(1, "자산 추가");

        @Getter
        private final int statusCode;

        @Getter
        private final String status;

        AssetStatus(int statusCode, String status) {
            this.statusCode = statusCode;
            this.status = status;
        }
    }

}
