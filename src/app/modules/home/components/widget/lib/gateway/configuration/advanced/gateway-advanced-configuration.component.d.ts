import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { GatewayConfigValue } from '@home/components/widget/lib/gateway/configuration/models/gateway-configuration.models';
import * as i0 from "@angular/core";
export declare class GatewayAdvancedConfigurationComponent implements OnDestroy, ControlValueAccessor, Validators {
    private fb;
    advancedFormControl: FormControl;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: (value: unknown) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(advancedConfig: GatewayConfigValue): void;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayAdvancedConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayAdvancedConfigurationComponent, "tb-gateway-advanced-configuration", never, {}, {}, never, never, true, never>;
}
