import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EntityGroupStateInfo } from '@home/models/group/group-entities-table-config.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { EntityGroupConfigResolver } from '@home/components/group/entity-group-config.resolver';
import { EntityGroupService } from '@core/http/entity-group.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class EntityGroupResolver<T> implements Resolve<EntityGroupStateInfo<T>> {
    private entityGroupConfigResolver;
    constructor(entityGroupConfigResolver: EntityGroupConfigResolver);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityGroupStateInfo<T>> | EntityGroupStateInfo<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupResolver<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupResolver<any>>;
}
export declare class DashboardResolver implements Resolve<Dashboard> {
    private dashboardService;
    private dashboardUtils;
    constructor(dashboardService: DashboardService, dashboardUtils: DashboardUtilsService);
    resolve(route: ActivatedRouteSnapshot): Observable<Dashboard>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardResolver>;
}
export declare class RedirectToEntityGroup implements CanActivate {
    private router;
    private entityGroupService;
    private store;
    private entityService;
    constructor(router: Router, entityGroupService: EntityGroupService, store: Store<AppState>, entityService: EntityService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<import("@angular/router").UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RedirectToEntityGroup, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RedirectToEntityGroup>;
}
export declare class EntityGroupRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EntityGroupRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EntityGroupRoutingModule>;
}
