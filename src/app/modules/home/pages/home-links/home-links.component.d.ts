import { ChangeDetectorRef, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HomeSection } from '@core/services/menu.models';
import { ActivatedRoute } from '@angular/router';
import { HomeDashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class HomeLinksComponent implements OnInit {
    private menuService;
    breakpointObserver: BreakpointObserver;
    private cd;
    private route;
    homeSections$: import("rxjs").Observable<HomeSection[]>;
    cols: number;
    homeDashboard: HomeDashboard;
    constructor(menuService: MenuService, breakpointObserver: BreakpointObserver, cd: ChangeDetectorRef, route: ActivatedRoute);
    ngOnInit(): void;
    private updateColumnCount;
    sectionColspan(section: HomeSection): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeLinksComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeLinksComponent, "tb-home-links", never, {}, {}, never, never, false, never>;
}
