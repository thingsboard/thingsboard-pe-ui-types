import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardLayoutId } from '@app/shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class SelectTargetLayoutDialogComponent extends DialogComponent<SelectTargetLayoutDialogComponent, DashboardLayoutId> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SelectTargetLayoutDialogComponent, DashboardLayoutId>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SelectTargetLayoutDialogComponent, DashboardLayoutId>);
    ngOnInit(): void;
    selectLayout(layoutId: DashboardLayoutId): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectTargetLayoutDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectTargetLayoutDialogComponent, "tb-select-target-layout-dialog", never, {}, {}, never, never, false, never>;
}
