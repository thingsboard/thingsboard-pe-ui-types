import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AzureServicesBusIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class AzureServicesBusIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    downlinkConverter: boolean;
    set isSetDownlink(value: boolean);
    get isSetDownLink(): boolean;
    azureServicesBusIntegrationConfigForm: import("@angular/forms").FormGroup<{
        connectionString: import("@angular/forms").FormControl<string>;
        topicName: import("@angular/forms").FormControl<string>;
        subName: import("@angular/forms").FormControl<string>;
        downlinkConnectionString: import("@angular/forms").FormControl<string>;
        downlinkTopicName: import("@angular/forms").FormControl<string>;
    }>;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: AzureServicesBusIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    private downlinkConverterChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureServicesBusIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureServicesBusIntegrationFormComponent, "tb-azure-services-bus-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never, false, never>;
}
