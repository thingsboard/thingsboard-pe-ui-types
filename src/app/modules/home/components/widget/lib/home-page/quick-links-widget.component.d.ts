import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Observable } from 'rxjs';
import { QuickLinks } from '@shared/models/user-settings.models';
import { UserSettingsService } from '@core/http/user-settings.service';
import { WidgetContext } from '@home/models/widget-component.models';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuService } from '@core/services/menu.service';
import { MenuSection } from '@core/services/menu.models';
import * as i0 from "@angular/core";
interface QuickLinksWidgetSettings {
    columns: number;
}
export declare class QuickLinksWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userSettingsService;
    private dialog;
    private menuService;
    private breakpointObserver;
    ctx: WidgetContext;
    settings: QuickLinksWidgetSettings;
    columns: number;
    rowHeight: string;
    gutterSize: string;
    quickLinks: QuickLinks;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userSettingsService: UserSettingsService, dialog: MatDialog, menuService: MenuService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    menuLinks$(): Observable<Array<MenuSection>>;
    private loadQuickLinks;
    edit(): void;
    addLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickLinksWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickLinksWidgetComponent, "tb-quick-links-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
