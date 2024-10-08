import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TenantProfileConfiguration, TenantProfileType } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export declare class TenantProfileConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    tenantProfileType: typeof TenantProfileType;
    tenantProfileConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    type: TenantProfileType;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TenantProfileConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileConfigurationComponent, "tb-tenant-profile-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
