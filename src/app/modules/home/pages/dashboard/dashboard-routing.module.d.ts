import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { Dashboard } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { Observable } from 'rxjs';
import { UserSettingsService } from '@core/http/user-settings.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class DashboardResolver {
    private store;
    private dashboardService;
    private userSettingService;
    private dashboardUtils;
    constructor(store: Store<AppState>, dashboardService: DashboardService, userSettingService: UserSettingsService, dashboardUtils: DashboardUtilsService);
    resolve(route: ActivatedRouteSnapshot): Observable<Dashboard>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardResolver>;
}
export declare const dashboardGroupsRoute: Route;
export declare const dashboardsRoute: (root?: boolean) => Route;
export declare class DashboardRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DashboardRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DashboardRoutingModule>;
}
