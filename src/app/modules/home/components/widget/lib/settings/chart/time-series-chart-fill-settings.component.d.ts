import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SeriesFillSettings, SeriesFillType } from '@home/components/widget/lib/chart/time-series-chart.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartFillSettingsComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    seriesFillTypes: SeriesFillType[];
    seriesFillTypeTranslationMap: Map<SeriesFillType, string>;
    SeriesFillType: typeof SeriesFillType;
    disabled: boolean;
    title: string;
    fillNoneTitle: string;
    private modelValue;
    private propagateChange;
    fillSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SeriesFillSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartFillSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartFillSettingsComponent, "tb-time-series-chart-fill-settings", never, { "disabled": "disabled"; "title": "title"; "fillNoneTitle": "fillNoneTitle"; }, {}, never, never, false, never>;
}
