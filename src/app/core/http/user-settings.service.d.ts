import { Observable } from 'rxjs';
import { DocumentationLinks, GettingStarted, QuickLinks, UserDashboardAction, UserDashboardsInfo, UserSettings } from '@shared/models/user-settings.models';
import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export declare class UserSettingsService {
    private http;
    constructor(http: HttpClient);
    loadUserSettings(): Observable<UserSettings>;
    saveUserSettings(userSettings: UserSettings): Observable<UserSettings>;
    putUserSettings(userSettingsData: Partial<UserSettings>): Observable<void>;
    deleteUserSettings(paths: string[]): Observable<Object>;
    getDocumentationLinks(config?: RequestConfig): Observable<DocumentationLinks>;
    updateDocumentationLinks(documentationLinks: DocumentationLinks, config?: RequestConfig): Observable<void>;
    getQuickLinks(config?: RequestConfig): Observable<QuickLinks>;
    updateQuickLinks(quickLinks: QuickLinks, config?: RequestConfig): Observable<void>;
    getGettingStarted(config?: RequestConfig): Observable<GettingStarted>;
    updateGettingStarted(gettingStarted: GettingStarted, config?: RequestConfig): Observable<void>;
    getUserDashboardsInfo(config?: RequestConfig): Observable<UserDashboardsInfo>;
    reportUserDashboardAction(dashboardId: string, action: UserDashboardAction, config?: RequestConfig): Observable<UserDashboardsInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserSettingsService>;
}
