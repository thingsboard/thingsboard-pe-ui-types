import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Dashboard, DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class DashboardTableHeaderComponent extends EntityTableHeaderComponent<DashboardInfo | Dashboard> implements OnInit {
    protected store: Store<AppState>;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardTableHeaderComponent, "tb-dashboard-table-header", never, {}, {}, never, never, false, never>;
}
