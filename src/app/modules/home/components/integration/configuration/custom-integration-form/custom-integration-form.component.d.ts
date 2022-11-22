import { ContentType } from '@shared/models/constants';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { CustomIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class CustomIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    customIntegrationConfigForm: FormGroup;
    contentType: typeof ContentType;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: CustomIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomIntegrationFormComponent, "tb-custom-integration-form", never, {}, {}, never, never>;
}
