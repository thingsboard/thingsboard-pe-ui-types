import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { RabbitMqIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class RabbitMqIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    rabbitMqIntegrationConfigForm: FormGroup;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: RabbitMqIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RabbitMqIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RabbitMqIntegrationFormComponent, "tb-rabbit-mq-integration-form", never, {}, {}, never, never>;
}
