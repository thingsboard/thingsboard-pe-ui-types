import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { MatStepper } from '@angular/material/stepper';
import * as i0 from "@angular/core";
export interface EmailAuthDialogData {
    email: string;
}
export declare class EmailAuthDialogComponent extends DialogComponent<EmailAuthDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private twoFaService;
    data: EmailAuthDialogData;
    dialogRef: MatDialogRef<EmailAuthDialogComponent>;
    fb: UntypedFormBuilder;
    private authAccountConfig;
    private config;
    emailConfigForm: UntypedFormGroup;
    emailVerificationForm: UntypedFormGroup;
    stepper: MatStepper;
    constructor(store: Store<AppState>, router: Router, twoFaService: TwoFactorAuthenticationService, data: EmailAuthDialogData, dialogRef: MatDialogRef<EmailAuthDialogComponent>, fb: UntypedFormBuilder);
    nextStep(): void;
    closeDialog(): void;
    private showFormErrors;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailAuthDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailAuthDialogComponent, "tb-email-auth-dialog", never, {}, {}, never, never, false, never>;
}
