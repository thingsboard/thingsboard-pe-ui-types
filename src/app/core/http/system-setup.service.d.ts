import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicenseChangeResult, LicenseClaimInfo, LicenseClaimResult, SetupInfo, SystemSetupRequest, SystemSetupState } from '@shared/models/system-setup.models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { UtilsService } from '@core/services/utils.service';
import { SubscriptionInfo } from '@shared/models/subscription.models';
import * as i0 from "@angular/core";
export declare class SystemSetupService {
    private store;
    private http;
    private translate;
    private translateStore;
    private document;
    private router;
    private utils;
    private setupComplete;
    private state;
    /** One-time by construction: app.component subscribes once, and re-running it re-authenticates a live session. */
    private startUpHandOffMade;
    constructor(store: Store<AppState>, http: HttpClient, translate: TranslateService, translateStore: TranslateStore, document: Document, router: Router, utils: UtilsService);
    /**
     * The whole application waits on this emission - nothing else installs the auth wiring or loads the user, so a
     * subscriber that never emits leaves the browser on the spinner. An unreadable state therefore proceeds as
     * READY; if the instance really is locked, its first API call answers 423 and the interceptor takes over.
     */
    checkSetupState(): Observable<boolean>;
    private readableState;
    handleSetupState(state: SystemSetupState, gotoDefaultPlace?: boolean): void;
    /**
     * Called by the setup screen, which has already established the session and decides where the user lands - so
     * it does not route, and does not re-run the start-up hand-off if that already happened. Leaves one thing to
     * put back by hand: the translations handleSetupState() swapped for the setup screen's bundled ones.
     */
    finishSetup(): void;
    private makeStartUpHandOff;
    getState(): SystemSetupState;
    getSetupState(): Observable<SetupInfo>;
    /**
     * The claim token names which claim the caller is watching: only one is outstanding per installation, so a
     * second session starting its own activation replaces this one's, and naming it is what gets the superseded
     * session an EXPIRED instead of a PENDING on a link nobody can activate. Omitted when none is held, which
     * reports on whatever claim is stored.
     */
    getClaimInfo(claimToken?: string): Observable<LicenseClaimInfo>;
    /** Bodyless: the claim is minted from the instance's own identity, so there is nothing for a caller to send. */
    requestClaim(): Observable<LicenseClaimResult>;
    applyLicenseKey(secret: string): Observable<SetupInfo>;
    changeLicenseKey(secret: string): Observable<LicenseChangeResult>;
    previewLicenseKey(secret: string): Observable<SubscriptionInfo>;
    completeSetup(request: SystemSetupRequest): Observable<void>;
    /** Sysadmin-authenticated, not under /api/noauth/. */
    confirmNonProduction(): Observable<void>;
    private initTranslate;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemSetupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemSetupService>;
}
