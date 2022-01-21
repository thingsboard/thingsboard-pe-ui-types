import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceProfileAlarm } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class DeviceProfileAlarmsComponent implements ControlValueAccessor, OnInit, Validator {
    private store;
    private fb;
    private dialog;
    deviceProfileAlarmsFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    deviceProfileId: EntityId;
    private valueChangeSubscription;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    alarmsFormArray(): FormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(alarms: Array<DeviceProfileAlarm> | null): void;
    trackByAlarm(index: number, alarmControl: AbstractControl): string;
    removeAlarm(index: number): void;
    addAlarm(): void;
    validate(c: FormControl): {
        alarms: {
            valid: boolean;
        };
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileAlarmsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileAlarmsComponent, "tb-device-profile-alarms", never, { "required": "required"; "disabled": "disabled"; "deviceProfileId": "deviceProfileId"; }, {}, never, never>;
}
