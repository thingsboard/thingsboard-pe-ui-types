import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BreadCrumb } from './breadcrumb';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BroadcastService } from '@core/services/broadcast.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private broadcast;
    private cd;
    private translate;
    activeComponentValue: any;
    set activeComponent(activeComponent: any);
    breadcrumbs$: Subject<Array<BreadCrumb>>;
    routerEventsSubscription: import("rxjs").Subscription;
    lastBreadcrumb$: import("rxjs").Observable<BreadCrumb>;
    constructor(router: Router, activatedRoute: ActivatedRoute, broadcast: BroadcastService, cd: ChangeDetectorRef, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private lastChild;
    buildBreadCrumbs(route: ActivatedRouteSnapshot, breadcrumbs?: Array<BreadCrumb>, lastChild?: ActivatedRouteSnapshot): Array<BreadCrumb>;
    trackByBreadcrumbs(index: number, breadcrumb: BreadCrumb): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "tb-breadcrumb", never, { "activeComponent": "activeComponent"; }, {}, never, never>;
}
