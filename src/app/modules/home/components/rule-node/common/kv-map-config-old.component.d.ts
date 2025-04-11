import { DestroyRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NgControl, Validator } from '@angular/forms';
import { PageComponent } from '@shared/public-api';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class KvMapConfigOldComponent extends PageComponent implements ControlValueAccessor, OnInit, Validator {
    translate: TranslateService;
    private injector;
    private fb;
    private destroyRef;
    disabled: boolean;
    uniqueKeyValuePairValidator: boolean;
    requiredText: string;
    keyText: string;
    keyRequiredText: string;
    valText: string;
    valRequiredText: string;
    hintText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    kvListFormGroup: FormGroup;
    ngControl: NgControl;
    private propagateChange;
    constructor(translate: TranslateService, injector: Injector, fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    keyValsFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<KvMapConfigOldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KvMapConfigOldComponent, "tb-kv-map-config-old", never, { "disabled": { "alias": "disabled"; "required": false; }; "uniqueKeyValuePairValidator": { "alias": "uniqueKeyValuePairValidator"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "keyText": { "alias": "keyText"; "required": false; }; "keyRequiredText": { "alias": "keyRequiredText"; "required": false; }; "valText": { "alias": "valText"; "required": false; }; "valRequiredText": { "alias": "valRequiredText"; "required": false; }; "hintText": { "alias": "hintText"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
