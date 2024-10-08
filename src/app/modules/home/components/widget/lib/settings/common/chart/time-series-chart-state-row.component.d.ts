import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartStateSettings, TimeSeriesChartStateSourceType } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartStateRowComponent implements ControlValueAccessor, OnInit {
    private fb;
    private cd;
    TimeSeriesChartStateSourceType: typeof TimeSeriesChartStateSourceType;
    timeSeriesStateSourceTypes: TimeSeriesChartStateSourceType[];
    timeSeriesStateSourceTypeTranslations: Map<TimeSeriesChartStateSourceType, string>;
    disabled: boolean;
    stateRemoved: EventEmitter<any>;
    stateFormGroup: UntypedFormGroup;
    modelValue: TimeSeriesChartStateSettings;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartStateSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartStateRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartStateRowComponent, "tb-time-series-chart-state-row", never, { "disabled": { "alias": "disabled"; "required": false; }; }, { "stateRemoved": "stateRemoved"; }, never, never, false, never>;
}
