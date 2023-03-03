import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardState } from '@app/shared/models/dashboard.models';
import { DashboardStateInfo } from '@home/components/dashboard-page/states/manage-dashboard-states-dialog.component.models';
import { TranslateService } from '@ngx-translate/core';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export interface DashboardStateDialogData {
    states: {
        [id: string]: DashboardState;
    };
    state: DashboardStateInfo;
    isAdd: boolean;
}
export declare class DashboardStateDialogComponent extends DialogComponent<DashboardStateDialogComponent, DashboardStateInfo> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DashboardStateDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DashboardStateDialogComponent, DashboardStateInfo>;
    private fb;
    private translate;
    private dashboardUtils;
    stateFormGroup: UntypedFormGroup;
    states: {
        [id: string]: DashboardState;
    };
    state: DashboardStateInfo;
    prevStateId: string;
    stateIdTouched: boolean;
    isAdd: boolean;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: DashboardStateDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DashboardStateDialogComponent, DashboardStateInfo>, fb: UntypedFormBuilder, translate: TranslateService, dashboardUtils: DashboardUtilsService);
    private checkStateName;
    private validateDuplicateStateId;
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardStateDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardStateDialogComponent, "tb-dashboard-state-dialog", never, {}, {}, never, never, false, never>;
}
