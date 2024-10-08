import { PageComponent } from '@shared/components/page.component';
import { NgZone, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
interface NavigationCardWidgetSettings {
    name: string;
    icon: string;
    path: string;
}
export declare class NavigationCardWidgetComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private utils;
    private ngZone;
    private router;
    settings: NavigationCardWidgetSettings;
    translatedName: string;
    ctx: WidgetContext;
    constructor(store: Store<AppState>, utils: UtilsService, ngZone: NgZone, router: Router);
    ngOnInit(): void;
    navigate($event: Event, path: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavigationCardWidgetComponent, "tb-navigation-card-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
