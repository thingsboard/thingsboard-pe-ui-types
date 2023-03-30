import { ComponentRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '@core/services/menu.service';
import { MenuSection } from '@core/services/menu.models';
import { ActiveComponentService } from '@core/services/active-component.service';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import * as i0 from "@angular/core";
export declare class RouterTabsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private activatedRoute;
    router: Router;
    private menuService;
    private activeComponentService;
    tabsHeaderComponentAnchor: TbAnchorComponent;
    tabsHeaderComponentRef: ComponentRef<any>;
    hideCurrentTabs: boolean;
    tabs$: import("rxjs").Observable<MenuSection[]>;
    constructor(store: Store<AppState>, activatedRoute: ActivatedRoute, router: Router, menuService: MenuService, activeComponentService: ActiveComponentService);
    ngOnInit(): void;
    activeComponentChanged(activeComponent: any): void;
    private buildTabs;
    private findRootSection;
    private buildTabsHeaderComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouterTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RouterTabsComponent, "tb-router-tabs", never, {}, {}, never, never, false, never>;
}
