import { MenuService } from '@core/services/menu.service';
import * as i0 from "@angular/core";
export declare class SideMenuComponent {
    private menuService;
    collapsed: boolean;
    menuSections$: import("rxjs").Observable<import("../../../core/public-api").MenuSection[]>;
    constructor(menuService: MenuService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SideMenuComponent, "tb-side-menu", never, { "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, false, never>;
}
