import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { DefaultTenantProfileConfiguration, FormControlsFrom } from '@shared/models/tenant.model';
import { RateLimitsType } from './rate-limits/rate-limits.models';
import * as i0 from "@angular/core";
export declare class DefaultTenantProfileConfigurationComponent implements ControlValueAccessor {
    private fb;
    tenantProfileConfigurationForm: FormGroup<FormControlsFrom<DefaultTenantProfileConfiguration>>;
    required: boolean;
    disabled: boolean;
    rateLimitsType: typeof RateLimitsType;
    private propagateChange;
    constructor(fb: FormBuilder);
    private maxSmsValidation;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DefaultTenantProfileConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultTenantProfileConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultTenantProfileConfigurationComponent, "tb-default-tenant-profile-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
