import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DeviceCredentialMQTTBasic } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsMqttBasicComponent implements ControlValueAccessor, Validator, OnDestroy {
    fb: UntypedFormBuilder;
    disabled: boolean;
    deviceCredentialsMqttFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(mqttBasic: string): void;
    updateView(value: DeviceCredentialMQTTBasic): void;
    passwordChanged(): void;
    private atLeastOne;
    generate(formControlName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsMqttBasicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsMqttBasicComponent, "tb-device-credentials-mqtt-basic", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
