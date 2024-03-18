import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { AssetProfile, AssetProfileInfo } from '@shared/models/asset.models';
import { EntityInfoData } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class AssetProfileService {
    private http;
    constructor(http: HttpClient);
    getAssetProfiles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<AssetProfile>>;
    getAssetProfile(assetProfileId: string, config?: RequestConfig): Observable<AssetProfile>;
    exportAssetProfile(assetProfileId: string, config?: RequestConfig): Observable<AssetProfile>;
    saveAssetProfile(assetProfile: AssetProfile, config?: RequestConfig): Observable<AssetProfile>;
    deleteAssetProfile(assetProfileId: string, config?: RequestConfig): Observable<Object>;
    setDefaultAssetProfile(assetProfileId: string, config?: RequestConfig): Observable<AssetProfile>;
    getDefaultAssetProfileInfo(config?: RequestConfig): Observable<AssetProfileInfo>;
    getAssetProfileInfo(assetProfileId: string, config?: RequestConfig): Observable<AssetProfileInfo>;
    getAssetProfileInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<AssetProfileInfo>>;
    getAssetProfilesByIds(assetProfileIds: Array<string>, config?: RequestConfig): Observable<Array<AssetProfileInfo>>;
    getAssetProfileNames(activeOnly?: boolean, config?: RequestConfig): Observable<Array<EntityInfoData>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AssetProfileService>;
}
