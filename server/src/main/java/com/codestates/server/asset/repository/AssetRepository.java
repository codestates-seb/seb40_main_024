package com.codestates.server.asset.repository;

import com.codestates.server.asset.entity.Asset;
import com.codestates.server.member.entity.Member;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

    @Query(nativeQuery = true, value ="select * from Member where member_id = :assetId")
    List<Member> findAssets(long assetId);


}
