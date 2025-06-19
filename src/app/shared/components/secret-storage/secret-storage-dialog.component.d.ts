import { DestroyRef, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SecretStorage, SecretStorageType } from '@shared/models/secret-storage.models';
import { FormBuilder, FormControl } from '@angular/forms';
import { SecretStorageService } from '@core/http/secret-storage.service';
import * as i0 from "@angular/core";
export interface SecretStorageData {
    type: SecretStorageType;
    value: string;
    fileName?: string;
    hideType?: boolean;
    onlyCreateNew?: boolean;
}
export declare class SecretStorageDialogComponent extends DialogComponent<SecretStorageDialogComponent, SecretStorage | string> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: SecretStorageData;
    dialogRef: MatDialogRef<SecretStorageDialogComponent, SecretStorage | string>;
    private destroyRef;
    private fb;
    private secretStorageService;
    createNewLabel: string;
    createNew: boolean;
    onlyCreateNew: boolean;
    hideType: boolean;
    secretType: SecretStorageType;
    SecretStorageType: typeof SecretStorageType;
    fileName: string;
    secretForm: import("@angular/forms").FormGroup<{
        type: FormControl<SecretStorageType>;
        name: FormControl<string>;
        description: FormControl<string>;
        value: FormControl<string>;
    }>;
    secret: FormControl<string>;
    constructor(store: Store<AppState>, router: Router, data: SecretStorageData, dialogRef: MatDialogRef<SecretStorageDialogComponent, SecretStorage | string>, destroyRef: DestroyRef, fb: FormBuilder, secretStorageService: SecretStorageService);
    ngOnInit(): void;
    onChange(value: boolean): void;
    get dialogTitle(): string;
    get addButtonLabel(): string;
    helpLinkId(): string;
    cancel(): void;
    private prepareOutputSecret;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretStorageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretStorageDialogComponent, "tb-secret-storage-dialog", never, {}, {}, never, never, false, never>;
}
