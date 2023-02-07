import { Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, NgControl } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { GenericRolePermissions } from '@shared/models/role.models';
import * as i0 from "@angular/core";
export declare class PermissionListComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    private injector;
    private fb;
    disabled: boolean;
    permissionListFormGroup: UntypedFormGroup;
    private propagateChange;
    private valueChangeSubscription;
    ngControl: NgControl;
    constructor(store: Store<AppState>, injector: Injector, fb: UntypedFormBuilder);
    ngOnInit(): void;
    permissionsFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(permissions: GenericRolePermissions): void;
    removePermission(index: number): void;
    addPermission(): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PermissionListComponent, "tb-permission-list", never, { "disabled": "disabled"; }, {}, never, never, false>;
}
