import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface MoveWidgetsDialogResult {
    cols: number;
    rows: number;
}
export declare class MoveWidgetsDialogComponent extends DialogComponent<MoveWidgetsDialogComponent, MoveWidgetsDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<MoveWidgetsDialogComponent, MoveWidgetsDialogResult>;
    private fb;
    private dialog;
    moveWidgetsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<MoveWidgetsDialogComponent, MoveWidgetsDialogResult>, fb: UntypedFormBuilder, dialog: MatDialog);
    cancel(): void;
    move(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MoveWidgetsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MoveWidgetsDialogComponent, "tb-move-widgets-dialog", never, {}, {}, never, never, false, never>;
}
