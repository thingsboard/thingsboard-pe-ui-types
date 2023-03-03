import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardInfo } from '../models/dashboard.models';
import * as i0 from "@angular/core";
export declare const DASHBOARD_SELECT_PANEL_DATA: InjectionToken<any>;
export interface DashboardSelectPanelData {
    dashboards$: Observable<Array<DashboardInfo>>;
    dashboardId: string;
    onDashboardSelected: (dashboardId: string) => void;
}
export declare class DashboardSelectPanelComponent {
    private data;
    dashboards$: Observable<Array<DashboardInfo>>;
    dashboardId: string;
    constructor(data: DashboardSelectPanelData);
    dashboardSelected(dashboardId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardSelectPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardSelectPanelComponent, "tb-dashboard-select-panel", never, {}, {}, never, never, false, never>;
}
