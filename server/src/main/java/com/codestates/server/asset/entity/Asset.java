package com.codestates.server.asset.entity;

import com.codestates.server.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Asset {

    @Id
    @Column(name = "asset_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assetId;

    @Column
    private String assetType; // (주식, 현금, 예금 등 유동성자산. 택 1 가능?)

    @Column(nullable = false)
    private long assetValue; // long은 null값 불가능




//    @Builder
    public Asset(String assetType, Long assetValue) {
        this.assetType = assetType;
        this.assetValue = assetValue;
    }
    public Asset(String assetType, Long assetValue, Member member) {
        this.assetType = assetType;
        this.assetValue = assetValue;
        this.member = member;
    }


    @Column
    private String strValue; // string을 long으로 형변환



    @ManyToOne(fetch = FetchType.LAZY) // 단방향
    @JoinColumn(name = "member_id")
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


    public void addMember(Member member) { // 서로 참조가 필요한 상황
        if (this.member != null) { // 없으면 무한참조 일어남
            this.member.getAssets().remove(this);
        }
        this.member = member; // 직접 연관관계 매핑 (먼저 매핑된 상태에서)
        member.getAssets().add(this);
    }



}
//
//// 서브 클래스로 받아오는 게 맞을지?
//@Enumerated
//public static class Currency {
//    public Currency(Long won, Long dol, Long eu, Long jpy) {
//        this.won = won;
//        this.dol = dol;
//        this.eu = eu;
//        this.jpy = jpy;
//    }
//    private Long won;
//    private Long dol;
//    private Long eu;
//    private Long jpy;
//}
