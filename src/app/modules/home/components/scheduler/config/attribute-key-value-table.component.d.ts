import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class AttributeKeyValueTableComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    titleText: string;
    requiredPrompt: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    kvListFormGroup: FormGroup;
    private propagateChange;
    private valueChangeSubscription;
    constructor(store: Store<AppState>, fb: FormBuilder);
    ngOnInit(): void;
    keyValsFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(keyValMap: {
        [key: string]: string;
    }): void;
    removeKeyVal(index: number): void;
    addKeyVal(): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributeKeyValueTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributeKeyValueTableComponent, "tb-attribute-key-value-table", never, { "disabled": "disabled"; "titleText": "titleText"; "requiredPrompt": "requiredPrompt"; "required": "required"; }, {}, never, never>;
}
export declare function attributeKeyValueValidator(required: boolean): ValidatorFn;
