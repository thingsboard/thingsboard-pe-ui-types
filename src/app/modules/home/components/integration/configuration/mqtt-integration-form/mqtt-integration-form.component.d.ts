import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { IntegrationCredentialType, MqttIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class MqttIntegrationFormComponent extends IntegrationForm implements OnInit, ControlValueAccessor, Validator {
    private fb;
    isEdgeTemplate: boolean;
    mqttIntegrationConfigForm: FormGroup;
    IntegrationCredentialType: typeof IntegrationCredentialType;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    writeValue(value: MqttIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttIntegrationFormComponent, "tb-mqtt-integration-form", never, { "isEdgeTemplate": "isEdgeTemplate"; }, {}, never, never>;
}
