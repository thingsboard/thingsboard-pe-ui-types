import { EventEmitter, OnInit } from '@angular/core';
import { CMScope, CustomMenuItem } from '@shared/models/custom-menu.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomMenuItemPanelComponent implements OnInit {
    private fb;
    disabled: boolean;
    scope: CMScope;
    subItem: boolean;
    menuItem: CustomMenuItem;
    popover: TbPopoverComponent<CustomMenuItemPanelComponent>;
    customMenuItemApplied: EventEmitter<CustomMenuItem>;
    title: string;
    customMenuItemControl: UntypedFormControl;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuItemPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuItemPanelComponent, "tb-custom-menu-item-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "scope": { "alias": "scope"; "required": false; }; "subItem": { "alias": "subItem"; "required": false; }; "menuItem": { "alias": "menuItem"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "customMenuItemApplied": "customMenuItemApplied"; }, never, never, false, never>;
}
