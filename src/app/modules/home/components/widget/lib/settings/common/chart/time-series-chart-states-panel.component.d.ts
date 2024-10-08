import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { TimeSeriesChartStateSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartStatesPanelComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    disabled: boolean;
    statesFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartStateSettings[] | undefined): void;
    validate(c: UntypedFormControl): {
        states: {
            valid: boolean;
        };
    };
    statesFormArray(): UntypedFormArray;
    trackByState(index: number, stateControl: AbstractControl): any;
    removeState(index: number): void;
    addState(): void;
    private prepareStatesFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartStatesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartStatesPanelComponent, "tb-time-series-chart-states-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
