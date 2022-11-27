package com.codestates.server.asset.repository;

import com.codestates.server.asset.entity.Asset;
import com.codestates.server.member.entity.Member;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

    @Query(nativeQuery = true, value = "select * from Asset where asset_status = 'ASSET_POSTED'")
    List<Asset> findAll();

    @Query(nativeQuery = true, value = "select * from Asset where asset_status = 'ASSET_PATCHED'")
    List<Asset> findAllPatched();


    @Query(nativeQuery = true, value = "select * from Asset where Tag ='*'")
    Page<Asset> findAllTagPost(Pageable pageable);


}
