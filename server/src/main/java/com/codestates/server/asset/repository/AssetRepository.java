package com.codestates.server.asset.repository;

import com.codestates.server.asset.entity.Asset;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import java.util.List;


@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

//    Optional<Asset> findByAssetId(Long assetId);

//    @Query(nativeQuery = true, value = "select * from Asset a where a.asset_status>0")
//    List<Asset> findAll();

}
