import { AfterContentInit, EventEmitter, OnChanges } from "@angular/core";
import { DashboardsOverview } from '@shared/models/solution-creator.models';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SolutionCreatorOverviewDashboardComponent implements OnChanges, AfterContentInit {
    private fb;
    dashboards: DashboardsOverview[];
    solutionName: string;
    updatedDashboards: EventEmitter<DashboardsOverview[]>;
    initComponent: boolean;
    dashboard: import("@angular/forms").FormControl<string[]>;
    dashboardDescriptor: import("@angular/forms").FormControl<DashboardsOverview[]>;
    solutionMode: import("@angular/forms").FormControl<string>;
    description: string;
    constructor(fb: FormBuilder);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    updatedDashboardsDescriptor($event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionCreatorOverviewDashboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionCreatorOverviewDashboardComponent, "tb-solution-creator-overview-dashboard", never, { "dashboards": { "alias": "dashboards"; "required": true; }; "solutionName": { "alias": "solutionName"; "required": true; }; }, { "updatedDashboards": "updatedDashboards"; }, never, never, false, never>;
}
