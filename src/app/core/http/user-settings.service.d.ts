import { Observable } from 'rxjs';
import { UserSettings } from '@shared/models/user-settings.models';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class UserSettingsService {
    private http;
    constructor(http: HttpClient);
    loadUserSettings(): Observable<UserSettings>;
    saveUserSettings(userSettings: UserSettings): Observable<UserSettings>;
    putUserSettings(userSettingsData: Partial<UserSettings>): Observable<void>;
    deleteUserSettings(paths: string[]): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserSettingsService>;
}
