import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { DefaultDeviceTransportConfiguration } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DefaultDeviceTransportConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    defaultDeviceTransportConfigurationFormGroup: UntypedFormGroup;
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
    writeValue(value: DefaultDeviceTransportConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultDeviceTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultDeviceTransportConfigurationComponent, "tb-default-device-transport-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
