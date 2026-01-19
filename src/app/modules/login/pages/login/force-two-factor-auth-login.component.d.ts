import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { AccountTwoFaSettings, BackupCodeTwoFactorAuthAccountConfig, TwoFactorAuthProviderType } from '@shared/models/two-factor-auth.models';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
declare enum ForceTwoFAState {
    SETUP = "setup",
    AUTHENTICATOR_APP = "authenticatorApp",
    SMS = "sms",
    EMAIL = "email",
    BACKUP_CODE = "backupCode"
}
declare enum ProvidersState {
    INPUT = "INPUT",
    ENTER_CODE = "ENTER_CODE",
    SUCCESS = "SUCCESS"
}
declare enum BackupCodeState {
    CODE = "CODE",
    SUCCESS = "SUCCESS"
}
export declare class ForceTwoFactorAuthLoginComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private authService;
    private twoFaService;
    private importExportService;
    dialog: MatDialog;
    dialogService: DialogService;
    private fb;
    wl: WhiteLabelingService;
    class: string;
    TwoFactorAuthProviderType: typeof TwoFactorAuthProviderType;
    providersData: Map<TwoFactorAuthProviderType, import("@shared/models/two-factor-auth.models").TwoFactorAuthProviderLoginData>;
    allowProviders: TwoFactorAuthProviderType[];
    config: AccountTwoFaSettings;
    twoFactorAuthProvidersEnterCodeCardTranslate: Map<TwoFactorAuthProviderType, Omit<import("@shared/models/two-factor-auth.models").TwoFactorAuthProviderData, "activatedHint">>;
    twoFactorAuthProvidersSuccessCardTranslate: Map<TwoFactorAuthProviderType, Omit<import("@shared/models/two-factor-auth.models").TwoFactorAuthProviderData, "activatedHint">>;
    ForceTwoFAState: typeof ForceTwoFAState;
    ProvidersState: typeof ProvidersState;
    BackupCodeState: typeof BackupCodeState;
    state: import("@angular/core").WritableSignal<ForceTwoFAState>;
    appState: import("@angular/core").WritableSignal<ProvidersState>;
    smsState: import("@angular/core").WritableSignal<ProvidersState>;
    emailState: import("@angular/core").WritableSignal<ProvidersState>;
    backupCodeState: import("@angular/core").WritableSignal<BackupCodeState>;
    totpAuthURL: string;
    totpAuthURLSecret: string;
    backupCode: BackupCodeTwoFactorAuthAccountConfig;
    configForm: UntypedFormGroup;
    smsConfigForm: UntypedFormGroup;
    emailConfigForm: UntypedFormGroup;
    private providersInfo;
    private authAccountConfig;
    private useByDefault;
    canvasRef: ElementRef<HTMLCanvasElement>;
    constructor(store: Store<AppState>, authService: AuthService, twoFaService: TwoFactorAuthenticationService, importExportService: ImportExportService, dialog: MatDialog, dialogService: DialogService, fb: UntypedFormBuilder, wl: WhiteLabelingService);
    ngOnInit(): void;
    goBackByType(type: TwoFactorAuthProviderType): void;
    get isAnyProviderAvailable(): boolean;
    private allowedProviders;
    updateState(type: TwoFactorAuthProviderType): void;
    sendSmsCode(): void;
    sendEmailCode(): void;
    tryAnotherWay(type: TwoFactorAuthProviderType): void;
    saveConfig(type: TwoFactorAuthProviderType): void;
    private updateQRCode;
    ngOnDestroy(): void;
    cancelLogin(): void;
    downloadFile(): void;
    printCode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForceTwoFactorAuthLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForceTwoFactorAuthLoginComponent, "tb-force-two-factor-auth-login", never, {}, {}, never, never, false, never>;
}
export {};
