import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AzureEventHubIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class AzureEventHubIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    downlinkConverter: boolean;
    set isSetDownlink(value: boolean);
    get isSetDownLink(): boolean;
    azureEventHubIntegrationConfigForm: FormGroup;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: AzureEventHubIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    private downlinkConverterChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureEventHubIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureEventHubIntegrationFormComponent, "tb-azure-event-hub-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never>;
}
