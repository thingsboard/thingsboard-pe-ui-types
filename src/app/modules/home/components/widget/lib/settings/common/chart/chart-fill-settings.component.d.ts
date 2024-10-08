import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ChartFillSettings, ChartFillType } from '@home/components/widget/lib/chart/chart.models';
import * as i0 from "@angular/core";
export declare class ChartFillSettingsComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    chartFillTypes: ChartFillType[];
    chartFillTypeTranslationMap: Map<ChartFillType, string>;
    ChartFillType: typeof ChartFillType;
    disabled: boolean;
    titleText: string;
    fillNoneTitle: string;
    private modelValue;
    private propagateChange;
    fillSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ChartFillSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartFillSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartFillSettingsComponent, "tb-chart-fill-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "titleText": { "alias": "titleText"; "required": false; }; "fillNoneTitle": { "alias": "fillNoneTitle"; "required": false; }; }, {}, never, never, false, never>;
}
