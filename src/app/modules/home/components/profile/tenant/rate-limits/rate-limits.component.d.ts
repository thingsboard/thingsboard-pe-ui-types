import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RateLimits, RateLimitsType } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private fb;
    disabled: boolean;
    type: RateLimitsType;
    label: string;
    rateLimitsFormGroup: FormGroup;
    get rateLimitsArray(): Array<RateLimits>;
    private modelValue;
    private propagateChange;
    constructor(dialog: MatDialog, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    validate(c: FormControl): any;
    onClick($event: Event): void;
    private updateRateLimitsInfo;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsComponent, "tb-rate-limits", never, { "disabled": "disabled"; "type": "type"; }, {}, never, never>;
}
