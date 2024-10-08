import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DataKey, DatasourceType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class ComparisonKeysTableComponent implements ControlValueAccessor, OnInit {
    private fb;
    disabled: boolean;
    datasourceType: DatasourceType;
    keysListFormGroup: UntypedFormGroup;
    get noKeys(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKey[] | undefined): void;
    keysFormArray(): UntypedFormArray;
    trackByKey(_index: number, keyControl: AbstractControl): any;
    private prepareKeysFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComparisonKeysTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComparisonKeysTableComponent, "tb-comparison-keys-table", never, { "disabled": { "alias": "disabled"; "required": false; }; "datasourceType": { "alias": "datasourceType"; "required": false; }; }, {}, never, never, false, never>;
}
