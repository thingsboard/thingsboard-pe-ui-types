import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { EntityKeyValueType, FilterPredicateType, KeyFilterPredicateInfo } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class FilterPredicateComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    disabled: boolean;
    valueType: EntityKeyValueType;
    key: string;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    filterPredicateFormGroup: UntypedFormGroup;
    type: FilterPredicateType;
    filterPredicateType: typeof FilterPredicateType;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(predicate: KeyFilterPredicateInfo): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterPredicateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterPredicateComponent, "tb-filter-predicate", never, { "disabled": "disabled"; "valueType": "valueType"; "key": "key"; "displayUserParameters": "displayUserParameters"; "allowUserDynamicSource": "allowUserDynamicSource"; "onlyUserDynamicSource": "onlyUserDynamicSource"; }, {}, never, never, false>;
}
