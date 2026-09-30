import { ChangeDetectorRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadCrumb } from './breadcrumb';
import { BroadcastService } from '@core/services/broadcast.service';
import { UtilsService } from '@core/services/utils.service';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit, OnDestroy {
    private broadcast;
    private breadcrumbService;
    private cd;
    utils: UtilsService;
    componentBreadcrumbsTpl?: TemplateRef<any>;
    breadcrumbs$: Observable<BreadCrumb[]>;
    lastBreadcrumb$: Observable<BreadCrumb>;
    private updateBreadcrumbsSubscription;
    constructor(broadcast: BroadcastService, breadcrumbService: BreadcrumbService, cd: ChangeDetectorRef, utils: UtilsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "tb-breadcrumb", never, { "componentBreadcrumbsTpl": { "alias": "componentBreadcrumbsTpl"; "required": false; }; }, {}, never, never, false, never>;
}
