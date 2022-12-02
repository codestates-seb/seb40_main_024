package com.codestates.server.asset.mapper;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Post;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.AssetEditor;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import java.util.List;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AssetMapper {

//    default Asset assetPostToAsset(Post requestBody) {
//        Asset postAsset = new Asset();
//
//        postAsset.setAssetType(requestBody.getAssetType());
//        postAsset.setAssetValue(requestBody.getAssetValue());
//
//        return postAsset;
//    }


//    default Asset assetPatchToAsset(AssetDto.Patch requestBody) {
//        Asset patchAsset = new Asset();
//        patchAsset.setAssetId(requestBody.getAssetId());
//        patchAsset.setAssetType(requestBody.getAssetType());
//        patchAsset.setStrValue(requestBody.getStrValue());
//        return patchAsset;
//    };

    Asset assetPostToAsset(AssetDto.Post requestBody);
    Asset assetPatchToAsset(AssetDto.Patch requestBody);


    default Response assetToAssetResponse(Asset asset) {
        Member member = asset.getMember();
//        List<AssetEditor> assetEditors = asset.getAssetList<>();
//        member = memberToMemberResponseObject(Member.getId());

        return Response.builder()
            .assetId(asset.getAssetId())
            .assetType(asset.getAssetType())
            .assetValue(asset.getAssetValue())
            .createdAt(asset.getCreatedAt())
            .modifiedAt(asset.getModifiedAt())
            .memberPosted(memberToMemberResponseObject(member))
            .build();

    }

    MemberDto.ResponseObject memberToMemberResponseObject(Member member);


    List<Response> assetsToAssetResponses(List<Asset> assets);

    List<AssetDto.Response> assetListToAssetDtoResponseList(List<Asset> assetList);





}
