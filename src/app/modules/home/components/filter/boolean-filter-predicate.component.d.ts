import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { BooleanFilterPredicate, BooleanOperation, EntityKeyValueType } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class BooleanFilterPredicateComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    disabled: boolean;
    allowUserDynamicSource: boolean;
    onlyUserDynamicSource: boolean;
    valueTypeEnum: typeof EntityKeyValueType;
    booleanFilterPredicateFormGroup: UntypedFormGroup;
    booleanOperations: string[];
    booleanOperationEnum: typeof BooleanOperation;
    booleanOperationTranslations: Map<BooleanOperation, string>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(predicate: BooleanFilterPredicate): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanFilterPredicateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanFilterPredicateComponent, "tb-boolean-filter-predicate", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowUserDynamicSource": { "alias": "allowUserDynamicSource"; "required": false; }; "onlyUserDynamicSource": { "alias": "onlyUserDynamicSource"; "required": false; }; }, {}, never, never, false, never>;
}
