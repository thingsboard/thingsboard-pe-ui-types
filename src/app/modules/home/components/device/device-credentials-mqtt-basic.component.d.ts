import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DeviceCredentialMQTTBasic } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsMqttBasicComponent implements ControlValueAccessor, Validator, OnDestroy {
    fb: FormBuilder;
    disabled: boolean;
    deviceCredentialsMqttFormGroup: FormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(mqttBasic: string): void;
    updateView(value: DeviceCredentialMQTTBasic): void;
    passwordChanged(): void;
    private atLeastOne;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsMqttBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsMqttBasicComponent, "tb-device-credentials-mqtt-basic", never, { "disabled": "disabled"; }, {}, never, never>;
}
