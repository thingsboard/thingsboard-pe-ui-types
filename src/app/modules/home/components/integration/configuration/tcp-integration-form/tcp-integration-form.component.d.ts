import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { HandlerConfigurationType, TcpBinaryByteOrder, TcpHandlerConfigurationType, TcpIntegration, TcpTextMessageSeparator } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class TcpIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator {
    private fb;
    isSetDownlink: boolean;
    tcpConfigForm: FormGroup;
    HandlerConfigurationType: typeof TcpHandlerConfigurationType;
    HandlerConfigurationTypeTranslation: Map<HandlerConfigurationType, string>;
    TcpBinaryByteOrder: typeof TcpBinaryByteOrder;
    TcpTextMessageSeparator: typeof TcpTextMessageSeparator;
    private propagateChangePending;
    private propagateChange;
    constructor(fb: FormBuilder);
    writeValue(value: TcpIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    private updateModels;
    private updateHandleConfigurationField;
    static ɵfac: i0.ɵɵFactoryDeclaration<TcpIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TcpIntegrationFormComponent, "tb-tcp-integration-form", never, { "isSetDownlink": "isSetDownlink"; }, {}, never, never>;
}
