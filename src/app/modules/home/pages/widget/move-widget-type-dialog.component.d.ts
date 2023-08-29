import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface MoveWidgetTypeDialogResult {
    bundleId: string;
    bundleAlias: string;
}
export interface MoveWidgetTypeDialogData {
    currentBundleId: string;
}
export declare class MoveWidgetTypeDialogComponent extends DialogComponent<MoveWidgetTypeDialogComponent, MoveWidgetTypeDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: MoveWidgetTypeDialogData;
    dialogRef: MatDialogRef<MoveWidgetTypeDialogComponent, MoveWidgetTypeDialogResult>;
    fb: UntypedFormBuilder;
    moveWidgetTypeFormGroup: UntypedFormGroup;
    bundlesScope: string;
    constructor(store: Store<AppState>, router: Router, data: MoveWidgetTypeDialogData, dialogRef: MatDialogRef<MoveWidgetTypeDialogComponent, MoveWidgetTypeDialogResult>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    move(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MoveWidgetTypeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MoveWidgetTypeDialogComponent, "tb-move-widget-type-dialog", never, {}, {}, never, never, false, never>;
}
