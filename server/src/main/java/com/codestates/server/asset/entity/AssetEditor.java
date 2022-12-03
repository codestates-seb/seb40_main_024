package com.codestates.server.asset.entity;

import com.codestates.server.member.entity.Member;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;

@Getter
@Entity
public class AssetEditor {

    @Id
    @Column(name = "assetEditor_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;




    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY) // 단방향. 지연 로딩
    @JoinColumn(name = "asset_id") // @JoinColum(referencedColumnName = " ") 조인 대상의 테이블 필드 명 직접 지정
    private Asset asset;

//    public AssetEditor(String assetType, Member member, String strValue) {
//        this.assetType = assetType;
//        this.strValue = strValue;
//        this.member = member;
//    }


}
