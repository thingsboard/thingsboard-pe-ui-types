import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export interface ConfirmDialogData {
    title: string;
    message: string;
    cancel: string;
    ok: string;
}
export declare class ConfirmDialogComponent extends DialogComponent<ConfirmDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ConfirmDialogComponent>;
    data: ConfirmDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ConfirmDialogComponent>, data: ConfirmDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialogComponent, "tb-confirm-dialog", never, {}, {}, never, never, false, never>;
}
