import { AbstractControl, ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { GroupPermission } from '@shared/models/group-permission.models';
import * as i0 from "@angular/core";
export declare class UserGroupPanelComponent implements ControlValueAccessor, Validator {
    private fb;
    disabled: boolean;
    groupPermissionsForm: import("@angular/forms").FormArray<import("@angular/forms").FormControl<GroupPermission>>;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(groupPermissions: GroupPermission[]): void;
    addPermission($event: Event): void;
    trackByGroup(_index: number, groupControl: AbstractControl): any;
    removePermission(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserGroupPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserGroupPanelComponent, "tb-user-group-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}
