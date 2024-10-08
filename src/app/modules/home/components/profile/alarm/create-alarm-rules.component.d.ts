import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { DeviceProfileAlarmRule } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { AlarmSeverity } from '@shared/models/alarm.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class CreateAlarmRulesComponent implements ControlValueAccessor, OnInit, Validator, OnDestroy {
    private dialog;
    private fb;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    disabled: boolean;
    deviceProfileId: EntityId;
    createAlarmRulesFormGroup: UntypedFormGroup;
    private usedSeverities;
    private destroy$;
    private propagateChange;
    constructor(dialog: MatDialog, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    createAlarmRulesFormArray(): UntypedFormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(createAlarmRules: {
        [severity: string]: DeviceProfileAlarmRule;
    }): void;
    removeCreateAlarmRule(index: number): void;
    addCreateAlarmRule(): void;
    private getFirstUnusedSeverity;
    validate(c: UntypedFormControl): {
        createAlarmRules: {
            valid: boolean;
        };
    };
    isDisabledSeverity(severity: AlarmSeverity, index: number): boolean;
    private updateUsedSeverities;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateAlarmRulesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateAlarmRulesComponent, "tb-create-alarm-rules", never, { "disabled": { "alias": "disabled"; "required": false; }; "deviceProfileId": { "alias": "deviceProfileId"; "required": false; }; }, {}, never, never, false, never>;
}
