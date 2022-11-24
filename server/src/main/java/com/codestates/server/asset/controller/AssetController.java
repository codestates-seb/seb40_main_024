package com.codestates.server.asset.controller;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import com.codestates.server.member.service.MemberService;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
@Validated
@Slf4j
public class AssetController {

    private final AssetService assetService;
    private final AssetMapper mapper;
//    private final MemberService memberService;

    public AssetController(AssetService assetService, AssetMapper mapper) {
        this.assetService = assetService;
        this.mapper = mapper;
    }


    // 자산 전체 조회
    @GetMapping("/asset")
    public ResponseEntity getAssets() {

        List<Asset> assets = assetService.findAssets();

        List<Response> response = assets.stream()

            .map(m -> mapper.assetToAssetResponse(m))
            .collect(Collectors.toList());

        return new ResponseEntity<>(
            response, HttpStatus.OK
        );
    }




    //     자산 일부 조회
    @GetMapping("/asset/{assetId}")
    public ResponseEntity getAsset(@PathVariable("asset_id") @Positive long assetId) {
        Asset asset = assetService.findAsset(assetId);
        AssetDto.Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(
            response, HttpStatus.OK
//            response, HttpStatus.CREATED : post일 때
        );
    }

    // 자산 등록
    @PostMapping("/member/{member_id}/asset")
    public ResponseEntity postAsset(@Valid @RequestBody AssetDto.Post requestBody,
                                    @PathVariable("member_id") @Positive long memberId) {
        Asset asset = assetService.createAsset(mapper.assetPostDtoToAsset(requestBody), memberId);
//        asset.setAssetValue(100L);
        Response response = mapper.assetToAssetResponse(asset);
        log.info("response{}=",response);
        return new ResponseEntity<>(
            response, HttpStatus.CREATED);
    }

    //
    // 자산 수정
    @PatchMapping("/member/{member_id}/asset/{assetId}")
    public ResponseEntity patchAsset(@PathVariable("assetId") @Positive long assetId,
                                     @PathVariable("member_id") @Positive long memberId,
                                    @Valid @RequestBody AssetDto.Patch patch) {

        patch.setAssetId(assetId);

        Asset updatedAsset = assetService.updateAsset(mapper.assetPatchDtoToAsset(patch), patch.getStrValue());
        Response response = mapper.assetToAssetResponse(updatedAsset);

//        patch.setAssetId(assetId);
//        Asset asset = assetService.updateAsset(
//            mapper.assetPatchDtoToAsset(patch)
//        );
//        AssetDto.Response response = mapper.assetToAssetResponse(asset); // 변환
        return new ResponseEntity<>(
            response, HttpStatus.OK
        );
    }

    // 자산 삭제
    @DeleteMapping("member/{member_id}/asset/{assetId}")
    public ResponseEntity<?> deleteAsset(@PathVariable("asset_id") @Positive long assetId,
                                            @PathVariable("member_id") @Positive long memberId) {
        assetService.deleteAsset(assetId, memberId);
        return ResponseEntity.noContent().build();
    }


}
