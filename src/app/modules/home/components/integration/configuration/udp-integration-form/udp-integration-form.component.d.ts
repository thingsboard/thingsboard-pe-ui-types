import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { HandlerConfigurationType, UpdIntegration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class UdpIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    isSetDownlink: boolean;
    updConfigForm: UntypedFormGroup;
    HandlerConfigurationType: {
        HEX: import("@shared/models/integration.models").UpdHandlerConfigurationType.HEX;
        TEXT: import("@shared/models/integration.models").TcpHandlerConfigurationType.TEXT;
        BINARY: import("@shared/models/integration.models").TcpHandlerConfigurationType.BINARY;
        JSON: import("@shared/models/integration.models").TcpHandlerConfigurationType.JSON;
    };
    HandlerConfigurationTypeTranslation: Map<HandlerConfigurationType, string>;
    private propagateChangePending;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    writeValue(value: UpdIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    private updateModels;
    private updateHandleConfigurationField;
    static ɵfac: i0.ɵɵFactoryDeclaration<UdpIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UdpIntegrationFormComponent, "tb-udp-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never, false, never>;
}
