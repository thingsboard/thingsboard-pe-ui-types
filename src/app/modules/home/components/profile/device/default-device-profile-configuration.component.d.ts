import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DefaultDeviceProfileConfiguration } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DefaultDeviceProfileConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    defaultDeviceProfileConfigurationFormGroup: UntypedFormGroup;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DefaultDeviceProfileConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultDeviceProfileConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultDeviceProfileConfigurationComponent, "tb-default-device-profile-configuration", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
