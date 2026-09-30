import 'hammerjs';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from '@core/auth/auth.service';
import { DashboardReportService } from '@core/http/dashboard-report.service';
import { DevelopmentService } from '@core/http/development.service';
import { SystemSetupService } from '@core/http/system-setup.service';
import * as i0 from "@angular/core";
export declare class AppComponent {
    private store;
    private storageService;
    private translateStore;
    private translate;
    private matIconRegistry;
    private domSanitizer;
    private authService;
    private reportService;
    private developmentService;
    private systemSetupService;
    constructor(store: Store<AppState>, storageService: LocalStorageService, translateStore: TranslateStore, translate: TranslateService, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, authService: AuthService, reportService: DashboardReportService, developmentService: DevelopmentService, systemSetupService: SystemSetupService);
    /**
     * setupAuth() below routes authentication changes, but it is installed only from checkSetupState()'s emission,
     * which fires for READY alone. On a locked instance nothing installs it, so a successful sign-in left the user
     * on the login form with nothing to click. Kept general: the sign-out ending forced 2FA is stranded the same way.
     *
     * Does nothing while the instance reports READY, so both subscriptions may be live after a mid-session relock -
     * routing then happens twice and a captured redirect URL is dropped. Harmless: the next 423 re-routes anyway.
     *
     * skip(1) matches setupAuth()'s cold-start handling - the initial load is not a change the user made.
     */
    private routeAuthenticationChangesWhileSetupIsIncomplete;
    setupTranslate(): void;
    setupAuth(gotoDefaultPlace: boolean): void;
    onActivateComponent(_$event: any): void;
    private notifyUserLang;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "tb-root", never, {}, {}, never, never, false, never>;
}
