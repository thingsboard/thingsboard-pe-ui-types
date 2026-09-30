import { BreadCrumb } from '@shared/components/breadcrumb';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '@core/services/menu.service';
import { ActiveComponentService } from '@core/services/active-component.service';
import { UtilsService } from '@core/services/utils.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class BreadcrumbService {
    private router;
    private store;
    private activatedRoute;
    private translate;
    private menuService;
    private activeComponentService;
    private utils;
    private updateBreadcrumbsSubscription;
    private breadcrumbsSubject;
    private activeComponent;
    get breadcrumbs$(): import("rxjs").Observable<BreadCrumb[]>;
    get lastBreadcrumb$(): import("rxjs").Observable<BreadCrumb>;
    constructor(router: Router, store: Store<AppState>, activatedRoute: ActivatedRoute, translate: TranslateService, menuService: MenuService, activeComponentService: ActiveComponentService, utils: UtilsService);
    private setActiveComponent;
    private buildBreadCrumbs;
    private lastChild;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbService>;
}
