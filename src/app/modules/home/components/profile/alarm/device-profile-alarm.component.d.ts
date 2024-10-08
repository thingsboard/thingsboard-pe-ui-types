import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { DeviceProfileAlarm } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { EntityId } from '@shared/models/id/entity-id';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class DeviceProfileAlarmComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private utils;
    private fb;
    disabled: boolean;
    removeAlarm: EventEmitter<any>;
    separatorKeysCodes: number[];
    expanded: boolean;
    deviceProfileId: EntityId;
    private modelValue;
    alarmFormGroup: UntypedFormGroup;
    private propagateChange;
    private propagateChangePending;
    constructor(dialog: MatDialog, utils: UtilsService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceProfileAlarm): void;
    addClearAlarmRule(): void;
    removeClearAlarmRule(): void;
    validate(c: UntypedFormControl): {
        alarm: {
            valid: boolean;
        };
    };
    removeRelationType(key: string): void;
    addRelationType(event: MatChipInputEvent): void;
    get alarmTypeTitle(): string;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileAlarmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileAlarmComponent, "tb-device-profile-alarm", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "deviceProfileId": { "alias": "deviceProfileId"; "required": false; }; }, { "removeAlarm": "removeAlarm"; }, never, never, false, never>;
}
