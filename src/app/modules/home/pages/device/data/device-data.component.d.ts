import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DeviceData } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceDataComponent implements ControlValueAccessor, OnInit, Validator {
    private store;
    private fb;
    deviceDataFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    displayDeviceConfiguration: boolean;
    displayTransportConfiguration: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceData | null): void;
    validate(): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceDataComponent, "tb-device-data", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
