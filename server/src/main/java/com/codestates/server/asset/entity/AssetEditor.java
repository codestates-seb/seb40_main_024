package com.codestates.server.asset.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
public class AssetEditor {

    private final String assetType;
    private final String strValue;

    @Builder
    public AssetEditor(String assetType, String strValue) {
        this.assetType = assetType;
        this.strValue = strValue;
    }

}
