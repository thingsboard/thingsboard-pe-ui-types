import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IdentityType, OpcKeystoreType, OpcSecurityType, OpcUaIntegration } from '@shared/models/integration.models';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import * as i0 from "@angular/core";
export declare class OpcUaIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    opcIntegrationConfigForm: UntypedFormGroup;
    identityTypes: IdentityType[];
    IdentityType: typeof IdentityType;
    IdentityTypeTranslation: Map<IdentityType, string>;
    OpcKeystoreType: OpcKeystoreType[];
    OpcSecurityType: typeof OpcSecurityType;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: OpcUaIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    private updateSecurityTypeValidation;
    private updateIdentityTypeValidation;
    validate(): ValidationErrors | null;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaIntegrationFormComponent, "tb-opc-ua-integration-form", never, {}, {}, never, never, false, never>;
}
