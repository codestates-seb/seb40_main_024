package com.codestates.server.asset.controller;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import com.codestates.server.dto.MultiResponseDto;
import com.codestates.server.dto.SingleResponseDto;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/asset")
@Validated
@Slf4j
public class AssetController {

    private final AssetService assetService;
    private final AssetMapper mapper;

    public AssetController(AssetService assetService, AssetMapper mapper) {
        this.assetService = assetService;
        this.mapper = mapper;
    }
}

    // 자산 전체 조회
//    @GetMapping("/{memberId}")
//    @GetMapping
//    public ResponseEntity getAssets() {
//        List<Asset> assets = assetService.findAssets();
//        return new ResponseEntity<>(
//            new MultiResponseDto<>(mapper.assetToAssetResponse(assets))
//        );
////        assets.stream()
//
////            .map(m -> mapper.assetToAssetResponse(m))
////            .orElse
////        Asset asset =assetService.findAsset(assetId);
////        AssetDto.Response response = mapper.assetToAssetResponse(asset);
////        return new ResponseEntity<>(
////            new MultiResponseDto<>(mapper.assetsToAssetResponses(assets))
////        );
//    }

    // 자산 일부 조회
//    @GetMapping("/{memberId}")
//    public EntityModel<Response> getAsset(@PathVariable long id) {
//        Asset asset = assetService.findAsset(id);
//        AssetDto.Response response = mapper.assetToAssetResponse(asset);
//        return new ResponseEntity<>(
//            new SingleResponseDto<>(mapper.assetToAssetResponse(asset))
//        );
////    }
//
//    // 자산 등록
//    @PostMapping("/{assetId}/asset")
//    public ResponseEntity<?> postAsset(@Valid @RequestBody AssetDto.Post requestBody) {
//        Asset asset = assetService.createAsset(mapper.assetPostDtoToAsset(requestBody));
////        return (ResponseEntity<?>) ResponseEntity.created();
//        return null;
//    }
//
//
//    // 자산 수정
//    @PatchMapping
//    public ResponseEntity patchAsset(@PathVariable("assetId") @Positive Long assetId,
//        @Valid @RequestBody AssetDto.Patch requestBody) {
//        requestBody.setAssetId(assetId);
//        Asset asset = assetService.updateAsset(
//            mapper.assetPatchDtoToAsset(requestBody)
//        );
//        return new ResponseEntity<?>(
//            new MultiResponseDto<>(mapper.assetToAssetResponse(asset))
//        );
//    }
//
//    // 자산 삭제
//    @DeleteMapping("/{assetId}")
//    public ResponseEntity<?> deleteAsset(@PathVariable long assetId) {
//        assetService.deleteAsset(assetId);
//        return ResponseEntity.noContent().build();
//    }
//
//
//}
