import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DynamicValueSourceType } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class AlarmDynamicValue implements ControlValueAccessor, OnInit {
    private fb;
    dynamicValue: UntypedFormGroup;
    dynamicValueSourceTypes: DynamicValueSourceType[];
    dynamicValueSourceTypeTranslations: Map<DynamicValueSourceType, string>;
    private propagateChange;
    helpId: string;
    disabled: boolean;
    constructor(fb: UntypedFormBuilder);
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
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmDynamicValue, "tb-alarm-dynamic-value", never, { "helpId": { "alias": "helpId"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
