import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EntityGroupService } from '@core/http/entity-group.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class RedirectToEntityGroup {
    private router;
    private entityGroupService;
    private store;
    constructor(router: Router, entityGroupService: EntityGroupService, store: Store<AppState>);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("rxjs").Observable<import("@angular/router").UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RedirectToEntityGroup, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RedirectToEntityGroup>;
}
export declare class EntityGroupRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EntityGroupRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EntityGroupRoutingModule>;
}
