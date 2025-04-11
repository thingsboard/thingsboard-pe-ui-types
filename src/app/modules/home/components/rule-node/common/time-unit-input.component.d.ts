import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { TimeUnit } from '../rule-node-config.models';
import { SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class TimeUnitInputComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private destroyRef;
    labelText: string;
    required: boolean;
    requiredText: string;
    minTime: number;
    minErrorText: string;
    maxTime: number;
    maxErrorText: string;
    subscriptSizing: SubscriptSizing;
    timeUnits: TimeUnit[];
    timeUnitTranslations: Map<TimeUnit, string>;
    timeInputForm: import("@angular/forms").FormGroup<{
        time: import("@angular/forms").FormControl<number>;
        timeUnit: import("@angular/forms").FormControl<TimeUnit>;
    }>;
    private timeIntervalsInSec;
    private modelValue;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(sec: number): void;
    validate(): ValidationErrors | null;
    private updatedModel;
    private parseTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeUnitInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeUnitInputComponent, "tb-time-unit-input", never, { "labelText": { "alias": "labelText"; "required": false; }; "required": { "alias": "required"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "minTime": { "alias": "minTime"; "required": false; }; "minErrorText": { "alias": "minErrorText"; "required": false; }; "maxTime": { "alias": "maxTime"; "required": false; }; "maxErrorText": { "alias": "maxErrorText"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; }, {}, never, ["[matSuffix]"], false, never>;
}
