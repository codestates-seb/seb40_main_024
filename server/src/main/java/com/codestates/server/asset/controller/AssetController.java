package com.codestates.server.asset.controller;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetDto.Response;
import com.codestates.server.asset.dto.AssetEditDto;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.AssetEditor;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import com.codestates.server.dto.MultiResponseDto;
import com.codestates.server.dto.SingleResponseDto;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
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


//    // 자산 전체 조회 스트림 쓰지 말고
//    @GetMapping("/asset")
//    public ResponseEntity getAssets() {
//
//        List<Asset> assets = assetService.findAssets();
//
//        List<Response> response = assets.stream()
//
//            .map(m -> mapper.assetToAssetResponse(m))
//            .collect(Collectors.toList());
//
//        return new ResponseEntity<>(
//            response, HttpStatus.OK
//        );
//    }

    // 자산 전체 조회


    @GetMapping("/asset") // 페이징 하는 것이 디폴트
    public ResponseEntity getAssets(@Positive @RequestParam(required = false, defaultValue = "1") int page,
                                    @Positive @RequestParam(required = false, defaultValue = "15") int size) {
        Page<Asset> pageAssets = assetService.findAssets(page - 1, size);
        List<Asset> assets = pageAssets.getContent();

        return new ResponseEntity<>(
            new MultiResponseDto<>(mapper.assetsToAssetResponses(assets), pageAssets),
            HttpStatus.OK);
//
//        List<Asset> assets = assetService.findAssets(page - 1, size);
//        List<Response> response = pageAssets.getContent();
//        return new ResponseEntity<>(
//            response, HttpStatus.OK
////            new MultiResponseDto<>(mapper.assetsToAssetResponses(assets), pageAssets), HttpStatus.OK
//        );
    }





    //     자산 한 개 조회

    @GetMapping("/member/{member_id}/asset/{asset_id}")
    public ResponseEntity getAsset(@PathVariable("member_id") @Positive long memberId, @PathVariable("asset_id") @Positive long assetId) {
        Asset asset = assetService.findVerifiedAsset(assetId);
        Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK
//            response, HttpStatus.CREATED : post일 때
        );
    }




    // 자산 등록
    @PostMapping("/member/{member_id}/asset")
    public ResponseEntity postAsset(@Valid @RequestBody AssetDto.Post requestBody,
        @PathVariable("member_id") @Positive long memberId) {
        Asset asset = assetService.createAsset(mapper.assetPostDtoToAsset(requestBody), memberId);
        Response response = mapper.assetToAssetResponse(asset);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }


    // 자산 수정
    @PatchMapping("/member/{member_id}/asset/{asset_id}")
    public ResponseEntity patchAsset(@PathVariable("asset_id") @Positive long assetId,
//                                     @PathVariable @Positive long memberId,
                                    @Valid @RequestBody AssetDto.Patch patch) {

        patch.setAssetId(assetId);
        Asset updatedAsset = assetService.updateAsset(mapper.assetPatchDtoToAsset(patch), patch.getStrValue());
        Response response = mapper.assetToAssetResponse(updatedAsset);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK
        );
    }

    // 자산 삭제
    @DeleteMapping("member/{member_id}/asset/{asset_id}")
    public ResponseEntity<?> deleteAsset(@PathVariable("member_id") long memberId,
        @PathVariable("asset_id") @Positive long assetId) {

        assetService.deleteAsset(assetId);
        return ResponseEntity.noContent().build();
    }

    // 개인별 자산 전체 삭제
    @DeleteMapping("member/{member_id}/asset")
    public ResponseEntity deleteAssets(@PathVariable("member_id") long memberId) {
        assetService.deleteAssets(memberId);
        return ResponseEntity.noContent().build();
    }

//
//    // 개인별 자산 조회-> Repository로?
//    @GetMapping("/member/{member_id}/asset")
//    public ResponseEntity getAsset(@PathVariable("member_id") long memberId) {
//        Asset asset = assetService.findVerifiedAsset(assetId);
//        AssetDto.Response response = mapper.assetToAssetResponse(asset);
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK
////            response, HttpStatus.CREATED : post일 때
//        );
//    }

    // 수정 내역 저장
    @PatchMapping("/member/{member_id}/asset")
    public void edit(@PathVariable long memberId, @RequestBody @Valid AssetEditDto request) {
        assetService.edit(memberId, request);
    }


}
