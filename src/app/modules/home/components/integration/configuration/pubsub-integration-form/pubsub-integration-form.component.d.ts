import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { PubSubIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class PubSubIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    pubSubIntegrationConfigForm: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: PubSubIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<PubSubIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PubSubIntegrationFormComponent, "tb-pubsub-integration-form", never, {}, {}, never, never, false>;
}
