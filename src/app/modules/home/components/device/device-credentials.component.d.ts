import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { DeviceCredentials, DeviceCredentialsType, DeviceTransportType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsComponent implements ControlValueAccessor, OnInit, Validator, OnDestroy {
    fb: FormBuilder;
    disabled: boolean;
    private deviceTransportTypeValue;
    get deviceTransportType(): DeviceTransportType;
    set deviceTransportType(type: DeviceTransportType);
    private destroy$;
    deviceCredentialsFormGroup: FormGroup;
    deviceCredentialsType: typeof DeviceCredentialsType;
    credentialsTypes: DeviceCredentialsType[];
    credentialTypeNamesMap: Map<DeviceCredentialsType, string>;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: DeviceCredentials | null): void;
    updateView(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: FormControl): {
        deviceCredentials: {
            valid: boolean;
        };
    };
    credentialsTypeChanged(): void;
    updateValidators(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsComponent, "tb-device-credentials", never, { "disabled": "disabled"; "deviceTransportType": "deviceTransportType"; }, {}, never, never>;
}
