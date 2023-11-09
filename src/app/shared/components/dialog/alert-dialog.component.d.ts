import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface AlertDialogData {
    title: string;
    message: string;
    ok: string;
    textMode?: boolean;
}
export declare class AlertDialogComponent {
    dialogRef: MatDialogRef<AlertDialogComponent>;
    data: AlertDialogData;
    constructor(dialogRef: MatDialogRef<AlertDialogComponent>, data: AlertDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDialogComponent, "tb-alert-dialog", never, {}, {}, never, never, false, never>;
}
