import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ChartAnimationSettings } from '@home/components/widget/lib/chart/chart.models';
import * as i0 from "@angular/core";
export declare class ChartAnimationSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    settingsExpanded: boolean;
    chartAnimationEasings: import("@home/components/widget/lib/chart/chart.models").ChartAnimationEasing[];
    disabled: boolean;
    private modelValue;
    private propagateChange;
    animationSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ChartAnimationSettings): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartAnimationSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartAnimationSettingsComponent, "tb-chart-animation-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
