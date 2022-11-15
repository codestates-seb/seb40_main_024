package com.codestates.server.asset.service;

import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.Asset.AssetStatus;
import com.codestates.server.asset.repository.AssetRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.ExceptionCode;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@Service
public class AssetService {

    private final AssetRepository repository;

    public AssetService(AssetRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Asset createAsset(Asset asset) {
        Asset createdAsset = asset;
        return createdAsset;
    }
    @Transactional
    public Asset updateAsset(Asset asset) {
        Asset verifiedAsset = findVerifiedAsset(asset.getAssetId());

        verifiedAsset.setAssetValue(asset.getAssetValue());

        return repository.save(verifiedAsset);

//        Asset updateAsset = asset;
//        return updateAsset;
    }

    // 하나 찾기
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

    @Transactional
    public void deleteAsset(long assetId) {
        Asset verifiedAsset = findVerifiedAsset(assetId);
        verifiedAsset.setAssetStatus(AssetStatus.ASSET_DELETED);
        repository.delete(verifiedAsset);

    }

    public Asset findVerifiedAsset(long assetId) {
        Optional<Asset> optionalAsset = repository.findById(assetId);
        return optionalAsset.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ASSET_NOT_FOUND));

    }


}
