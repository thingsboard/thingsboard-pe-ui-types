import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Lwm2mSecurityType } from '@shared/models/lwm2m-security-config.models';
import * as i0 from "@angular/core";
export declare class DeviceCredentialsLwm2mComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    lwm2mConfigFormGroup: UntypedFormGroup;
    securityConfigLwM2MType: typeof Lwm2mSecurityType;
    securityConfigLwM2MTypes: string[];
    credentialTypeLwM2MNamesMap: Map<Lwm2mSecurityType, string>;
    clientKeyTooltipNamesMap: Map<Lwm2mSecurityType, string>;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(obj: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    ngOnDestroy(): void;
    private initClientSecurityConfig;
    private securityConfigClientModeChanged;
    private securityConfigClientUpdateValidators;
    private setValidatorsNoSecX509;
    private setValidatorsPskRpk;
    private initLwm2mConfigForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceCredentialsLwm2mComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceCredentialsLwm2mComponent, "tb-device-credentials-lwm2m", never, {}, {}, never, never, false, never>;
}
