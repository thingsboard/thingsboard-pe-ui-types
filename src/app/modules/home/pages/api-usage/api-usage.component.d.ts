import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Dashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class ApiUsageComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    apiUsageDashboard: Dashboard;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiUsageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApiUsageComponent, "tb-api-usage", never, {}, {}, never, never, false, never>;
}
