import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { SettingsActions } from './settings.actions';
import { AppState } from '@app/core/core.state';
import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { TitleService } from '@app/core/services/title.service';
import { AuthService } from '@core/auth/auth.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare const SETTINGS_KEY = "SETTINGS";
export declare class SettingsEffects {
    private actions$;
    private store;
    private authService;
    private utils;
    private router;
    private localStorageService;
    private titleService;
    private translate;
    constructor(actions$: Actions<SettingsActions>, store: Store<AppState>, authService: AuthService, utils: UtilsService, router: Router, localStorageService: LocalStorageService, titleService: TitleService, translate: TranslateService);
    persistSettings: import("rxjs").Observable<[import("./settings.actions").ActionSettingsChangeLanguage, import("./settings.models").SettingsState]>;
    setTranslateServiceLanguage: import("rxjs").Observable<string>;
    setTitle: import("rxjs").Observable<import("@angular/router").Event>;
    setPublicId: import("rxjs").Observable<import("@angular/router").Event>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SettingsEffects>;
}
