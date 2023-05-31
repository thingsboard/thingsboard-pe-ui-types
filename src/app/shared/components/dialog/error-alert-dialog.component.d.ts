import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface ErrorAlertDialogData {
    title: string;
    message: string;
    error: any;
    ok: string;
}
export declare class ErrorAlertDialogComponent {
    dialogRef: MatDialogRef<ErrorAlertDialogComponent>;
    data: ErrorAlertDialogData;
    title: string;
    message: string;
    errorMessage: string;
    errorDetails?: string;
    constructor(dialogRef: MatDialogRef<ErrorAlertDialogComponent>, data: ErrorAlertDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorAlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorAlertDialogComponent, "tb-error-alert-dialog", never, {}, {}, never, never, false, never>;
}
