import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { DashboardState } from '@app/shared/models/dashboard.models';
import { PageLink } from '@shared/models/page/page-link';
import { DashboardStateInfo, DashboardStatesDatasource } from '@home/components/dashboard-page/states/manage-dashboard-states-dialog.component.models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { UtilsService } from '@core/services/utils.service';
import { Widget } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export interface ManageDashboardStatesDialogData {
    states: {
        [id: string]: DashboardState;
    };
    widgets: {
        [id: string]: Widget;
    };
}
export declare class ManageDashboardStatesDialogComponent extends DialogComponent<ManageDashboardStatesDialogComponent, {
    states: {
        [id: string]: DashboardState;
    };
    widgets: {
        [id: string]: Widget;
    };
}> implements OnInit, ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageDashboardStatesDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, {
        states: {
            [id: string]: DashboardState;
        };
        widgets: {
            [id: string]: Widget;
        };
    }>;
    private fb;
    private translate;
    private dialogs;
    private utils;
    private dialog;
    statesFormGroup: UntypedFormGroup;
    states: {
        [id: string]: DashboardState;
    };
    widgets: {
        [id: string]: Widget;
    };
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: DashboardStatesDatasource;
    submitted: boolean;
    stateNames: Set<string>;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardStatesDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, {
        states: {
            [id: string]: DashboardState;
        };
        widgets: {
            [id: string]: Widget;
        };
    }>, fb: UntypedFormBuilder, translate: TranslateService, dialogs: DialogService, utils: UtilsService, dialog: MatDialog);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    addState($event: Event): void;
    editState($event: Event, state: DashboardStateInfo): void;
    deleteState($event: Event, state: DashboardStateInfo): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    openStateDialog($event: Event, state?: DashboardStateInfo): void;
    saveState(state: DashboardStateInfo, prevStateId: string, prevStateName: string): void;
    duplicateState($event: Event, state: DashboardStateInfo): void;
    private getNextDuplicatedName;
    private onStatesUpdated;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardStatesDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardStatesDialogComponent, "tb-manage-dashboard-states-dialog", never, {}, {}, never, never, false, never>;
}
