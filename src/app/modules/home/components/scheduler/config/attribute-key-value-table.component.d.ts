import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidatorFn } from '@angular/forms';
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
    kvListFormGroup: UntypedFormGroup;
    private propagateChange;
    private valueChangeSubscription;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    keyValsFormArray(): UntypedFormArray;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributeKeyValueTableComponent, "tb-attribute-key-value-table", never, { "disabled": "disabled"; "titleText": "titleText"; "requiredPrompt": "requiredPrompt"; "required": "required"; }, {}, never, never, false>;
}
export declare function attributeKeyValueValidator(required: boolean): ValidatorFn;
