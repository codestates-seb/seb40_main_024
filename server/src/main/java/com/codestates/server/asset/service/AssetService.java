package com.codestates.server.asset.service;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetEditDto;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.Asset.AssetStatus;
import com.codestates.server.asset.entity.AssetEditor;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.repository.AssetRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import com.codestates.server.member.service.MemberService;
import java.time.LocalDateTime;
import java.util.ArrayList;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@Service
@AllArgsConstructor
public class AssetService {

    private final AssetRepository repository;
    private final MemberService memberService;
    private final AssetMapper mapper;
    private final MemberRepository memberRepository;


    @Transactional
    public Asset createAsset(AssetDto.Post postAsset, String email) {

        if (email .equals("anonymousUser")) {
            throw new CustomException(ExceptionCode.ASSET_POSTER_NOT_FOUND);
        }


        Asset asset = mapper.assetPostToAsset(postAsset);

        Optional<Member> member = memberRepository.findByEmail(email);
        asset.setMember(member.orElseThrow(() -> new CustomException(ExceptionCode.MEMBER_NOT_FOUND)));

        return repository.save(asset);
    }


    @Transactional
    public Asset updateAsset(Asset asset, String strValue, String email) { // asset??? Long??????. strValue??? String)
        Asset verifiedAsset = verifyLoggedInMemberForAsset(asset.getAssetId(), email);

        // string??? long?????? ?????????
        long num = Long.parseLong(strValue.substring(1));
        long newValue = 0L;
        long oldValue = verifiedAsset.getAssetValue();

        if (strValue.charAt(0) == '-') {
            newValue = oldValue - num;
        }
        else if (strValue.charAt(0) == '+') {
            newValue = oldValue + num;
        }

        verifiedAsset.setAssetType(asset.getAssetType());
        verifiedAsset.setAssetValue(newValue);  // ????????? ????????? ????????????
        return repository.save(verifiedAsset);

    }

    public Asset verifyLoggedInMemberForAsset(long assetId, String email) {
        Asset verifiedAsset = findVerifiedAsset(assetId);
        if (email .equals( "anonymousUser")) {
            throw new CustomException(ExceptionCode.ASSET_POSTER_NOT_FOUND);
        } else if (!email .equals( verifiedAsset.getMember().getEmail())) {
            throw new CustomException(ExceptionCode.ASSET_POSTER_NOT_MATCHED);
        }
        return verifiedAsset;
    }

    // ?????? ??????
    public AssetDto.Response findAsset(long assetId) {

        Asset verifiedAsset = findVerifiedAsset(assetId);
        return mapper.assetToAssetResponse(verifiedAsset);

    }



    // ?????? ?????? -> ????????? ?????????????????? ?????????
    public List<Asset> findByMemberId(String email) {
        if (email .equals( "anonymousUser")) {
            throw new CustomException(ExceptionCode.ASSET_POSTER_NOT_FOUND);}
        Long memberId = memberService.findMemberId(email);
        List<Asset> assets = repository.findByMemberId(memberId);

        return assets;

    }


    @Transactional
    public void deleteAsset(long assetId, String email) {
        Asset verifiedAsset = verifyLoggedInMemberForAsset(assetId, email);
        verifiedAsset.setAssetStatus(AssetStatus.ASSET_DELETED);

        repository.delete(verifiedAsset);

    }


    public List<Asset> findAllPatched() {
        return repository.findAllPatched();
    }


    //
    public Asset findVerifiedAsset(long assetId) {
        Optional<Asset> optionalAsset = repository.findById(assetId);
        return optionalAsset.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.ASSET_NOT_FOUND));

    }




//    @Transactional
//    public void edit(long memberId, @Valid AssetEditDto assetEdit) {
//
//        // ?????? ????????? findByAssetId ????????? ?????? ??????..
//        List<Asset> assets = repository.findAllAssetList();  // findByMemberId -> ???????????? ??????
//
//
//
//        AssetEditor.AssetEditorBuilder assetEditorBuilder = assets.toEditor();
//
//        AssetEditor assetEditor = assetEditorBuilder.assetType(assetEdit.getAssetType())
//            .strValue(assetEdit.getStrValue())
//            .build();
//
//        assets.edit(assetEditor);
//    }


}
