import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { EdgeService } from '@core/http/edge.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class EdgeTitleResolver {
    private edgeService;
    constructor(edgeService: EdgeService);
    resolve(route: ActivatedRouteSnapshot): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTitleResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EdgeTitleResolver>;
}
export declare const edgesRoute: (root?: boolean) => Route;
export declare class EdgeRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EdgeRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EdgeRoutingModule>;
}
