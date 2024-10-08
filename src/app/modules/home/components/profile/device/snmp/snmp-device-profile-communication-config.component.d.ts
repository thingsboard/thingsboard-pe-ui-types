import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validator } from '@angular/forms';
import { SnmpCommunicationConfig, SnmpSpecType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class SnmpDeviceProfileCommunicationConfigComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    private fb;
    snmpSpecTypes: SnmpSpecType[];
    snmpSpecTypeTranslationMap: Map<SnmpSpecType, string>;
    deviceProfileCommunicationConfig: UntypedFormGroup;
    disabled: boolean;
    private usedSpecType;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get communicationConfigFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(communicationConfig: SnmpCommunicationConfig[]): void;
    validate(): {
        communicationConfig: boolean;
    };
    removeCommunicationConfig(index: number): void;
    get isAddEnabled(): boolean;
    addCommunicationConfig(): void;
    private getFirstUnusedSeverity;
    isDisabledSeverity(type: SnmpSpecType, index: number): boolean;
    isShowFrequency(type: SnmpSpecType): boolean;
    private updateUsedSpecType;
    private createdFormGroup;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnmpDeviceProfileCommunicationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnmpDeviceProfileCommunicationConfigComponent, "tb-snmp-device-profile-communication-config", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
