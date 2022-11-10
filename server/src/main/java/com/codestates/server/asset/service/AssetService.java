package com.codestates.server.asset.service;

import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.repository.AssetRepository;
import com.codestates.server.exception.ExceptionCode;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class AssetService {

    private final AssetRepository repository;

    public AssetService(AssetRepository repository) {
        this.repository = repository;
    }

    public Asset createAsset(Asset asset) {
        Asset createdAsset = asset;
        return createdAsset;
    }
    public Asset updateAsset(Asset asset) {
        Asset verifiedAsset = findVerifiedAsset(asset.getAssetId());

        verifiedAsset.setAssetValue(asset.getAssetValue());

        return repository.save(verifiedAsset);

//        Asset updateAsset = asset;
//        return updateAsset;
    }

    // 하나 찾기
    @Transactional(readOnly = true)
    public Asset findAsset(long assetId) {
        return findVerifiedAsset(assetId);
    }

    // 전체 찾기
    public List<Asset> findAssets() {
        return new ArrayList<>(repository.findAll());
    }

//    // 조건 찾기
//    public Asset findVerifiedAsset(long assetId) {
//        Optional<Asset> optionalAsset = assetRepository.findByAssetId(assetId);
//        Asset findAsset =
//            optionalAsset.orElseThrow(
//                () -> new AssetLogicException(ExceptionCode.ASSET_NOTFOUND)
//            );
//        return findAsset;
//    }

    public void deleteAsset(long assetId) {
        Asset findAsset = findVerifiedAsset(assetId);
        repository.delete(findAsset);

    }

    public Asset findVerifiedAsset(long assetId) {
//        Optional<Asset> optionalAsset = assetRepository.findByAssetId(assetId);
        return null;

    }


}
