package com.codestates.server.asset.controller;

import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.service.AssetService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
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

    // 자산 전체 조회
//    @GetMapping("/{memberId}")
//    public ResponseEntity getAssets(@Positive @RequestParam int page) {
//        Asset asset =;
//    }

    // 자산 일부 조회

    // 자산 등록
////    @PostMapping("/")
//    @PostMapping
//    public ResponseEntity postAsset(@Valid @RequestBody)


    // 자산 수정

    // 자산 삭제


}
