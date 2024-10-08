import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceTransportConfiguration, DeviceTransportType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceTransportConfigurationComponent implements ControlValueAccessor, OnInit, Validator {
    private store;
    private fb;
    deviceTransportType: typeof DeviceTransportType;
    deviceTransportConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    transportType: DeviceTransportType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceTransportConfiguration | null): void;
    validate(): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTransportConfigurationComponent, "tb-device-transport-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
