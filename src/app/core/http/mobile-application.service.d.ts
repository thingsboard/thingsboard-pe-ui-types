import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { QrCodeSettings } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export declare class MobileApplicationService {
    private http;
    constructor(http: HttpClient);
    getMobileAppSettings(config?: RequestConfig): Observable<QrCodeSettings>;
    getMergedMobileAppSettings(config?: RequestConfig): Observable<QrCodeSettings>;
    saveMobileAppSettings(mobileAppSettings: QrCodeSettings, config?: RequestConfig): Observable<QrCodeSettings>;
    getMobileAppDeepLink(config?: RequestConfig): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileApplicationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileApplicationService>;
}
