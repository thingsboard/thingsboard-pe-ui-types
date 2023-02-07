import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { Observable } from 'rxjs';
import { MenuService } from '@core/services/menu.service';
import { UtilsService } from '@core/services/utils.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent implements OnInit {
    utils: UtilsService;
    private menuService;
    private router;
    section: MenuSection;
    sectionPages$: Observable<Array<MenuSection>>;
    sectionHeight$: Observable<string>;
    constructor(utils: UtilsService, menuService: MenuService, router: Router);
    ngOnInit(): void;
    sectionActive(): boolean;
    trackBySectionPages(index: number, section: MenuSection): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": "section"; }, {}, never, never, false>;
}
