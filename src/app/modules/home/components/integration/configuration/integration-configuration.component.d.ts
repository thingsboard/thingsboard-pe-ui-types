import { OnDestroy, TemplateRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IntegrationConfigurationComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    integrationConfigurationForm: UntypedFormGroup;
    integrationTypes: typeof IntegrationType;
    executeRemotelyTemplate: TemplateRef<any>;
    genericAdditionalInfoTemplate: TemplateRef<any>;
    isSetDownlink: boolean;
    routingKey: string;
    integrationType: IntegrationType;
    isEdgeTemplate: boolean;
    allowLocalNetwork: boolean;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    private updateModel;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationConfigurationComponent, "tb-integration-configuration", never, { "executeRemotelyTemplate": { "alias": "executeRemotelyTemplate"; "required": false; }; "genericAdditionalInfoTemplate": { "alias": "genericAdditionalInfoTemplate"; "required": false; }; "isSetDownlink": { "alias": "isSetDownlink"; "required": false; }; "routingKey": { "alias": "routingKey"; "required": false; }; "integrationType": { "alias": "integrationType"; "required": false; }; "isEdgeTemplate": { "alias": "isEdgeTemplate"; "required": false; }; "allowLocalNetwork": { "alias": "allowLocalNetwork"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
