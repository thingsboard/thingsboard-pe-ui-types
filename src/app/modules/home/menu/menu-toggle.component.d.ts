import { MenuSection } from '@core/services/menu.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent {
    private store;
    section: MenuSection;
    collapsed: boolean;
    constructor(store: Store<AppState>);
    sectionHeight(): string;
    toggleSection(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": { "alias": "section"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, false, never>;
}
