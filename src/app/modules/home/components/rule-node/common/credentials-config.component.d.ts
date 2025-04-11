import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/public-api';
import { credentialsType } from '../rule-node-config.models';
import * as i0 from "@angular/core";
interface CredentialsConfig {
    type: credentialsType;
    username?: string;
    password?: string;
    caCert?: string;
    caCertFileName?: string;
    privateKey?: string;
    privateKeyFileName?: string;
    cert?: string;
    certFileName?: string;
}
export declare class CredentialsConfigComponent extends PageComponent implements ControlValueAccessor, OnInit, Validator, OnChanges {
    private fb;
    private destroyRef;
    credentialsConfigFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disableCertPemCredentials: boolean;
    passwordFieldRequired: boolean;
    allCredentialsTypes: credentialsType[];
    credentialsTypeTranslationsMap: Map<credentialsType, string>;
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(credentials: CredentialsConfig | null): void;
    setDisabledState(isDisabled: boolean): void;
    updateView(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    validate(): {
        credentialsConfig: {
            valid: boolean;
        };
    };
    credentialsTypeChanged(): void;
    protected updateValidators(emitEvent?: boolean): void;
    private requiredFilesSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<CredentialsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CredentialsConfigComponent, "tb-credentials-config", never, { "required": { "alias": "required"; "required": false; }; "disableCertPemCredentials": { "alias": "disableCertPemCredentials"; "required": false; }; "passwordFieldRequired": { "alias": "passwordFieldRequired"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
