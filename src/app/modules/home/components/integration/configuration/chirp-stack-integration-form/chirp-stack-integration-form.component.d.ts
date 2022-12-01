import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ChipStackIntegration } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { IntegrationForm } from '@home/components/integration/configuration/integration-form';
import * as i0 from "@angular/core";
export declare class ChirpStackIntegrationFormComponent extends IntegrationForm implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private store;
    private translate;
    chirpStackIntegrationConfigForm: FormGroup;
    routingKey: string;
    private propagateChange;
    constructor(fb: FormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    writeValue(value: ChipStackIntegration): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private endPointUrl;
    private updateModels;
    validate(): ValidationErrors | null;
    onHttpEndpointCopied(): void;
    updatedValidationPrivateNetwork(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChirpStackIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChirpStackIntegrationFormComponent, "tb-chirp-stack-integration-form", never, { "routingKey": "routingKey"; }, {}, never, never>;
}
