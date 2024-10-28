import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Dashboard } from '@shared/models/dashboard.models';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DashboardViewComponent extends PageComponent {
    protected store: Store<AppState>;
    private route;
    dashboard: Dashboard;
    constructor(store: Store<AppState>, route: ActivatedRoute);
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardViewComponent, "tb-dashboard-view", never, {}, {}, never, never, false, never>;
}
