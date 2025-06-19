import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { SecretStorageType } from '@shared/models/secret-storage.models';
import { UntypedFormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export interface EditSecretValueDialogData {
    type: SecretStorageType;
}
export declare class EditSecretValueDialogComponent extends DialogComponent<EditSecretValueDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    data: EditSecretValueDialogData;
    dialogRef: MatDialogRef<EditSecretValueDialogComponent, boolean>;
    translate: TranslateService;
    SecretStorageType: typeof SecretStorageType;
    type: SecretStorageType;
    valueFormControl: import("@angular/forms").UntypedFormControl;
    constructor(store: Store<AppState>, router: Router, fb: UntypedFormBuilder, data: EditSecretValueDialogData, dialogRef: MatDialogRef<EditSecretValueDialogComponent, boolean>, translate: TranslateService);
    ngOnInit(): void;
    cancel(): void;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditSecretValueDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditSecretValueDialogComponent, "tb-edit-secret-value-dialog", never, {}, {}, never, never, false, never>;
}
