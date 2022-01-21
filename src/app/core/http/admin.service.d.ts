import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminSettings, MailServerSettings, SecuritySettings, TestSmsRequest, UpdateMessage } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class AdminService {
    private http;
    constructor(http: HttpClient);
    getAdminSettings<T>(key: string, systemByDefault?: boolean, config?: RequestConfig): Observable<AdminSettings<T>>;
    saveAdminSettings<T>(adminSettings: AdminSettings<T>, config?: RequestConfig): Observable<AdminSettings<T>>;
    sendTestMail(adminSettings: AdminSettings<MailServerSettings>, config?: RequestConfig): Observable<void>;
    sendTestSms(testSmsRequest: TestSmsRequest, config?: RequestConfig): Observable<void>;
    getSecuritySettings(config?: RequestConfig): Observable<SecuritySettings>;
    saveSecuritySettings(securitySettings: SecuritySettings, config?: RequestConfig): Observable<SecuritySettings>;
    checkUpdates(config?: RequestConfig): Observable<UpdateMessage>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminService>;
}
