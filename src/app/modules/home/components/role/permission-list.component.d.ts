import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CombinedGenericPermissions } from '@shared/models/role.models';
import { Operation, Resource } from '@shared/models/security.models';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
interface PermissionRowForm {
    resource: FormControl<Resource>;
    operations: FormControl<Operation[]>;
    excludedOperations: FormControl<Operation[]>;
}
export declare class PermissionListComponent extends PageComponent implements ControlValueAccessor, Validator, OnInit, OnChanges {
    protected store: Store<AppState>;
    private breakpointObserver;
    private fb;
    private destroyRef;
    disabled: boolean;
    required: boolean;
    isMobile: boolean;
    permissionsFormArray: import("@angular/forms").FormArray<FormGroup<PermissionRowForm>>;
    private propagateChange;
    private onValidatorChange;
    get hasRequiredError(): boolean;
    constructor(store: Store<AppState>, breakpointObserver: BreakpointObserver, fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: (value: CombinedGenericPermissions) => void): void;
    registerOnTouched(fn: any): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CombinedGenericPermissions): void;
    removePermission(index: number): void;
    addPermission(): void;
    validate(_control: AbstractControl): ValidationErrors | null;
    private buildRowGroup;
    private updateModel;
    static rowValidator(control: AbstractControl): ValidationErrors | null;
    private uniqueResourcesValidator;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PermissionListComponent, "tb-permission-list", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_required: unknown;
}
export {};
