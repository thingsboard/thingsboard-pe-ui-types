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
    initAccessToken: boolean;
    private destroy$;
    deviceCredentialsFormGroup: FormGroup;
    deviceCredentialsType: typeof DeviceCredentialsType;
    credentialsTypes: DeviceCredentialsType[];
    credentialTypeNamesMap: Map<DeviceCredentialsType, string>;
    private propagateChange;
    private propagateChangePending;
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
    credentialsTypeChanged(type: DeviceCredentialsType): void;
    updateValidators(): void;
    generate(formControlName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsComponent, "tb-device-credentials", never, { "disabled": { "alias": "disabled"; "required": false; }; "deviceTransportType": { "alias": "deviceTransportType"; "required": false; }; "initAccessToken": { "alias": "initAccessToken"; "required": false; }; }, {}, never, never, false, never>;
}
