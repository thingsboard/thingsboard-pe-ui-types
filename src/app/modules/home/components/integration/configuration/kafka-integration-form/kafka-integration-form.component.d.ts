import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { KafkaIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class KafkaIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    kafkaIntegrationConfigForm: FormGroup;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: KafkaIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KafkaIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KafkaIntegrationFormComponent, "tb-kafka-integration-form", never, {}, {}, never, never>;
}
