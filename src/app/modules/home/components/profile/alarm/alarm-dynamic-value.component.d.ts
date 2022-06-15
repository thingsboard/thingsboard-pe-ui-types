import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicValueSourceType } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class AlarmDynamicValue implements ControlValueAccessor, OnInit {
    private fb;
    dynamicValue: FormGroup;
    dynamicValueSourceTypes: DynamicValueSourceType[];
    dynamicValueSourceTypeTranslations: Map<DynamicValueSourceType, string>;
    private propagateChange;
    helpId: string;
    disabled: boolean;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(dynamicValue: {
        sourceType: string;
        sourceAttribute: string;
    }): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmDynamicValue, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmDynamicValue, "tb-alarm-dynamic-value", never, { "helpId": "helpId"; "disabled": "disabled"; }, {}, never, never>;
}
