import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartNoAggregationBarWidthSettings, TimeSeriesChartNoAggregationBarWidthStrategy } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesNoAggregationBarWidthSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    TimeSeriesChartNoAggregationBarWidthStrategy: typeof TimeSeriesChartNoAggregationBarWidthStrategy;
    timeSeriesChartNoAggregationBarWidthStrategies: TimeSeriesChartNoAggregationBarWidthStrategy[];
    timeSeriesChartNoAggregationBarWidthStrategyTranslations: Map<TimeSeriesChartNoAggregationBarWidthStrategy, string>;
    disabled: boolean;
    stroked: boolean;
    private modelValue;
    private propagateChange;
    barWidthSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartNoAggregationBarWidthSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesNoAggregationBarWidthSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesNoAggregationBarWidthSettingsComponent, "tb-time-series-no-aggregation-bar-width-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "stroked": { "alias": "stroked"; "required": false; }; }, {}, never, never, false, never>;
}
