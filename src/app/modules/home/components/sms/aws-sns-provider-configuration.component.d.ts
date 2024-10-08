import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { AwsSnsSmsProviderConfiguration } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class AwsSnsProviderConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    awsSnsProviderConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AwsSnsSmsProviderConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsSnsProviderConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsSnsProviderConfigurationComponent, "tb-aws-sns-provider-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
