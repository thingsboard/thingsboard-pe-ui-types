import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { TimeSeriesChartThreshold, TimeSeriesChartYAxisId } from '@home/components/widget/lib/chart/time-series-chart.models';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { Datasource, WidgetConfig } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartThresholdsPanelComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    disabled: boolean;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    widgetConfig: WidgetConfig;
    yAxisIds: TimeSeriesChartYAxisId[];
    thresholdsFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartThreshold[] | undefined): void;
    validate(c: UntypedFormControl): {
        thresholds: {
            valid: boolean;
        };
    };
    thresholdsFormArray(): UntypedFormArray;
    trackByThreshold(index: number, thresholdControl: AbstractControl): any;
    removeThreshold(index: number): void;
    addThreshold(): void;
    private prepareThresholdsFormArray;
    private checkLatestDataKeys;
    private updateLatestDataKeys;
    private isThresholdKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartThresholdsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartThresholdsPanelComponent, "tb-time-series-chart-thresholds-panel", never, { "disabled": "disabled"; "aliasController": "aliasController"; "dataKeyCallbacks": "dataKeyCallbacks"; "datasource": "datasource"; "widgetConfig": "widgetConfig"; "yAxisIds": "yAxisIds"; }, {}, never, never, false, never>;
}
