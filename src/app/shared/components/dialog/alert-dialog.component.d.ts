import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export interface AlertDialogData {
    title: string;
    message: string;
    ok: string;
    textMode?: boolean;
}
export declare class AlertDialogComponent extends DialogComponent<AlertDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AlertDialogComponent, boolean>;
    data: AlertDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AlertDialogComponent, boolean>, data: AlertDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertDialogComponent, "tb-alert-dialog", never, {}, {}, never, never, false, never>;
}
