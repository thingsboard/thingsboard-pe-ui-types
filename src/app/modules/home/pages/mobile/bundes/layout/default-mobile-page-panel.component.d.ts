import { EventEmitter, OnInit } from '@angular/core';
import { DefaultMobilePage } from '@shared/models/mobile-app.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DefaultMobilePagePanelComponent implements OnInit {
    private fb;
    disabled: boolean;
    pageItem: DefaultMobilePage;
    popover: TbPopoverComponent<DefaultMobilePagePanelComponent>;
    defaultMobilePageApplied: EventEmitter<DefaultMobilePage>;
    mobilePageFormGroup: import("@angular/forms").FormGroup<{
        visible: import("@angular/forms").FormControl<boolean>;
        icon: import("@angular/forms").FormControl<string>;
        label: import("@angular/forms").FormControl<string>;
    }>;
    isCleanupEnabled: boolean;
    defaultItemName: string;
    private defaultMobilePages;
    private destroyRef;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    apply(): void;
    cleanup(): void;
    private updateCleanupState;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultMobilePagePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultMobilePagePanelComponent, "tb-default-mobile-page-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "pageItem": { "alias": "pageItem"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "defaultMobilePageApplied": "defaultMobilePageApplied"; }, never, never, false, never>;
}
