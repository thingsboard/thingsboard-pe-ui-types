import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class MenuLinkComponent implements OnInit {
    utils: UtilsService;
    section: MenuSection;
    constructor(utils: UtilsService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuLinkComponent, "tb-menu-link", never, { "section": "section"; }, {}, never, never>;
}
