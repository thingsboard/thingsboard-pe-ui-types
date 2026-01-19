import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlarmRule, AlarmRuleCondition } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class CfAlarmRuleComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private fb;
    private destroyRef;
    disabled: boolean;
    required: boolean;
    arguments: Record<string, CalculatedFieldArgument>;
    isClearCondition: boolean;
    testScript: (expression: string) => Observable<string>;
    private modelValue;
    alarmRuleFormGroup: import("@angular/forms").FormGroup<{
        condition: import("@angular/forms").FormControl<AlarmRuleCondition>;
        alarmDetails: import("@angular/forms").FormControl<any>;
        dashboardId: import("@angular/forms").FormControl<any>;
    }>;
    private propagateChange;
    constructor(dialog: MatDialog, fb: FormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AlarmRule): void;
    openEditDetailsDialog($event: Event): void;
    validate(): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CfAlarmRuleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CfAlarmRuleComponent, "tb-cf-alarm-rule", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "arguments": { "alias": "arguments"; "required": false; }; "isClearCondition": { "alias": "isClearCondition"; "required": false; }; "testScript": { "alias": "testScript"; "required": true; }; }, {}, never, never, false, never>;
}
