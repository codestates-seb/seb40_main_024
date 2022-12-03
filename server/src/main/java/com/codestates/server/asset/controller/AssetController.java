package com.codestates.server.asset.controller;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.dto.AssetEditDto;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.AssetEditor;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import com.codestates.server.dto.MultiResponseDto;
import com.codestates.server.dto.PageInfo;
import com.codestates.server.dto.SingleResponseDto;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
@RequestMapping
@Validated
@Slf4j
public class AssetController {

    private final AssetService assetService;
    private final AssetMapper mapper;

    public AssetController(AssetService assetService, AssetMapper mapper) {
        this.assetService = assetService;
        this.mapper = mapper;
    }




    // 자산 전체 조회 + 개인


    @GetMapping("/asset") // 페이징 하는 것이 디폴트 -> 나중에 페이징
    public ResponseEntity getAssets(@AuthenticationPrincipal String email) {

        List<Asset> assets = assetService.findByMemberId(email);

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.assetsToAssetResponses(assets)),
            HttpStatus.OK);

    }





//         자산 한 개 조회

    @GetMapping("asset/{asset_id}")
    public ResponseEntity getAsset(@PathVariable("asset_id") @Positive long assetId) {

        Asset asset = assetService.findVerifiedAsset(assetId);
        Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);

    }
//    @GetMapping("asset/{asset_id}")
//    public ResponseEntity getAsset(@PathVariable("asset_id") @Positive long assetId,
//                                    @AuthenticationPrincipal String email) {
//        Asset asset = assetService.findByMemberId(email);
//        Response response = mapper.assetToAssetResponse(asset);
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK
//        );
//    }




    // 자산 등록
    @PostMapping("/asset")
    public ResponseEntity postAsset(@Valid @RequestBody AssetDto.Post requestBody,
                                    @AuthenticationPrincipal String email) {

        Asset asset = assetService.createAsset(requestBody, email);
        Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }





    // 자산 수정
    @PatchMapping("/asset/{asset_id}")
    public ResponseEntity patchAsset(@PathVariable("asset_id") @Positive long assetId,
                                    @Valid @RequestBody AssetDto.Patch requestBody,
                                    @AuthenticationPrincipal String email) {

        requestBody.setAssetId(assetId);
        Asset updatedAsset = assetService.updateAsset(mapper.assetPatchToAsset(requestBody), requestBody.getStrValue(), email);
        Response response = mapper.assetToAssetResponse(updatedAsset);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK
        );
    }

    // 자산 삭제
    @DeleteMapping("/asset/{asset_id}")
    public ResponseEntity<?> deleteAsset(@PathVariable("asset_id") @Positive long assetId,
                                        @AuthenticationPrincipal String email) {

        assetService.deleteAsset(assetId, email);
        return ResponseEntity.noContent().build();
    }




//
//
//
//    // 개인별 자산 전체 삭제
//    @DeleteMapping("/asset")
//    public ResponseEntity deleteAssets(@PathVariable("member_id") long memberId,
//                                        @AuthenticationPrincipal String email) {
//
////        assetService.deleteAssets(memberId, email);
//        assetService.deleteAssets(email);
//        return ResponseEntity.noContent().build();
//    }
//



//    // 수정 내역 저장
//    @PatchMapping("/asset")
//    public void edit(@PathVariable long memberId, @RequestBody @Valid AssetEditDto request) {
//        assetService.edit(memberId, request);
//    }


}
