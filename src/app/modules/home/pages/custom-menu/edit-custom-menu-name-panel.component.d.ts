import { EventEmitter, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { CustomMenuService } from '@core/http/custom-menu.service';
import * as i0 from "@angular/core";
export declare class EditCustomMenuNamePanelComponent implements OnInit {
    private fb;
    private customMenuService;
    customMenuId: string;
    name: string;
    popover: TbPopoverComponent<EditCustomMenuNamePanelComponent>;
    nameApplied: EventEmitter<string>;
    nameFormControl: import("@angular/forms").UntypedFormControl;
    constructor(fb: UntypedFormBuilder, customMenuService: CustomMenuService);
    ngOnInit(): void;
    cancel(): void;
    applyName(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditCustomMenuNamePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditCustomMenuNamePanelComponent, "tb-edit-custom-menu-name-panel", never, { "customMenuId": "customMenuId"; "name": "name"; "popover": "popover"; }, { "nameApplied": "nameApplied"; }, never, never, false, never>;
}
