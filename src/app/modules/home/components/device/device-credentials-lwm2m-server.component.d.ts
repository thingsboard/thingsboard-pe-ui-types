import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Lwm2mSecurityType } from '@shared/models/lwm2m-security-config.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsLwm2mServerComponent implements OnDestroy, ControlValueAccessor, Validator {
    private fb;
    serverFormGroup: UntypedFormGroup;
    securityConfigLwM2MType: typeof Lwm2mSecurityType;
    securityConfigLwM2MTypes: Lwm2mSecurityType[];
    lwm2mSecurityTypeTranslationMap: Map<Lwm2mSecurityType, string>;
    publicKeyOrIdTooltipNamesMap: Map<Lwm2mSecurityType, string>;
    clientSecretKeyTooltipNamesMap: Map<Lwm2mSecurityType, string>;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(control: any): ValidationErrors | null;
    ngOnDestroy(): void;
    private updateValueFields;
    private updateValidate;
    private setValidatorsSecurity;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsLwm2mServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsLwm2mServerComponent, "tb-device-credentials-lwm2m-server", never, {}, {}, never, never, false, never>;
}
