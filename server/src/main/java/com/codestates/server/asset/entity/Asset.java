package com.codestates.server.asset.entity;

import com.codestates.server.audit.Auditable;
import com.codestates.server.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
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
import javax.persistence.OneToMany;
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

    @Column(nullable = false)
    private String assetType; // (주식, 현금, 예금 등 유동성자산. 택 1 가능?)

    @Column
    private Long assetValue; // long은 null값 불가능


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


    @ManyToOne(fetch = FetchType.LAZY) // 단방향. 지연 로딩
    @JoinColumn(name = "member_id") // @JoinColum(referencedColumnName = " ") 조인 대상의 테이블 필드 명 직접 지정
    private Member member;
    public void setMember(Member member) {
        this.member = member;
    }

//    @OneToMany(mappedBy = 'assetEditors', cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<AssetEditor> assetEditors = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private AssetStatus assetStatus = AssetStatus.ASSET_POSTED;


    // AssetStatus 다시 확인해 볼 것!
    public enum AssetStatus {
        ASSET_DELETED( "삭제된 자산" ),
        ASSET_POSTED( "추가된 자산" ),
        ASSET_PATCHED("수정된 자산");


        @Getter
        private final String status;

        AssetStatus(String status) {

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

//    public AssetEditor.AssetEditorBuilder toEditor() {
//        return AssetEditor.builder()
//            .assetType(assetType)
//            .strValue(strValue);
//    }
//
//    public void edit(AssetEditor assetEditor) {
//        assetType = assetEditor.getAssetType();
//        strValue = assetEditor.getStrValue();
//    }





}




