package com.codestates.server.asset.mapper;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.entity.Asset;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T14:22:50+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
)
@Component
public class AssetMapperImpl implements AssetMapper {

    @Override
    public Asset assetPostDtoToAsset(AssetDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Asset.AssetBuilder asset = Asset.builder();

        asset.assetType( requestBody.getAssetType() );
        asset.assetValue( requestBody.getAssetValue() );

        return asset.build();
    }

    @Override
    public Asset assetPatchDtoToAsset(AssetDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Asset.AssetBuilder asset = Asset.builder();

        asset.assetType( requestBody.getAssetType() );
        asset.assetValue( requestBody.getAssetValue() );

        return asset.build();
    }

    @Override
    public AssetDto.Response assetToAssetResponse(Asset response) {
        if ( response == null ) {
            return null;
        }

        long assetId = 0L;
        String assetType = null;
        long assetValue = 0L;

        if ( response.getAssetId() != null ) {
            assetId = response.getAssetId();
        }
        assetType = response.getAssetType();
        assetValue = response.getAssetValue();

        AssetDto.Response response1 = new AssetDto.Response( assetId, assetType, assetValue );

        return response1;
    }

    @Override
    public List<AssetDto.Response> assetsToAssetResponses(List<Asset> responses) {
        if ( responses == null ) {
            return null;
        }

        List<AssetDto.Response> list = new ArrayList<AssetDto.Response>( responses.size() );
        for ( Asset asset : responses ) {
            list.add( assetToAssetResponse( asset ) );
        }

        return list;
    }
}
