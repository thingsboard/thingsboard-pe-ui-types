import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DashboardPageComponent } from '@home/components/dashboard-page/dashboard-page.component';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { Observable } from 'rxjs';
import { Dashboard } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class DashboardResolver implements Resolve<Dashboard> {
    private dashboardService;
    private dashboardUtils;
    constructor(dashboardService: DashboardService, dashboardUtils: DashboardUtilsService);
    resolve(route: ActivatedRouteSnapshot): Observable<Dashboard>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardResolver>;
}
export declare const dashboardBreadcumbLabelFunction: BreadCrumbLabelFunction<DashboardPageComponent>;
export declare class DashboardRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DashboardRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DashboardRoutingModule>;
}
