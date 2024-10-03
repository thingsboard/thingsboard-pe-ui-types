import { OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { MenuSection } from '@core/services/menu.models';
import * as i0 from "@angular/core";
export declare class SideMenuComponent implements OnInit {
    private menuService;
    menuSections$: import("rxjs").Observable<MenuSection[]>;
    constructor(menuService: MenuService);
    trackByMenuSection(index: number, section: MenuSection): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SideMenuComponent, "tb-side-menu", never, {}, {}, never, never, false, never>;
}
