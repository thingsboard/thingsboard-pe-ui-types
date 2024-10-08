import { PageComponent } from '@shared/components/page.component';
import { NgZone, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MenuService } from '@core/services/menu.service';
import { HomeSection, MenuSection } from '@core/services/menu.models';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
interface NavigationCardsWidgetSettings {
    filterType: 'all' | 'include' | 'exclude';
    filter: string[];
}
export declare class NavigationCardsWidgetComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private menuService;
    private ngZone;
    private router;
    homeSections$: import("rxjs").Observable<HomeSection[]>;
    showHomeSections$: import("rxjs").Observable<HomeSection[]>;
    cols: any;
    settings: NavigationCardsWidgetSettings;
    ctx: WidgetContext;
    constructor(store: Store<AppState>, menuService: MenuService, ngZone: NgZone, router: Router);
    ngOnInit(): void;
    resize(): void;
    private updateColumnCount;
    navigate($event: Event, path: string): void;
    sectionPlaces(section: HomeSection): MenuSection[];
    private filterPlace;
    sectionColspan(section: HomeSection): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationCardsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationCardsWidgetComponent, "tb-navigation-cards-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
