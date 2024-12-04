import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { MobileApp, MobileAppBundle, MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { PlatformType } from '@shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class MobileAppService {
    private http;
    constructor(http: HttpClient);
    saveMobileApp(mobileApp: MobileApp, config?: RequestConfig): Observable<MobileApp>;
    getTenantMobileAppInfos(pageLink: PageLink, platformType?: PlatformType, config?: RequestConfig): Observable<PageData<MobileApp>>;
    getMobileAppInfoById(id: string, config?: RequestConfig): Observable<MobileApp>;
    deleteMobileApp(id: string, config?: RequestConfig): Observable<void>;
    saveMobileAppBundle(mobileAppBundle: MobileAppBundle, oauth2ClientIds?: Array<string>, config?: RequestConfig): Observable<MobileAppBundle>;
    updateOauth2Clients(id: string, oauth2ClientIds: Array<string>, config?: RequestConfig): Observable<Object>;
    getTenantMobileAppBundleInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<MobileAppBundleInfo>>;
    getMobileAppBundleInfoById(id: string, config?: RequestConfig): Observable<MobileAppBundleInfo>;
    deleteMobileAppBundle(id: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileAppService>;
}
