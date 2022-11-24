package com.codestates.server.asset.mapper;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Post;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;

import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AssetMapper {

    Asset assetPostDtoToAsset(Post requestBody);

    Asset assetPatchDtoToAsset(AssetDto.Patch requestBody);

    Response assetToAssetResponse(Asset response);

    default AssetDto.Response assetToAssetResponseDto(Asset asset) {
        Member member = asset.getMember();

        return AssetDto.Response.builder()
            .assetId(asset.getAssetId())
            .assetType(asset.getAssetType())
            .memberPosted(memberToMemberResponseObject(member))
            .build();

    }

//    List<Response> assetsToAssetResponses(List<Asset> responses);

    MemberDto.ResponseObject memberToMemberResponseObject(Member member);




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
