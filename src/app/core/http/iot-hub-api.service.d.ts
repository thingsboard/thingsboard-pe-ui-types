import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { MpItemVersionQuery, MpItemVersionView } from '@shared/models/iot-hub/iot-hub-version.models';
import { CreatorView } from '@shared/models/iot-hub/iot-hub-creator.models';
import { IotHubInstalledItem, InstallItemVersionResult, InstallPlan, InstallPlanResult, UpdateItemVersionResult, ItemPublishedVersionInfo } from '@shared/models/iot-hub/iot-hub-installed-item.models';
import { ItemType, ItemTypeFilterInfo, WidgetCategory } from '@shared/models/iot-hub/iot-hub-item.models';
import { AppState } from '@core/core.state';
import { DeviceConnectivitySettings } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare function tbVersionToInt(version: string): number;
export declare function tbVersionIntToString(version: number): string;
export declare function iotHubResourceUrl(baseUrl: string, path: string): string;
export interface IotHubRequestConfig {
    ignoreLoading?: boolean;
    ignoreErrors?: boolean;
}
export declare class IotHubApiService {
    private http;
    private store;
    constructor(http: HttpClient, store: Store<AppState>);
    get baseUrl(): string;
    resolveResourceUrl(path: string): string;
    getPublishedVersions(query: MpItemVersionQuery, config?: IotHubRequestConfig): Observable<PageData<MpItemVersionView>>;
    getFilterInfo(itemType: ItemType, config?: IotHubRequestConfig): Observable<ItemTypeFilterInfo>;
    getWidgetCategories(textSearch?: string, scadaFirst?: boolean, config?: IotHubRequestConfig): Observable<WidgetCategory[]>;
    getVersionInfo(versionId: string, config?: IotHubRequestConfig): Observable<MpItemVersionView>;
    getPublishedVersion(itemId: string, config?: IotHubRequestConfig): Observable<MpItemVersionView>;
    /**
     * Resolves the listing item-version that matches the caller's edition
     * and platform version.
     *
     * Backend: GET /api/listings/public/by-slug/{slug}/item-version
     *
     * On success → 200 with `MpItemVersionView`.
     * On miss   → 404 with a `ListingItemVersionNotFound` body shape
     *             (`noMatchingVersions`, `peRequired`, or
     *             `minTbVersionRequired`). Callers should inspect
     *             `HttpErrorResponse.error` to differentiate.
     */
    getListingItemVersion(slug: string, config?: IotHubRequestConfig): Observable<MpItemVersionView>;
    getVersionReadme(versionId: string, config?: IotHubRequestConfig): Observable<string>;
    getVersionFileData(versionId: string, config?: IotHubRequestConfig): Observable<Blob>;
    getConnectivitySettings(config?: IotHubRequestConfig): Observable<DeviceConnectivitySettings>;
    registerDeviceInstall(versionId: string, descriptor: {
        type?: string;
        createdEntityIds: {
            entityType: string;
            id: string;
        }[];
        dashboardId?: {
            entityType: string;
            id: string;
        };
        selectedInstallMethod?: string;
        installState?: Record<string, any>;
    }, config?: IotHubRequestConfig): Observable<InstallItemVersionResult>;
    installItemVersion(versionId: string, config?: IotHubRequestConfig, data?: any): Observable<InstallItemVersionResult>;
    resolveInstallPlan(versionId: string, config?: IotHubRequestConfig): Observable<InstallPlan>;
    installPlan(plan: InstallPlan, data?: any, config?: IotHubRequestConfig): Observable<InstallPlanResult>;
    updateItemVersion(installedItemId: string, versionId: string, config?: IotHubRequestConfig, force?: boolean): Observable<UpdateItemVersionResult>;
    getInstalledItemIds(config?: IotHubRequestConfig): Observable<string[]>;
    getInstalledItemCounts(itemType: string, config?: IotHubRequestConfig): Observable<Record<string, number>>;
    getInstalledItems(pageLink: PageLink, itemTypes?: string | string[], itemId?: string, config?: IotHubRequestConfig): Observable<PageData<IotHubInstalledItem>>;
    getInstalledItemsCount(itemType?: string, config?: IotHubRequestConfig): Observable<number>;
    deleteInstalledItem(installedItemId: string, config?: IotHubRequestConfig): Observable<void>;
    getItemsPublishedVersions(itemIds: string[], config?: IotHubRequestConfig): Observable<ItemPublishedVersionInfo[]>;
    getCreatorProfile(creatorId: string, config?: IotHubRequestConfig): Observable<CreatorView>;
    private buildParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<IotHubApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IotHubApiService>;
}
