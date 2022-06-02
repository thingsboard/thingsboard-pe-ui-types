import { ElementRef } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TwoFactorAuthenticationService } from '@core/http/two-factor-authentication.service';
import { MatStepper } from '@angular/material/stepper';
import * as i0 from "@angular/core";
export declare class TotpAuthDialogComponent extends DialogComponent<TotpAuthDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private twoFaService;
    dialogRef: MatDialogRef<TotpAuthDialogComponent>;
    fb: FormBuilder;
    private authAccountConfig;
    private config;
    totpConfigForm: FormGroup;
    totpAuthURL: string;
    stepper: MatStepper;
    canvasRef: ElementRef<HTMLCanvasElement>;
    constructor(store: Store<AppState>, router: Router, twoFaService: TwoFactorAuthenticationService, dialogRef: MatDialogRef<TotpAuthDialogComponent>, fb: FormBuilder);
    onSaveConfig(): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotpAuthDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotpAuthDialogComponent, "tb-totp-auth-dialog", never, {}, {}, never, never>;
}
