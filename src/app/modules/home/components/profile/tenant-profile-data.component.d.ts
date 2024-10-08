import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TenantProfileData } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export declare class TenantProfileDataComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private store;
    private fb;
    tenantProfileDataFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private valueChange$;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TenantProfileData | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileDataComponent, "tb-tenant-profile-data", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
