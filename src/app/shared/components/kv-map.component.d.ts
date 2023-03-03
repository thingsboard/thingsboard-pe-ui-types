import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class KeyValMapComponent extends PageComponent implements ControlValueAccessor, OnInit, Validator {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    titleText: string;
    keyPlaceholderText: string;
    valuePlaceholderText: string;
    noDataText: string;
    singlePredefinedKey: string;
    isStrokedButton: boolean;
    subscriptSizing: SubscriptSizing;
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
    validate(c: UntypedFormControl): {
        keyVals: {
            valid: boolean;
        };
    };
    get isSingleMode(): boolean;
    get isSinglePredefinedKey(): boolean;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyValMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyValMapComponent, "tb-key-val-map", never, { "disabled": "disabled"; "titleText": "titleText"; "keyPlaceholderText": "keyPlaceholderText"; "valuePlaceholderText": "valuePlaceholderText"; "noDataText": "noDataText"; "singlePredefinedKey": "singlePredefinedKey"; "isStrokedButton": "isStrokedButton"; "subscriptSizing": "subscriptSizing"; }, {}, never, never, false, never>;
}
