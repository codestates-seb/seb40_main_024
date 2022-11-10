package com.codestates.server.asset.mapper;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Post;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;

import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AssetMapper {

    Asset assetPostDtoToAsset(AssetDto.Post requestBody);

    Asset assetPatchDtoToAsset(AssetDto.Patch requestBody);

    Response assetToAssetResponse(Asset response);

    List<Response> assetsToAssetResponses(List<Asset> responses);



//    Asset assetPostDtoToAsset(AssetDto.Post requestBody);
//
//    Asset PostToAsset(Post requestBody);
//
//    Asset assetPatchDtoToQuestion(AssetDto.Patch requestBody);
//
//    Response assetToAssetResponse(Asset response);
//
//    AssetDto.Response assetToAssetResponseDTo(Asset response);
//
//    List<Response> assetToAssetResponse(List<Asset> responses);





}
