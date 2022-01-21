import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { SnmpDeviceProfileTransportConfiguration } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export interface OidMappingConfiguration {
    isAttribute: boolean;
    key: string;
    type: string;
    method: string;
    oid: string;
}
export declare class SnmpDeviceProfileTransportConfigurationComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    private fb;
    snmpDeviceProfileTransportConfigurationFormGroup: FormGroup;
    private destroy$;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SnmpDeviceProfileTransportConfiguration | null): void;
    private updateModel;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnmpDeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnmpDeviceProfileTransportConfigurationComponent, "tb-snmp-device-profile-transport-configuration", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
