import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AwsSqsIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class AwsSqsIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    awsSqsIntegrationConfigForm: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: AwsSqsIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsSqsIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsSqsIntegrationFormComponent, "tb-aws-sqs-integration-form", never, {}, {}, never, never, false, never>;
}
