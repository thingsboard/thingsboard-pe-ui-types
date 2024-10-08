import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceProfileConfiguration, DeviceProfileType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileConfigurationComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private store;
    private fb;
    deviceProfileType: typeof DeviceProfileType;
    deviceProfileConfigurationFormGroup: UntypedFormGroup;
    private destroy$;
    disabled: boolean;
    type: DeviceProfileType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceProfileConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileConfigurationComponent, "tb-device-profile-configuration", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
