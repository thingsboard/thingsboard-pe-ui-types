import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { GroupPermission } from '@shared/models/group-permission.models';
import * as i0 from "@angular/core";
export declare class RegistrationPermissionsComponent extends PageComponent implements ControlValueAccessor, OnInit {
    protected store: Store<AppState>;
    disabled: boolean;
    registrationPermissions: Array<GroupPermission>;
    private propagateChange;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(permissions: Array<GroupPermission>): void;
    registrationPermissionsChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegistrationPermissionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegistrationPermissionsComponent, "tb-registration-permissions", never, { "disabled": "disabled"; }, {}, never, never>;
}
