import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import { CoapIntegration, CoapSecurityMode } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class CoapIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private store;
    private translate;
    routingKey: any;
    coapSecurityModes: string[];
    coapSecurityModeTranslations: Map<CoapSecurityMode, string>;
    coapIntegrationConfigForm: UntypedFormGroup;
    private propagateChangePending;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, store: Store, translate: TranslateService);
    ngOnInit(): void;
    writeValue(value: CoapIntegration): void;
    onCoapEndpointCopied(): void;
    onDtlsCoapEndpointCopied(): void;
    get noSecureMode(): boolean;
    get dtlsMode(): boolean;
    get mixedMode(): boolean;
    private checkSecurityMode;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModels;
    validate(): ValidationErrors | null;
    private integrationTypeChanged;
    private coapEndPointUrl;
    private onEndpointCopied;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoapIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CoapIntegrationFormComponent, "tb-coap-integration-form", never, { "routingKey": "routingKey"; }, {}, never, never, false>;
}
