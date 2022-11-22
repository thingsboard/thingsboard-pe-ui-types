import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { IbmWatsonIotIntegration, IntegrationCredentialType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IbmWatsonIotIntegrationFormComponent extends IntegrationForm implements OnInit, ControlValueAccessor, Validator {
    private fb;
    isEdgeTemplate: boolean;
    ibmWatsonIotIntegrationConfigForm: FormGroup;
    IntegrationCredentialType: typeof IntegrationCredentialType;
    private ibmWatsonIotApiKeyPatternValidator;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    writeValue(value: IbmWatsonIotIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IbmWatsonIotIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IbmWatsonIotIntegrationFormComponent, "tb-ibm-watson-iot-integration-form", never, { "isEdgeTemplate": "isEdgeTemplate"; }, {}, never, never>;
}
