package com.codestates.server.asset.service;

import com.codestates.server.asset.dto.AssetDto;
import com.codestates.server.asset.dto.AssetEditDto;
import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.entity.Asset.AssetStatus;
import com.codestates.server.asset.entity.AssetEditor;
import com.codestates.server.asset.mapper.AssetMapper;
import com.codestates.server.asset.repository.AssetRepository;
import com.codestates.server.exception.BusinessLogicException;
import com.codestates.server.exception.ExceptionCode;
import com.codestates.server.member.service.MemberService;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Transactional(readOnly = true)
@Service
public class AssetService {

    private final AssetRepository repository;
    private final MemberService memberService;
    private final AssetMapper mapper;

    public AssetService(AssetRepository repository, MemberService memberService, AssetMapper mapper) {
        this.repository = repository;
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @Transactional
    public Asset createAsset(Asset asset, long memberId) {
        asset.setMember(memberService.findVerifiedMember(memberId));// 포스트 하는 멤버 추가하는 로직 -> security 구현 되면 나중에
        return repository.save(asset);
    }
    @Transactional
    public Asset updateAsset(Asset asset, String strValue) { // asset은 Long타입. strValue는 String)
        Asset verifiedAsset = findVerifiedAsset(asset.getAssetId());

        Optional.ofNullable(asset.getAssetType())
            .ifPresent(assetType -> findVerifiedAsset(asset.getAssetId()).setAssetType(assetType));


        // string을 long으로 형변환
        long num = Long.parseLong(strValue.substring(1));
        long newValue = 0L;
        long oldValue = verifiedAsset.getAssetValue();

        if (strValue.charAt(0) == '-') {
            newValue = oldValue - num;
        }
        else if (strValue.charAt(0) == '+') {
            newValue = oldValue + num;
        }
        verifiedAsset.setAssetValue(newValue);  // 새로운 벨류로 업데이트
        return repository.save(verifiedAsset);

    }

    // 하나 찾기
    public AssetDto.Response findAsset(long assetId) {
        Asset verifiedAsset = findVerifiedAsset(assetId);
        return mapper.assetToAssetResponse(verifiedAsset);
    }


//    public Asset findAsset(long assetId) {
//        Asset findAsset = verifyExistsAsset(assetId);
//        assetRepository.save(findAsset);
//        return findAsset;


    // 전체 찾기
    public Page<Asset> findAssets(int page, int size) {
        return repository.findAll(PageRequest.of(page, size,
            Sort.by("assetId").ascending()));
//        return new ArrayList<>(repository.findAll());
    }

//    public Page<Asset> findByMemberId(int page, int size) {
//        Member verifiedMember = findVerifiedMember(findByMemberId());
//        verifiedMember.setMember
//        return repository.findVerifiedMember(PageRequest.of(page, size,
//            Sort.by("memberId").ascending()));
//    }



    @Transactional
    public void deleteAsset(long assetId) {
        Asset verifiedAsset = findVerifiedAsset(assetId);
        verifiedAsset.setAssetStatus(AssetStatus.ASSET_DELETED);
        repository.delete(verifiedAsset);

    }

    public void deleteAssets(long assetId) {
        Asset verifiedAsset = findVerifiedAsset(assetId);
        verifiedAsset.setAssetStatus(AssetStatus.ASSET_DELETED);
        repository.delete(verifiedAsset);
    }

    public List<Asset> findAllPatched() {
        return repository.findAllPatched();
    }


    // -> 람다식 삭제 및 바꾸기
    public Asset findVerifiedAsset(long assetId) {
        Optional<Asset> optionalAsset = repository.findById(assetId);
        return optionalAsset.orElseThrow(
            () -> new BusinessLogicException(ExceptionCode.ASSET_NOT_FOUND));

    }

    // 멤버 아이디로 찾기
//    public Asset findByMemberId(long memberId) {
//        Optional<>
//    }

//    public Asset findVerifiedAsset(long assetId) {
//        Optional<Asset> optionalAsset = repository.findById(assetId);
//        Asset findAsset =
//            optionalAsset.orElseThrow(
//                () -> new BusinessLogicException(ExceptionCode.ASSET_NOT_FOUND)
//            );
//        return findAsset;
//    }

    @Transactional
    public void edit(long assetId, @Valid AssetEditDto assetEdit) {

        Asset asset = repository.findByAssetId(assetId);


        AssetEditor.AssetEditorBuilder assetEditorBuilder = asset.toEditor();

        AssetEditor assetEditor = assetEditorBuilder.assetType(assetEdit.getAssetType())
            .strValue(assetEdit.getStrValue())
            .build();

        asset.edit(assetEditor);
    }


}
