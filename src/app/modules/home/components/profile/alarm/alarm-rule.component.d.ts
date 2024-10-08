import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { DeviceProfileAlarmRule } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class AlarmRuleComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private utils;
    private fb;
    disabled: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    deviceProfileId: EntityId;
    private modelValue;
    alarmRuleFormGroup: UntypedFormGroup;
    expandAlarmDetails: boolean;
    private propagateChange;
    constructor(dialog: MatDialog, utils: UtilsService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceProfileAlarmRule): void;
    openEditDetailsDialog($event: Event): void;
    validate(c: UntypedFormControl): {
        alarmRule: {
            valid: boolean;
        };
    };
    get alarmDetailsText(): string;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleComponent, "tb-alarm-rule", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "deviceProfileId": { "alias": "deviceProfileId"; "required": false; }; }, {}, never, never, false, never>;
}
