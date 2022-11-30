package com.codestates.server.asset.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.member.entity.Member;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Asset extends Auditable {

    @Id
    @Column(name = "asset_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assetId;

    @Column
    private String assetType; // (주식, 현금, 예금 등 유동성자산. 택 1 가능?)

    @Column(nullable = false)
    private long assetValue; // long은 null값 불가능


    public Asset(String assetType, Long assetValue) {
        this.assetType = assetType;
        this.assetValue = assetValue;
    }

//    public Asset(String assetType, Long assetValue, Member member, AssetTag tag) {
    public Asset(String assetType, Long assetValue, Member member) {
        this.assetType = assetType;
        this.assetValue = assetValue;
        this.member = member;
//        this.tag = tag;
    }

    @Column
    private String strValue; // string을 long으로 형변환



    @ManyToOne(fetch = FetchType.LAZY) // 단방향. 지연 로딩
    @JoinColumn(name = "member_id", referencedColumnName = "member_id") // @JoinColum(referencedColumnName = " ") 조인 대상의 테이블 필드 명 직접 지정
    private Member member;
    public void setMember(Member member) {
        this.member = member;
    }

//    @OneToMany(mappedBy = "asset", cascade = CascadeType.ALL)
//    private List<Asset> assets = new ArrayList<>();


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

    public AssetEditor.AssetEditorBuilder toEditor() {
        return AssetEditor.builder()
            .assetType(assetType)
            .strValue(strValue);
    }

    public void edit(AssetEditor assetEditor) {
        assetType = assetEditor.getAssetType();
        strValue = assetEditor.getStrValue();
    }
//
//    @Column(nullable = false)
//    @Enumerated(EnumType.STRING)
//    private AssetTag tag;
//
//    public enum AssetTag {
//        plus("+"),
//        minus("-");
//
//        @Getter
//        @JsonValue
//        private final String tag;
//
//        AssetTag(String tag) {
//            this.tag = tag;
//        }
//    }


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
