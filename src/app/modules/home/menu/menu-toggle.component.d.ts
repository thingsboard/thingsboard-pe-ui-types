import { OnInit } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent implements OnInit {
    private router;
    private store;
    section: MenuSection;
    constructor(router: Router, store: Store<AppState>);
    ngOnInit(): void;
    sectionHeight(): string;
    toggleSection(event: MouseEvent): void;
    trackBySectionPages(index: number, section: MenuSection): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": { "alias": "section"; "required": false; }; }, {}, never, never, false, never>;
}
