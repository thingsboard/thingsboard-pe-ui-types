import { HttpClient } from '@angular/common/http';
import { SignupRequest, SignUpResult } from '@shared/models/signup.models';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { LoginResponse } from '@shared/models/login.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SignupService {
    private store;
    private http;
    constructor(store: Store<AppState>, http: HttpClient);
    signup(signupRequest: SignupRequest, config?: RequestConfig): Observable<SignUpResult>;
    acceptPrivacyPolicy(config?: RequestConfig): Observable<LoginResponse>;
    deleteTenantAccount(config?: RequestConfig): Observable<any>;
    isDisplayWelcome(): Observable<boolean>;
    setNotDisplayWelcome(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SignupService>;
}
