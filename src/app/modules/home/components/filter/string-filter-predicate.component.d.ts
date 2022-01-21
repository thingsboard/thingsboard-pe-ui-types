import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { EntityKeyValueType, StringFilterPredicate, StringOperation } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class StringFilterPredicateComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    disabled: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    valueTypeEnum: typeof EntityKeyValueType;
    stringFilterPredicateFormGroup: FormGroup;
    stringOperations: string[];
    stringOperationEnum: typeof StringOperation;
    stringOperationTranslations: Map<StringOperation, string>;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(predicate: StringFilterPredicate): void;
    validate(c: any): ValidationErrors;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringFilterPredicateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringFilterPredicateComponent, "tb-string-filter-predicate", never, { "disabled": "disabled"; "allowUserDynamicSource": "allowUserDynamicSource"; "onlyUserDynamicSource": "onlyUserDynamicSource"; }, {}, never, never>;
}
