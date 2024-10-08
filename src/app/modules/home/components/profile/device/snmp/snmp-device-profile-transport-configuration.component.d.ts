import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
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
    snmpDeviceProfileTransportConfigurationFormGroup: UntypedFormGroup;
    private destroy$;
    disabled: boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SnmpDeviceProfileTransportConfiguration | null): void;
    private updateModel;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnmpDeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnmpDeviceProfileTransportConfigurationComponent, "tb-snmp-device-profile-transport-configuration", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
