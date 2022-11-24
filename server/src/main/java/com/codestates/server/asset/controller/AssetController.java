package com.codestates.server.asset.controller;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/asset")
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
    @GetMapping
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
    @GetMapping("/{assetId}")
    public ResponseEntity getAsset(@PathVariable long assetId) {
        Asset asset = assetService.findVerifiedAsset(assetId);
        AssetDto.Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(
            response, HttpStatus.OK
//            response, HttpStatus.CREATED : post일 때
        );
    }

    // 자산 등록
    @PostMapping
    public ResponseEntity postAsset(@Valid @RequestBody AssetDto.Post requestBody) {
        Asset asset = assetService.createAsset(mapper.assetPostDtoToAsset(requestBody));
//        asset.setAssetValue(100L);
        AssetDto.Response response = mapper.assetToAssetResponse(asset);
        log.info("response{}=",response);
        return new ResponseEntity<>(
            response, HttpStatus.CREATED);
    }

    //
    // 자산 수정
    @PatchMapping("/{assetId}")
    public ResponseEntity patchAsset(@PathVariable("assetId") long assetId,
        @Valid @RequestBody AssetDto.Patch patch) {

        patch.setAssetId(assetId);

        Asset updatedAsset = assetService.updateAsset(mapper.assetPatchDtoToAsset(patch), patch.getStrValue());
        AssetDto.Response response = mapper.assetToAssetResponse(updatedAsset);

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
    @DeleteMapping("/{assetId}")
    public ResponseEntity<?> deleteAsset(@PathVariable long assetId) {
        assetService.deleteAsset(assetId);
        return ResponseEntity.noContent().build();
    }


}
