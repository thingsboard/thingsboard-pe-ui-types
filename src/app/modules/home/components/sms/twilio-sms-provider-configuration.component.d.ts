import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TwilioSmsProviderConfiguration } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class TwilioSmsProviderConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    twilioSmsProviderConfigurationFormGroup: FormGroup;
    phoneNumberPatternTwilio: RegExp;
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
    writeValue(value: TwilioSmsProviderConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwilioSmsProviderConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwilioSmsProviderConfigurationComponent, "tb-twilio-sms-provider-configuration", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
