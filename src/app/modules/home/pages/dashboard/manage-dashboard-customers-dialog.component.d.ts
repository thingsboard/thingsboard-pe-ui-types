import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { DashboardService } from '@core/http/dashboard.service';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare type ManageDashboardCustomersActionType = 'assign' | 'manage' | 'unassign';
export interface ManageDashboardCustomersDialogData {
    actionType: ManageDashboardCustomersActionType;
    dashboardIds: Array<string>;
    assignedCustomersIds?: Array<string>;
}
export declare class ManageDashboardCustomersDialogComponent extends DialogComponent<ManageDashboardCustomersDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageDashboardCustomersDialogData;
    private dashboardService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ManageDashboardCustomersDialogComponent, boolean>;
    fb: FormBuilder;
    dashboardCustomersFormGroup: FormGroup;
    submitted: boolean;
    entityType: typeof EntityType;
    titleText: string;
    labelText: string;
    actionName: string;
    assignedCustomersIds: string[];
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardCustomersDialogData, dashboardService: DashboardService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageDashboardCustomersDialogComponent, boolean>, fb: FormBuilder);
    ngOnInit(): void;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    submit(): void;
    private getManageDashboardCustomersTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardCustomersDialogComponent, [null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardCustomersDialogComponent, "tb-manage-dashboard-customers-dialog", never, {}, {}, never, never>;
}
