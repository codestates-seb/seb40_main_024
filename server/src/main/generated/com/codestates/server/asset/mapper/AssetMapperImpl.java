package com.codestates.server.asset.mapper;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.entity.Asset;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-15T17:09:45+0900",
    comments = "version: 1.5.2.Final, compiler: Eclipse JDT (Batch) , environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AssetMapperImpl implements AssetMapper {

    @Override
    public Asset assetPostDtoToAsset(AssetDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        String assetType = null;
        long assetValue = 0L;

        Asset asset = new Asset( assetType, assetValue );

        return asset;
    }

    @Override
    public Asset assetPatchDtoToAsset(AssetDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        String assetType = null;
        long assetValue = 0L;

        Asset asset = new Asset( assetType, assetValue );

        return asset;
    }

    @Override
    public AssetDto.Response assetToAssetResponse(Asset response) {
        if ( response == null ) {
            return null;
        }

        AssetDto.Response response1 = new AssetDto.Response();

        return response1;
    }
}
