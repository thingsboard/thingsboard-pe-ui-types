import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { MatStepper } from '@angular/material/stepper';
import * as i0 from "@angular/core";
export declare class SMSAuthDialogComponent extends DialogComponent<SMSAuthDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private twoFaService;
    dialogRef: MatDialogRef<SMSAuthDialogComponent>;
    fb: UntypedFormBuilder;
    private authAccountConfig;
    private config;
    phoneNumberPattern: RegExp;
    smsConfigForm: UntypedFormGroup;
    smsVerificationForm: UntypedFormGroup;
    stepper: MatStepper;
    constructor(store: Store<AppState>, router: Router, twoFaService: TwoFactorAuthenticationService, dialogRef: MatDialogRef<SMSAuthDialogComponent>, fb: UntypedFormBuilder);
    nextStep(): void;
    closeDialog(): void;
    private showFormErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<SMSAuthDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SMSAuthDialogComponent, "tb-sms-auth-dialog", never, {}, {}, never, never, false, never>;
}
