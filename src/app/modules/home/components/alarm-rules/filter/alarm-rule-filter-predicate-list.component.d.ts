import { DestroyRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { ComplexOperation, EntityKeyValueType } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import { AlarmRulePredicateInfo } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import * as i0 from "@angular/core";
export declare class AlarmRuleFilterPredicateListComponent implements ControlValueAccessor, Validator {
    private fb;
    private dialog;
    private destroyRef;
    disabled: boolean;
    valueType: EntityKeyValueType;
    operation: ComplexOperation;
    arguments: Record<string, CalculatedFieldArgument>;
    argumentInUse: string;
    readonly: boolean;
    filterListFormGroup: import("@angular/forms").FormGroup<{
        predicates: FormArray<import("@angular/forms").FormControl<unknown>>;
    }>;
    valueTypeEnum: typeof EntityKeyValueType;
    complexOperationTranslations: Map<ComplexOperation, string>;
    private propagateChange;
    constructor(fb: FormBuilder, dialog: MatDialog, destroyRef: DestroyRef);
    get predicatesFormArray(): FormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(control: AbstractControl): ValidationErrors | null;
    writeValue(predicates: Array<AlarmRulePredicateInfo>): void;
    removePredicate(index: number): void;
    addPredicate(complex: boolean): void;
    private createDefaultFilterPredicate;
    private openComplexFilterDialog;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleFilterPredicateListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleFilterPredicateListComponent, "tb-alarm-rule-filter-predicate-list", never, { "disabled": { "alias": "disabled"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "arguments": { "alias": "arguments"; "required": false; }; "argumentInUse": { "alias": "argumentInUse"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, {}, never, never, false, never>;
}
