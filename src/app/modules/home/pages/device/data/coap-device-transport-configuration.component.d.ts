import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { CoapDeviceTransportConfiguration } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class CoapDeviceTransportConfigurationComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private store;
    private fb;
    coapDeviceTransportForm: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CoapDeviceTransportConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoapDeviceTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CoapDeviceTransportConfigurationComponent, "tb-coap-device-transport-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
