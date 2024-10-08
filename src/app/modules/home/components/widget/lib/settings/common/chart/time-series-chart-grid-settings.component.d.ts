import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartGridSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartGridSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private widgetService;
    settingsExpanded: boolean;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    gridSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartGridSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartGridSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartGridSettingsComponent, "tb-time-series-chart-grid-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
