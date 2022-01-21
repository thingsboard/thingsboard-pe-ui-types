import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@core/auth/auth.service';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ChangePasswordDialogComponent extends DialogComponent<ChangePasswordDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private translate;
    private authService;
    dialogRef: MatDialogRef<ChangePasswordDialogComponent>;
    fb: FormBuilder;
    changePassword: FormGroup;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, authService: AuthService, dialogRef: MatDialogRef<ChangePasswordDialogComponent>, fb: FormBuilder);
    ngOnInit(): void;
    buildChangePasswordForm(): void;
    onChangePassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangePasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangePasswordDialogComponent, "tb-change-password-dialog", never, {}, {}, never, never>;
}
