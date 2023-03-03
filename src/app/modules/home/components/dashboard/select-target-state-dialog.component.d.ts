import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardState } from '@app/shared/models/dashboard.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export interface SelectTargetStateDialogData {
    states: {
        [id: string]: DashboardState;
    };
}
export declare class SelectTargetStateDialogComponent extends DialogComponent<SelectTargetStateDialogComponent, string> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: SelectTargetStateDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<SelectTargetStateDialogComponent, string>;
    private fb;
    private dashboardUtils;
    states: {
        [id: string]: DashboardState;
    };
    stateFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: SelectTargetStateDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<SelectTargetStateDialogComponent, string>, fb: UntypedFormBuilder, dashboardUtils: DashboardUtilsService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectTargetStateDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectTargetStateDialogComponent, "tb-select-target-state-dialog", never, {}, {}, never, never, false, never>;
}
