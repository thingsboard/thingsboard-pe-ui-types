import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SmsProviderConfiguration, SmsProviderType } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class SmsProviderConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    smsProviderType: typeof SmsProviderType;
    smsProviderTypes: string[];
    smsProviderTypeTranslations: Map<SmsProviderType, string>;
    smsProviderConfigurationFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SmsProviderConfiguration | null): void;
    private smsProviderTypeChanged;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmsProviderConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SmsProviderConfigurationComponent, "tb-sms-provider-configuration", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
