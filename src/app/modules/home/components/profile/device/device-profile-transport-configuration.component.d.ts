import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceProfileTransportConfiguration, DeviceTransportType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileTransportConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    deviceTransportType: typeof DeviceTransportType;
    deviceProfileTransportConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    isAdd: boolean;
    transportType: DeviceTransportType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceProfileTransportConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileTransportConfigurationComponent, "tb-device-profile-transport-configuration", never, { "required": "required"; "disabled": "disabled"; "isAdd": "isAdd"; }, {}, never, never, false>;
}
