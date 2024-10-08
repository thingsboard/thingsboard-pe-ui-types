import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceConfiguration, DeviceProfileType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    deviceProfileType: typeof DeviceProfileType;
    deviceConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    type: DeviceProfileType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceConfigurationComponent, "tb-device-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
