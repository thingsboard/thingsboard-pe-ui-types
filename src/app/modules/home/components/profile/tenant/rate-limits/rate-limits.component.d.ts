import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RateLimits, RateLimitsType } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private fb;
    disabled: boolean;
    type: RateLimitsType;
    label: string;
    rateLimitsFormGroup: UntypedFormGroup;
    get rateLimitsArray(): Array<RateLimits>;
    private modelValue;
    private propagateChange;
    constructor(dialog: MatDialog, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    validate(c: UntypedFormControl): any;
    onClick($event: Event): void;
    private updateRateLimitsInfo;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsComponent, "tb-rate-limits", never, { "disabled": { "alias": "disabled"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, never, false, never>;
}
