import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { AzureIotHubIntegration, IntegrationCredentialType, MqttQos } from '@shared/models/integration.models';
import { MqttVersion } from '@shared/models/mqtt.models';
import * as i0 from "@angular/core";
export declare class AzureIotHubIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    azureIotConfigForm: UntypedFormGroup;
    IntegrationCredentialType: typeof IntegrationCredentialType;
    MqttVersion: typeof MqttVersion;
    MqttQos: typeof MqttQos;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: AzureIotHubIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureIotHubIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureIotHubIntegrationFormComponent, "tb-azure-iot-hub-integration-form", never, {}, {}, never, never, false, never>;
}
