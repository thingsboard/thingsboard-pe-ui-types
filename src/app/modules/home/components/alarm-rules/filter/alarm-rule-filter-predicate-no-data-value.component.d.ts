import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import { TimeUnit } from "@home/components/rule-node/rule-node-config.models";
import { AlarmRuleFilterPredicateType, NoDataAlarmRuleFilterPredicate } from "@shared/models/alarm-rule.models";
import * as i0 from "@angular/core";
export declare class AlarmRuleFilterPredicateNoDataValueComponent implements ControlValueAccessor, Validator, OnInit, OnChanges {
    private fb;
    private destroyRef;
    arguments: Record<string, CalculatedFieldArgument>;
    valueType: AlarmRuleFilterPredicateType;
    argumentInUse: string;
    valueTypeEnum: typeof AlarmRuleFilterPredicateType;
    filterPredicateValueNoDataFormGroup: import("@angular/forms").FormGroup<{
        type: import("@angular/forms").FormControl<string>;
        unit: import("@angular/forms").FormControl<TimeUnit>;
        duration: import("@angular/forms").FormGroup<{
            staticValue: import("@angular/forms").FormControl<number>;
            dynamicValueArgument: import("@angular/forms").FormControl<string>;
        }>;
    }>;
    timeUnits: TimeUnit[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    dynamicModeControl: import("@angular/forms").FormControl<boolean>;
    argumentsList: Array<string>;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    private updateValueModeValidators;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    validate(): ValidationErrors | null;
    writeValue(predicateValue: NoDataAlarmRuleFilterPredicate): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleFilterPredicateNoDataValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleFilterPredicateNoDataValueComponent, "tb-alarm-rule-filter-predicate-no-data-value", never, { "arguments": { "alias": "arguments"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "argumentInUse": { "alias": "argumentInUse"; "required": false; }; }, {}, never, never, false, never>;
}
