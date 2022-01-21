import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DashboardLayoutId, DashboardStateLayouts } from '@app/shared/models/dashboard.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export interface ManageDashboardLayoutsDialogData {
    layouts: DashboardStateLayouts;
}
export declare class ManageDashboardLayoutsDialogComponent extends DialogComponent<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageDashboardLayoutsDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts>;
    private fb;
    private utils;
    private dashboardUtils;
    private translate;
    private dialog;
    layoutsFormGroup: FormGroup;
    layouts: DashboardStateLayouts;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardLayoutsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts>, fb: FormBuilder, utils: UtilsService, dashboardUtils: DashboardUtilsService, translate: TranslateService, dialog: MatDialog);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    openLayoutSettings(layoutId: DashboardLayoutId): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardLayoutsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardLayoutsDialogComponent, "tb-manage-dashboard-layouts-dialog", never, {}, {}, never, never>;
}
