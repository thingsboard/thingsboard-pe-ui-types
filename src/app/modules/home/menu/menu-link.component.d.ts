import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import * as i0 from "@angular/core";
export declare class MenuLinkComponent implements OnInit {
    section: MenuSection;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuLinkComponent, "tb-menu-link", never, { "section": { "alias": "section"; "required": false; }; }, {}, never, never, false, never>;
}
