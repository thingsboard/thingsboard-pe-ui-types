import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface CancelTaskDialogData {
    title: string;
    message: string;
}
export declare class CancelTaskDialogComponent extends DialogComponent<CancelTaskDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<CancelTaskDialogComponent>;
    data: CancelTaskDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<CancelTaskDialogComponent>, data: CancelTaskDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<CancelTaskDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CancelTaskDialogComponent, "tb-confirm-dialog", never, {}, {}, never, never, false, never>;
}
