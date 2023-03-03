import { OnInit, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { Dashboard } from '@shared/models/dashboard.models';
import { IDashboardComponent } from '@home/models/dashboard-component.models';
import * as i0 from "@angular/core";
export interface EmbedDashboardDialogData {
    dashboard: Dashboard;
    state: string;
    title: string;
    hideToolbar: boolean;
    width?: number;
    height?: number;
    parentDashboard?: IDashboardComponent;
}
export declare class EmbedDashboardDialogComponent extends DialogComponent<EmbedDashboardDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: EmbedDashboardDialogData;
    dialogRef: MatDialogRef<EmbedDashboardDialogComponent>;
    dashboardContentContainer: ViewContainerRef;
    dashboard: Dashboard;
    state: string;
    title: string;
    hideToolbar: boolean;
    parentDashboard: IDashboardComponent;
    dialogStyle: any;
    constructor(store: Store<AppState>, router: Router, data: EmbedDashboardDialogData, dialogRef: MatDialogRef<EmbedDashboardDialogComponent>);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmbedDashboardDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmbedDashboardDialogComponent, "tb-embed-dashboard-dialog", never, {}, {}, never, never, false, never>;
}
