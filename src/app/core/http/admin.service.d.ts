import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminSettings, AutoCommitSettings, FeaturesInfo, JwtSettings, LicenseUsageInfo, MailConfigTemplate, MailServerSettings, RepositorySettings, RepositorySettingsInfo, SecuritySettings, TestSmsRequest, UpdateMessage } from '@shared/models/settings.models';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import { LoginResponse } from '@shared/models/login.models';
import { SubscriptionInfo } from '@shared/models/subscription.models';
import * as i0 from "@angular/core";
export declare class AdminService {
    private http;
    private entitiesVersionControlService;
    constructor(http: HttpClient, entitiesVersionControlService: EntitiesVersionControlService);
    getAdminSettings<T>(key: string, systemByDefault?: boolean, config?: RequestConfig): Observable<AdminSettings<T>>;
    saveAdminSettings<T>(adminSettings: AdminSettings<T>, config?: RequestConfig): Observable<AdminSettings<T>>;
    sendTestMail(adminSettings: AdminSettings<MailServerSettings>, config?: RequestConfig): Observable<void>;
    sendTestSms(testSmsRequest: TestSmsRequest, config?: RequestConfig): Observable<void>;
    getSecuritySettings(config?: RequestConfig): Observable<SecuritySettings>;
    saveSecuritySettings(securitySettings: SecuritySettings, config?: RequestConfig): Observable<SecuritySettings>;
    getJwtSettings(config?: RequestConfig): Observable<JwtSettings>;
    saveJwtSettings(jwtSettings: JwtSettings, config?: RequestConfig): Observable<LoginResponse>;
    getRepositorySettings(config?: RequestConfig): Observable<RepositorySettings>;
    saveRepositorySettings(repositorySettings: RepositorySettings, config?: RequestConfig): Observable<RepositorySettings>;
    deleteRepositorySettings(config?: RequestConfig): Observable<Object>;
    checkRepositoryAccess(repositorySettings: RepositorySettings, config?: RequestConfig): Observable<void>;
    getRepositorySettingsInfo(config?: RequestConfig): Observable<RepositorySettingsInfo>;
    getAutoCommitSettings(config?: RequestConfig): Observable<AutoCommitSettings>;
    autoCommitSettingsExists(config?: RequestConfig): Observable<boolean>;
    saveAutoCommitSettings(autoCommitSettings: AutoCommitSettings, config?: RequestConfig): Observable<AutoCommitSettings>;
    deleteAutoCommitSettings(config?: RequestConfig): Observable<Object>;
    checkUpdates(config?: RequestConfig): Observable<UpdateMessage>;
    getFeaturesInfo(config?: RequestConfig): Observable<FeaturesInfo>;
    getLicenseUsageInfo(config?: RequestConfig): Observable<LicenseUsageInfo>;
    getSubscriptionInfo(config?: RequestConfig): Observable<SubscriptionInfo>;
    /**
     * Coalesces concurrent callers onto a single in-flight request. Two overlapping refreshes (router
     * resolver + a manual "refresh" click ~60 ms apart is enough) would race the license client's monotonic
     * request-sequence number and one of them would come back 403 "License required: the instance is not
     * activated" over a licence that is fine, locking the management plane on the backend. Sharing the same
     * observable and clearing the reference on completion keeps subsequent callers free to trigger a fresh
     * refresh.
     */
    refreshLicense(config?: RequestConfig): Observable<SubscriptionInfo>;
    private refreshLicenseInFlight$;
    getLoginProcessingUrl(config?: RequestConfig): Observable<string>;
    generateAccessToken(config?: RequestConfig): Observable<string>;
    getMailConfigTemplate(config?: RequestConfig): Observable<Array<MailConfigTemplate>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminService>;
}
