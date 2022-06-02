import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { AccountTwoFaSettings, TwoFactorAuthAccountConfig, TwoFactorAuthProviderType, TwoFactorAuthSettings } from '@shared/models/two-factor-auth.models';
import * as i0 from "@angular/core";
export declare class TwoFactorAuthenticationService {
    private http;
    constructor(http: HttpClient);
    getTwoFaSettings(config?: RequestConfig): Observable<TwoFactorAuthSettings>;
    saveTwoFaSettings(settings: TwoFactorAuthSettings, config?: RequestConfig): Observable<TwoFactorAuthSettings>;
    getAvailableTwoFaProviders(config?: RequestConfig): Observable<Array<TwoFactorAuthProviderType>>;
    generateTwoFaAccountConfig(providerType: TwoFactorAuthProviderType, config?: RequestConfig): Observable<TwoFactorAuthAccountConfig>;
    getAccountTwoFaSettings(config?: RequestConfig): Observable<AccountTwoFaSettings>;
    updateTwoFaAccountConfig(providerType: TwoFactorAuthProviderType, useByDefault: boolean, config?: RequestConfig): Observable<AccountTwoFaSettings>;
    submitTwoFaAccountConfig(authConfig: TwoFactorAuthAccountConfig, config?: RequestConfig): Observable<any>;
    verifyAndSaveTwoFaAccountConfig(authConfig: TwoFactorAuthAccountConfig, verificationCode?: number, config?: RequestConfig): Observable<AccountTwoFaSettings>;
    deleteTwoFaAccountConfig(providerType: TwoFactorAuthProviderType, config?: RequestConfig): Observable<AccountTwoFaSettings>;
    requestTwoFaVerificationCodeSend(providerType: TwoFactorAuthProviderType, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoFactorAuthenticationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TwoFactorAuthenticationService>;
}
