import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent implements OnInit {
    private router;
    section: MenuSection;
    constructor(router: Router);
    ngOnInit(): void;
    sectionActive(): boolean;
    sectionHeight(): string;
    trackBySectionPages(index: number, section: MenuSection): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": "section"; }, {}, never, never>;
}
