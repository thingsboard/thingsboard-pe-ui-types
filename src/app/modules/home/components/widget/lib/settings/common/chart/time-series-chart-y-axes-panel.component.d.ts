import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { TimeSeriesChartYAxes } from '@home/components/widget/lib/chart/time-series-chart.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartYAxesPanelComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    disabled: boolean;
    advanced: boolean;
    axisRemoved: EventEmitter<string>;
    yAxesFormGroup: UntypedFormGroup;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartYAxes | undefined): void;
    validate(c: UntypedFormControl): {
        yAxes: {
            valid: boolean;
        };
    };
    axisDrop(event: CdkDragDrop<string[]>): void;
    axesFormArray(): UntypedFormArray;
    trackByAxis(index: number, axisControl: AbstractControl): any;
    removeAxis(index: number): void;
    addAxis(): void;
    private prepareAxesFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartYAxesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartYAxesPanelComponent, "tb-time-series-chart-y-axes-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "advanced": { "alias": "advanced"; "required": false; }; }, { "axisRemoved": "axisRemoved"; }, never, never, false, never>;
}
