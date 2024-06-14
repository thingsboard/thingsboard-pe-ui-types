import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { MobileAppSettings } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export declare class MobileAppService {
    private http;
    constructor(http: HttpClient);
    getMobileAppSettings(config?: RequestConfig): Observable<MobileAppSettings>;
    getMergedMobileAppSettings(config?: RequestConfig): Observable<MobileAppSettings>;
    saveMobileAppSettings(mobileAppSettings: MobileAppSettings, config?: RequestConfig): Observable<MobileAppSettings>;
    getMobileAppDeepLink(config?: RequestConfig): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileAppService>;
}
