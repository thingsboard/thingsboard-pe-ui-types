import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { EntityKeyValueType, NumericFilterPredicate, NumericOperation } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class NumericFilterPredicateComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    disabled: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    valueType: EntityKeyValueType;
    numericFilterPredicateFormGroup: UntypedFormGroup;
    valueTypeEnum: typeof EntityKeyValueType;
    numericOperations: string[];
    numericOperationEnum: typeof NumericOperation;
    numericOperationTranslations: Map<NumericOperation, string>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(predicate: NumericFilterPredicate): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericFilterPredicateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumericFilterPredicateComponent, "tb-numeric-filter-predicate", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowUserDynamicSource": { "alias": "allowUserDynamicSource"; "required": false; }; "onlyUserDynamicSource": { "alias": "onlyUserDynamicSource"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; }, {}, never, never, false, never>;
}
