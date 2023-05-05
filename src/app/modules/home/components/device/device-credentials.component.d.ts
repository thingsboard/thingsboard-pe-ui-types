import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { DeviceCredentials, DeviceCredentialsType, DeviceTransportType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsComponent implements ControlValueAccessor, OnInit, Validator, OnDestroy {
    fb: UntypedFormBuilder;
    disabled: boolean;
    private deviceTransportTypeValue;
    get deviceTransportType(): DeviceTransportType;
    set deviceTransportType(type: DeviceTransportType);
    private destroy$;
    deviceCredentialsFormGroup: UntypedFormGroup;
    deviceCredentialsType: typeof DeviceCredentialsType;
    credentialsTypes: DeviceCredentialsType[];
    credentialTypeNamesMap: Map<DeviceCredentialsType, string>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: DeviceCredentials | null): void;
    updateView(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        deviceCredentials: {
            valid: boolean;
        };
    };
    credentialsTypeChanged(): void;
    updateValidators(): void;
    generate(formControlName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsComponent, "tb-device-credentials", never, { "disabled": "disabled"; "deviceTransportType": "deviceTransportType"; }, {}, never, never, false, never>;
}
