import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { TuyaEnv, TuyaIntegration, TuyaRegion } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class TuyaIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    tuyaIntegrationConfigForm: UntypedFormGroup;
    tuyaRegion: typeof TuyaRegion;
    tuyaEnv: typeof TuyaEnv;
    TuyaRegionTranslation: Map<TuyaRegion, string>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: TuyaIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuyaIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuyaIntegrationFormComponent, "tb-tuya-integration-form", never, {}, {}, never, never, false>;
}
