import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { MenuService } from '@core/services/menu.service';
import { UtilsService } from '@core/services/utils.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent implements OnInit {
    utils: UtilsService;
    private menuService;
    private router;
    private store;
    section: MenuSection;
    sectionPages: Array<MenuSection>;
    constructor(utils: UtilsService, menuService: MenuService, router: Router, store: Store<AppState>);
    ngOnInit(): void;
    sectionActive(): boolean;
    sectionHeight(): string;
    toggleSection(event: MouseEvent): void;
    trackBySectionPages(index: number, section: MenuSection): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": "section"; }, {}, never, never, false, never>;
}
