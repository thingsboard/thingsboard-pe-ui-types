import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
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
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface ManageDashboardStatesDialogData {
    states: {
        [id: string]: DashboardState;
    };
    widgets: {
        [id: string]: Widget;
    };
}
export interface ManageDashboardStatesDialogResult {
    states: {
        [id: string]: DashboardState;
    };
    addWidgets?: {
        [id: string]: Widget;
    };
}
export declare class ManageDashboardStatesDialogComponent extends DialogComponent<ManageDashboardStatesDialogComponent, ManageDashboardStatesDialogResult> implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageDashboardStatesDialogData;
    dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, ManageDashboardStatesDialogResult>;
    private translate;
    private dialogs;
    private utils;
    private dialog;
    private sanitizer;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    isDirty: boolean;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: DashboardStatesDatasource;
    private states;
    private widgets;
    private stateNames;
    private addWidgets;
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardStatesDialogData, dialogRef: MatDialogRef<ManageDashboardStatesDialogComponent, ManageDashboardStatesDialogResult>, translate: TranslateService, dialogs: DialogService, utils: UtilsService, dialog: MatDialog, sanitizer: DomSanitizer);
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
    private onStatesUpdated;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardStatesDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardStatesDialogComponent, "tb-manage-dashboard-states-dialog", never, {}, {}, never, never, false, never>;
}
