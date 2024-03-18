import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartAnimationSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartAnimationSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private widgetService;
    settingsExpanded: boolean;
    timeSeriesChartAnimationEasings: import("@home/components/widget/lib/chart/time-series-chart.models").TimeSeriesChartAnimationEasing[];
    disabled: boolean;
    private modelValue;
    private propagateChange;
    animationSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartAnimationSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartAnimationSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartAnimationSettingsComponent, "tb-time-series-chart-animation-settings", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
