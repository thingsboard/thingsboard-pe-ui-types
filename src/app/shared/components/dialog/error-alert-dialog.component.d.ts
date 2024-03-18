import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ErrorAlertDialogData {
    title: string;
    message: string;
    error: any;
    ok: string;
}
export declare class ErrorAlertDialogComponent extends DialogComponent<ErrorAlertDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ErrorAlertDialogComponent>;
    data: ErrorAlertDialogData;
    title: string;
    message: string;
    errorMessage: string;
    errorDetails?: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ErrorAlertDialogComponent>, data: ErrorAlertDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorAlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorAlertDialogComponent, "tb-error-alert-dialog", never, {}, {}, never, never, false, never>;
}
