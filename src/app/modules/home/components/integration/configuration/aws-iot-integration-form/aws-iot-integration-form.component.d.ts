import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AwsIotIntegration, IntegrationCredentialType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class AwsIotIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    awsIotIntegrationConfigForm: FormGroup;
    IntegrationCredentialType: typeof IntegrationCredentialType;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: AwsIotIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsIotIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsIotIntegrationFormComponent, "tb-aws-iot-integration-form", never, {}, {}, never, never>;
}
