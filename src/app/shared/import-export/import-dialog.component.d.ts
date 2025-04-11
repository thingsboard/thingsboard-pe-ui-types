import { DestroyRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ImportDialogData {
    importTitle: string;
    importFileLabel: string;
    enableImportFromContent?: boolean;
    importContentLabel?: string;
}
export declare class ImportDialogComponent extends DialogComponent<ImportDialogComponent> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ImportDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ImportDialogComponent>;
    private destroyRef;
    private fb;
    importTitle: string;
    importFileLabel: string;
    enableImportFromContent: boolean;
    importContentLabel: string;
    importFormGroup: UntypedFormGroup;
    currentFileName: string;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ImportDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ImportDialogComponent>, destroyRef: DestroyRef, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    loadDataFromJsonContent(content: string): any;
    cancel(): void;
    importFromJson(): void;
    private importTypeChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportDialogComponent, "tb-import-dialog", never, {}, {}, never, never, false, never>;
}
