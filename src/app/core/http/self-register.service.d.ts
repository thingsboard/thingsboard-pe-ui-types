import { HttpClient } from '@angular/common/http';
import { SelfRegistrationParams, SignUpSelfRegistrationParams } from '@shared/models/self-register.models';
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
    saveSelfRegistrationParams(selfRegistrationParams: SelfRegistrationParams, config?: RequestConfig): Observable<SelfRegistrationParams>;
    getSelfRegistrationParams(config?: RequestConfig): Observable<SelfRegistrationParams>;
    deleteSelfRegistrationParams(domainName: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelfRegistrationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelfRegistrationService>;
}
