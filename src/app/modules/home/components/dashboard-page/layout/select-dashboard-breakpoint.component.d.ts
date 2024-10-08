import { OnDestroy, OnInit } from '@angular/core';
import { DashboardPageComponent } from '@home/components/dashboard-page/dashboard-page.component';
import { BreakpointId } from '@shared/models/dashboard.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export declare class SelectDashboardBreakpointComponent implements OnInit, OnDestroy {
    private dashboardUtils;
    dashboardCtrl: DashboardPageComponent;
    selectedBreakpoint: BreakpointId;
    breakpointIds: Array<BreakpointId>;
    private layoutDataChanged$;
    constructor(dashboardUtils: DashboardUtilsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    selectLayoutChanged(): void;
    getName(breakpointId: BreakpointId): string;
    getIcon(breakpointId: BreakpointId): string;
    getSizeDescription(breakpointId: BreakpointId): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectDashboardBreakpointComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectDashboardBreakpointComponent, "tb-select-dashboard-breakpoint", never, { "dashboardCtrl": { "alias": "dashboardCtrl"; "required": false; }; }, {}, never, never, false, never>;
}
