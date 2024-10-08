import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { RateLimits } from './rate-limits.models';
import * as i0 from "@angular/core";
export declare class RateLimitsListComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    disabled: boolean;
    rateLimitsListFormGroup: UntypedFormGroup;
    rateLimitsArray: Array<RateLimits>;
    private valueChangeSubscription;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    removeRateLimits(index: number): void;
    addRateLimits(): void;
    get rateLimitsFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(rateLimits: string): void;
    updateView(rateLimitsArray: Array<RateLimits>): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateLimitsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateLimitsListComponent, "tb-rate-limits-list", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
