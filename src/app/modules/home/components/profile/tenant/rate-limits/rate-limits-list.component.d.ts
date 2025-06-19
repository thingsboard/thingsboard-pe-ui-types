import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { RateLimits } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsListComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private destroyRef;
    disabled: boolean;
    rateLimitsListFormGroup: FormGroup;
    rateLimitsArray: Array<RateLimits>;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    removeRateLimits(index: number): void;
    addRateLimits(): void;
    get rateLimitsFormArray(): FormArray<FormGroup>;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(rateLimits: string): void;
    private updateView;
    private uniqTimeRequired;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsListComponent, "tb-rate-limits-list", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
