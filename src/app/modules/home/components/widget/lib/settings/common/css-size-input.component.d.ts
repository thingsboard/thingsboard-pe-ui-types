import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { cssUnit } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class CssSizeInputComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private destroyRef;
    get hostWidth(): string;
    get hostFlex(): string;
    disabled: boolean;
    required: boolean;
    requiredText: string;
    allowedCssUnits: cssUnit[];
    allowEmptyUnit: boolean;
    flex: boolean;
    cssSizeFormGroup: UntypedFormGroup;
    modelValue: string;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    validate(_c: UntypedFormControl): {
        cssSize: {
            valid: boolean;
        };
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CssSizeInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CssSizeInputComponent, "tb-css-size-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "allowedCssUnits": { "alias": "allowedCssUnits"; "required": false; }; "allowEmptyUnit": { "alias": "allowEmptyUnit"; "required": false; }; "flex": { "alias": "flex"; "required": false; }; }, {}, never, never, false, never>;
}
