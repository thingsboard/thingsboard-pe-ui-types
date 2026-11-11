import { DestroyRef } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, UntypedFormArray, ValidationErrors, Validator } from '@angular/forms';
import { AlarmSeverity } from '@shared/models/alarm.models';
import { AlarmRule } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class CreateCfAlarmRulesComponent implements ControlValueAccessor, Validator {
    private fb;
    private destroyRef;
    disabled: boolean;
    arguments: Record<string, CalculatedFieldArgument>;
    testScript: (expression: string) => Observable<string>;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    AlarmSeverityNotificationColors: Map<AlarmSeverity, string>;
    createAlarmRulesFormGroup: import("@angular/forms").FormGroup<{
        createAlarmRules: FormArray<import("@angular/forms").FormControl<{
            severity: AlarmSeverity;
            alarmRule: AlarmRule;
        }>>;
    }>;
    private usedSeverities;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    createAlarmRulesFormArray(): UntypedFormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(createAlarmRules: Record<AlarmSeverity, AlarmRule>): void;
    removeCreateAlarmRule(index: number): void;
    addCreateAlarmRule(): void;
    private getFirstUnusedSeverity;
    validate(): ValidationErrors | null;
    isDisabledSeverity(severity: AlarmSeverity, index: number): boolean;
    private updateUsedSeverities;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateCfAlarmRulesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateCfAlarmRulesComponent, "tb-create-cf-alarm-rules", never, { "disabled": { "alias": "disabled"; "required": false; }; "arguments": { "alias": "arguments"; "required": false; }; "testScript": { "alias": "testScript"; "required": true; }; }, {}, never, never, false, never>;
}
