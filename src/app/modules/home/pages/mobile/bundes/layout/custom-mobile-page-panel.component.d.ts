import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomMobilePage } from '@shared/models/mobile-app.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class CustomMobilePagePanelComponent implements OnInit {
    private fb;
    disabled: boolean;
    pageItem: CustomMobilePage;
    popover: TbPopoverComponent<CustomMobilePagePanelComponent>;
    customMobilePageApplied: EventEmitter<CustomMobilePage>;
    mobilePageControl: import("@angular/forms").FormControl<CustomMobilePage>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMobilePagePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMobilePagePanelComponent, "tb-custom-menu-item-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "pageItem": { "alias": "pageItem"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "customMobilePageApplied": "customMobilePageApplied"; }, never, never, false, never>;
}
