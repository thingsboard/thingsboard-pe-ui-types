import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AwsSnsSmsProviderConfiguration, BindTypes, CodingSchemes, NumberingPlanIdentification, TypeOfNumber } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class SmppSmsProviderConfigurationComponent implements ControlValueAccessor, OnInit {
    private fb;
    constructor(fb: UntypedFormBuilder);
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    smppSmsProviderConfigurationFormGroup: UntypedFormGroup;
    smppVersions: {
        value: number;
    }[];
    bindTypes: string[];
    bindTypesTranslation: Map<BindTypes, string>;
    typeOfNumber: string[];
    typeOfNumberMap: Map<TypeOfNumber, import("@shared/models/settings.models").TypeDescriptor>;
    numberingPlanIdentification: string[];
    numberingPlanIdentificationMap: Map<NumberingPlanIdentification, import("@shared/models/settings.models").TypeDescriptor>;
    codingSchemes: string[];
    codingSchemesMap: Map<CodingSchemes, import("@shared/models/settings.models").TypeDescriptor>;
    private propagateChange;
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AwsSnsSmsProviderConfiguration | null): void;
    private updateValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmppSmsProviderConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SmppSmsProviderConfigurationComponent, "tb-smpp-sms-provider-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
