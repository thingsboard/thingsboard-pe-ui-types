import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface SelectDashboardStateDialogData {
    dashboardId: string;
    state: string;
}
export declare class SelectDashboardStateDialogComponent extends DialogComponent<SelectDashboardStateDialogComponent, string> implements OnInit, OnDestroy, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    private window;
    data: SelectDashboardStateDialogData;
    dialogRef: MatDialogRef<SelectDashboardStateDialogComponent, string>;
    fb: FormBuilder;
    width: string;
    height: string;
    selectDashboardFrameElmRef: ElementRef<HTMLIFrameElement>;
    dashboardId: string;
    currentState: string;
    onWindowMessageListener: any;
    constructor(store: Store<AppState>, router: Router, window: Window, data: SelectDashboardStateDialogData, dialogRef: MatDialogRef<SelectDashboardStateDialogComponent, string>, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private loadDashboard;
    private onWindowMessage;
    cancel(): void;
    select(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectDashboardStateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectDashboardStateDialogComponent, "tb-select-dashboard-state-dialog", never, {}, {}, never, never>;
}
