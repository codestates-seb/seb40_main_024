package com.codestates.server.asset.repository;

import com.codestates.server.asset.entity.Asset;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

//    @Query(nativeQuery = true, value = "select * from Asset where asset_status = 'ASSET_POSTED'")
//    List<Asset> findAll();

    @Query(nativeQuery = true, value = "select * from Asset where asset_status = 'ASSET_PATCHED'")
    List<Asset> findAllPatched();

    @Query(nativeQuery = true, value = "select * from Asset where asset_status = 'ASSET_POSTED' & 'ASSET_PATCHED'")
    List<Asset> findAllAssetList();


    @Query(nativeQuery = true, value = "select * from Asset where member_id = :id")
    List<Asset> findByMemberId(long id);

    @Query(nativeQuery = true, value = "select * from Asset where asset_id = '*'")  // 쿼리가 전체 에셋을 가져오고 있습니다..
    List<Asset> findByAssetId(long id);  // long id 인자 받아올 수 있도록 이 부분 수정 했습니다


}