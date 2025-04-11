import { DestroyRef, Injector, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormGroup, NgControl, Validator } from '@angular/forms';
import { PageComponent } from '@shared/public-api';
import { TranslateService } from '@ngx-translate/core';
import { SvMapOption } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class SvMapConfigComponent extends PageComponent implements ControlValueAccessor, OnInit, Validator {
    translate: TranslateService;
    private injector;
    private fb;
    private destroyRef;
    private propagateChange;
    svListFormGroup: FormGroup;
    ngControl: NgControl;
    selectOptions: SvMapOption[];
    disabled: boolean;
    labelText: string;
    requiredText: string;
    targetKeyPrefix: string;
    selectText: string;
    selectRequiredText: string;
    valText: string;
    valRequiredText: string;
    hintText: string;
    popupHelpLink: string;
    required: boolean;
    constructor(translate: TranslateService, injector: Injector, fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    keyValsFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private oneMapRequiredValidator;
    private propagateNestedErrors;
    writeValue(keyValMap: {
        [key: string]: string;
    }): void;
    filterSelectOptions(keyValControl?: AbstractControl): any[];
    removeKeyVal(index: number): void;
    addKeyVal(): void;
    private keyChangeSubscribe;
    validate(): {
        svMapRequired: boolean;
        svFieldsRequired?: undefined;
    } | {
        svFieldsRequired: boolean;
        svMapRequired?: undefined;
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvMapConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SvMapConfigComponent, "tb-sv-map-config", never, { "selectOptions": { "alias": "selectOptions"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "labelText": { "alias": "labelText"; "required": false; }; "requiredText": { "alias": "requiredText"; "required": false; }; "targetKeyPrefix": { "alias": "targetKeyPrefix"; "required": false; }; "selectText": { "alias": "selectText"; "required": false; }; "selectRequiredText": { "alias": "selectRequiredText"; "required": false; }; "valText": { "alias": "valText"; "required": false; }; "valRequiredText": { "alias": "valRequiredText"; "required": false; }; "hintText": { "alias": "hintText"; "required": false; }; "popupHelpLink": { "alias": "popupHelpLink"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
