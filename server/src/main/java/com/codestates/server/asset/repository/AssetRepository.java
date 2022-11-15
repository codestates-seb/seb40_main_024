package com.codestates.server.asset.repository;

import com.codestates.server.asset.entity.Asset;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {


}
