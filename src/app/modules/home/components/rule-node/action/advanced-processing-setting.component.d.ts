import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DestroyRef, OnInit } from '@angular/core';
import { AdvancedProcessingStrategy } from '@home/components/rule-node/action/timeseries-config.models';
import { AttributeAdvancedProcessingStrategy } from '@home/components/rule-node/action/attributes-config.model';
import * as i0 from "@angular/core";
export declare class AdvancedProcessingSettingComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private destroyRef;
    timeseries: boolean;
    attributes: boolean;
    latest: boolean;
    webSockets: boolean;
    calculatedFields: boolean;
    processingForm: UntypedFormGroup;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: AdvancedProcessingStrategy | AttributeAdvancedProcessingStrategy): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedProcessingSettingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedProcessingSettingComponent, "tb-advanced-processing-settings", never, { "timeseries": { "alias": "timeseries"; "required": false; }; "attributes": { "alias": "attributes"; "required": false; }; "latest": { "alias": "latest"; "required": false; }; "webSockets": { "alias": "webSockets"; "required": false; }; "calculatedFields": { "alias": "calculatedFields"; "required": false; }; }, {}, never, never, false, never>;
}
