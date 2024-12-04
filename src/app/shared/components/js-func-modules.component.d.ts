import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class JsFuncModulesComponent implements OnInit {
    private fb;
    private cd;
    modules: {
        [alias: string]: string;
    };
    popover: TbPopoverComponent<JsFuncModulesComponent>;
    modulesApplied: EventEmitter<{
        [alias: string]: string;
    }>;
    modulesFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    cancel(): void;
    applyModules(): void;
    moduleAliasUnique(alias: string, index: number): boolean;
    modulesFormArray(): UntypedFormArray;
    trackByModule(_index: number, moduleControl: AbstractControl): any;
    removeModule(index: number, emitEvent?: boolean): void;
    addModule(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsFuncModulesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsFuncModulesComponent, "tb-js-func-modules", never, { "modules": { "alias": "modules"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "modulesApplied": "modulesApplied"; }, never, never, false, never>;
}
