import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class KeyValMapComponent extends PageComponent implements ControlValueAccessor, OnInit, Validator {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    titleText: string;
    keyPlaceholderText: string;
    valuePlaceholderText: string;
    noDataText: string;
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
    validate(c: FormControl): {
        keyVals: {
            valid: boolean;
        };
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyValMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyValMapComponent, "tb-key-val-map", never, { "disabled": "disabled"; "titleText": "titleText"; "keyPlaceholderText": "keyPlaceholderText"; "valuePlaceholderText": "valuePlaceholderText"; "noDataText": "noDataText"; }, {}, never, never>;
}
