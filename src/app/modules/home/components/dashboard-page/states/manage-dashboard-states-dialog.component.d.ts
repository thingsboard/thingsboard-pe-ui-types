import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardState } from '@app/shared/models/dashboard.models';
import { PageLink } from '@shared/models/page/page-link';
import { DashboardStateInfo, DashboardStatesDatasource } from '@home/components/dashboard-page/states/manage-dashboard-states-dialog.component.models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export interface ManageDashboardStatesDialogData {
    states: {
        [id: string]: DashboardState;
    };
}
export declare class ManageDashboardStatesDialogComponent extends DialogComponent<ManageDashboardStatesDialogComponent, {
    [id: string]: DashboardState;
}> implements OnInit, ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageDashboardStatesDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, {
        [id: string]: DashboardState;
    }>;
    private fb;
    private translate;
    private dialogs;
    private dialog;
    statesFormGroup: FormGroup;
    states: {
        [id: string]: DashboardState;
    };
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: DashboardStatesDatasource;
    submitted: boolean;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardStatesDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, {
        [id: string]: DashboardState;
    }>, fb: FormBuilder, translate: TranslateService, dialogs: DialogService, dialog: MatDialog);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    addState($event: Event): void;
    editState($event: Event, state: DashboardStateInfo): void;
    deleteState($event: Event, state: DashboardStateInfo): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    openStateDialog($event: Event, state?: DashboardStateInfo): void;
    saveState(state: DashboardStateInfo, prevStateId: string): void;
    private onStatesUpdated;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardStatesDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardStatesDialogComponent, "tb-manage-dashboard-states-dialog", never, {}, {}, never, never>;
}
