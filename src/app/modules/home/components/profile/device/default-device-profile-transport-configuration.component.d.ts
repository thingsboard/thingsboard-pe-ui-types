import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DefaultDeviceProfileTransportConfiguration } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DefaultDeviceProfileTransportConfigurationComponent implements ControlValueAccessor, OnInit, Validator {
    private store;
    private fb;
    defaultDeviceProfileTransportConfigurationFormGroup: UntypedFormGroup;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DefaultDeviceProfileTransportConfiguration | null): void;
    validate(c: UntypedFormControl): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultDeviceProfileTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultDeviceProfileTransportConfigurationComponent, "tb-default-device-profile-transport-configuration", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
