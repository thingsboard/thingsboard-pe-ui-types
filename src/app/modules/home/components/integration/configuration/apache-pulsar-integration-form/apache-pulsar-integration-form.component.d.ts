import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { ApachePulsarIntegration, IntegrationCredentialType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class ApachePulsarIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    apachePulsarIntegrationConfigForm: FormGroup;
    IntegrationCredentialType: typeof IntegrationCredentialType;
    private propagateChangePending;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: ApachePulsarIntegration): void;
    private updateModels;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApachePulsarIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApachePulsarIntegrationFormComponent, "tb-apache-pulsar-integration-form", never, {}, {}, never, never>;
}
