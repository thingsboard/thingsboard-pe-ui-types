import { OnDestroy, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { LicenseClaimMode } from '@shared/models/system-setup.models';
import { SystemSetupService } from '@core/http/system-setup.service';
import { Observable } from 'rxjs';
import { AuthService } from '@core/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
declare enum ActivationState {
    INITIAL = "INITIAL",
    WAITING = "WAITING",
    OFFLINE = "OFFLINE",
    HAVE_KEY = "HAVE_KEY",
    SETUP_ACCOUNT = "SETUP_ACCOUNT",
    DEMO_TENANT_OFFER = "DEMO_TENANT_OFFER",
    NON_PRODUCTION_CONFIRM = "NON_PRODUCTION_CONFIRM"
}
export declare class ActivatePlatformComponent extends PageComponent implements OnInit, OnDestroy {
    private systemSetupService;
    private fb;
    private authService;
    private translate;
    private route;
    private router;
    get stateClass(): string;
    ActivationState: typeof ActivationState;
    licensePortalHostName: string;
    licensePortalActivationLink: string;
    licensePortalActivationLinkQrCodeSVG: string;
    copyingActivationLink: boolean;
    demoTenantEmail: string;
    demoTenantPassword: string;
    demoTenantCredsContent: string;
    copyingDemoTenantCreds: boolean;
    /** The mode the claim was minted with, as the server's own reachability probe read it. */
    claimMode: LicenseClaimMode;
    /**
     * The token this session's own claim was minted with. Named on every poll so that a second session starting
     * its own activation - which replaces this token server-side - leaves this one watching a dead link and told
     * so, rather than polling the other session's live claim for ever.
     */
    private claimToken;
    /** Only a signed-in sysadmin gets the Confirm control; everyone else gets the sign-in affordance. */
    isSysAdminViewer$: Observable<boolean>;
    activationState: ActivationState;
    env: {
        appTitle: string;
        production: boolean;
        tbVersion: any;
        supportedLangs: any;
        defaultLang: string;
    };
    sendError: boolean;
    sendNetworkError: boolean;
    sendErrorMessage: string | null;
    keyInput: string;
    keyError: boolean;
    keyErrorStateMatcher: ErrorStateMatcher;
    activating: boolean;
    activatingKey: boolean;
    submittingAccount: boolean;
    confirmingNonProduction: boolean;
    sysAdminEmail: string;
    setupAccountForm: FormGroup;
    private poll?;
    /** Keeps the retried setup-state read one at a time while the poll keeps reporting the same activation. */
    private readingActivatedSetupState;
    private readonly destroy$;
    constructor(systemSetupService: SystemSetupService, fb: FormBuilder, authService: AuthService, translate: TranslateService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    gotoLicensePortal(): void;
    /**
     * OFFLINE says the server could not reach the portal - it says nothing about the machine the operator is
     * sitting at, so the link is rendered in full either way. The offline screen only adds the step of bringing
     * the key back by hand, and watching keeps running in case the server does reach the portal after all.
     */
    private claimWaitingState;
    private computeLink;
    private renderActivationLinkQrCode;
    copyActivationLink(): void;
    openActivationLink(): void;
    gotoHaveKey(): void;
    goBack(): void;
    copyDemoTenantCreds(): void;
    private gotoInitial;
    private backToWaiting;
    pasteKey(): Promise<void>;
    onKeyChange(): void;
    activateKey(control: FormControl): void;
    setupAccount(): void;
    exploreDemoTenant(): void;
    /** Both answers leave the tenant exactly as it is: it exists by the time this step renders. */
    skipDemoTenant(): void;
    /**
     * Watching stops only once the setup-state read comes back usable; a failed read leaves the poll running, so
     * the next tick retries instead of stranding the screen on the waiting copy.
     */
    private continueActivated;
    private onActivatedStateUnreadable;
    private handleSetupStatusUpdate;
    /**
     * Establishes the session first, then records the setup complete, then routes. What must not happen is the
     * start-up hand-off reloading the user from scratch: a failure inside that reload signs out a working session,
     * which is how completing an activation used to end on the login form.
     */
    private leaveSetupScreen;
    /** Loaded, not signed in: a load that finds no usable session still counts and answers with nobody authenticated. */
    private whenUserLoaded;
    /** Otherwise a newly rendered screen shows a permanently disabled, permanently spinning button. */
    private clearPendingSubmissions;
    confirmNonProduction(): void;
    /**
     * Signs the current viewer out and waits for it to land before navigating - going immediately races /login's
     * guard, which would still see the old state. Captures this URL so a successful sign-in returns here.
     */
    goToSysAdminLogin(): void;
    /**
     * Unlike LICENSE_REQUIRED/ACCOUNT_REQUIRED, this state presupposes a sysadmin account and its only remedy is
     * sysadmin-authenticated. The bootstrap installs no auth wiring while setup is incomplete, so without this
     * `isUserLoaded` never becomes true, AuthGuard never resolves, and the lock has no way out.
     */
    private ensureAuthInitialized;
    private startPolling;
    private stopPolling;
    /**
     * The claim lives on the server, but the link built from its sign-up URL lives only here - so a reload would
     * leave the screen with no link to show, and re-requesting one would mint a fresh token and invalidate the
     * link the operator may already have open. Session storage: survives F5, dies with the tab.
     */
    private storeActivationClaim;
    private restoreActivationClaim;
    private clearStoredActivationClaim;
    private clearKeyErrors;
    private clearSendErrors;
    private onSendError;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActivatePlatformComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActivatePlatformComponent, "tb-activate-platform", never, {}, {}, never, never, false, never>;
}
export {};
