import { DestroyRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NgControl, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class KvMapConfigComponent implements ControlValueAccessor, OnInit, Validator {
    private injector;
    private fb;
    private destroyRef;
    private propagateChange;
    kvListFormGroup: FormGroup;
    ngControl: NgControl;
    disabled: boolean;
    uniqueKeyValuePairValidator: boolean;
    labelText: string;
    requiredText: string;
    keyText: string;
    keyRequiredText: string;
    valText: string;
    valRequiredText: string;
    hintText: string;
    popupHelpLink: string;
    required: boolean;
    constructor(injector: Injector, fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    keyValsFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private duplicateValuesValidator;
    private oneMapRequiredValidator;
    private propagateNestedErrors;
    writeValue(keyValMap: {
        [key: string]: string;
    }): void;
    removeKeyVal(index: number): void;
    addKeyVal(): void;
    validate(): {
        kvMapRequired: boolean;
        kvFieldsRequired?: undefined;
        uniqueKeyValuePair?: undefined;
    } | {
        kvFieldsRequired: boolean;
        kvMapRequired?: undefined;
        uniqueKeyValuePair?: undefined;
    } | {
        uniqueKeyValuePair: boolean;
        kvMapRequired?: undefined;
        kvFieldsRequired?: undefined;
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<KvMapConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KvMapConfigComponent, "tb-kv-map-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "uniqueKeyValuePairValidator": { "alias": "uniqueKeyValuePairValidator"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "keyText": { "alias": "keyText"; "required": false; }; "keyRequiredText": { "alias": "keyRequiredText"; "required": false; }; "valText": { "alias": "valText"; "required": false; }; "valRequiredText": { "alias": "valRequiredText"; "required": false; }; "hintText": { "alias": "hintText"; "required": false; }; "popupHelpLink": { "alias": "popupHelpLink"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
