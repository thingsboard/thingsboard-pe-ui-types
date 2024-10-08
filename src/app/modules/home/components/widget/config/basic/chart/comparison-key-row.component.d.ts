import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DataKey, DatasourceType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class ComparisonKeyRowComponent implements ControlValueAccessor, OnInit {
    private fb;
    private cd;
    disabled: boolean;
    datasourceType: DatasourceType;
    keyFormControl: UntypedFormControl;
    keyRowFormGroup: UntypedFormGroup;
    modelValue: DataKey;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKey): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComparisonKeyRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComparisonKeyRowComponent, "tb-comparison-key-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "datasourceType": { "alias": "datasourceType"; "required": false; }; }, {}, never, never, false, never>;
}
