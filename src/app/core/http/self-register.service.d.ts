import { HttpClient } from '@angular/common/http';
import { SignUpSelfRegistrationParams, WebSelfRegistrationParams } from '@shared/models/self-register.models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export declare class SelfRegistrationService {
    private router;
    private http;
    signUpParams: SignUpSelfRegistrationParams;
    constructor(router: Router, http: HttpClient);
    getRegistrationLink(domainName: string): string;
    loadSelfRegistrationParams(): Observable<SignUpSelfRegistrationParams>;
    loadPrivacyPolicy(): Observable<string>;
    loadTermsOfUse(): Observable<string>;
    isAvailablePage(): Observable<any>;
    saveSelfRegistrationParams(selfRegistrationParams: WebSelfRegistrationParams, config?: RequestConfig): Observable<WebSelfRegistrationParams>;
    getSelfRegistrationParams(config?: RequestConfig): Observable<WebSelfRegistrationParams>;
    deleteSelfRegistrationParams(config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelfRegistrationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelfRegistrationService>;
}
