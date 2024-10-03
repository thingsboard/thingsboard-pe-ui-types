import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { MobileApp, MobileAppInfo } from '@shared/models/oauth2.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class MobileAppService {
    private http;
    constructor(http: HttpClient);
    saveMobileApp(mobileApp: MobileApp, oauth2ClientIds: Array<string>, config?: RequestConfig): Observable<MobileApp>;
    updateOauth2Clients(id: string, oauth2ClientRegistrationIds: Array<string>, config?: RequestConfig): Observable<void>;
    getTenantMobileAppInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<MobileAppInfo>>;
    getMobileAppInfoById(id: string, config?: RequestConfig): Observable<MobileAppInfo>;
    deleteMobileApp(id: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileAppService>;
}
