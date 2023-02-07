import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { ShareGroupRequest } from '@shared/models/entity-group.models';
import { EntityType } from '@shared/models/entity-type.models';
import { RoleType } from '@shared/models/security.models';
import * as i0 from "@angular/core";
export declare class ShareEntityGroupComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    entityType: typeof EntityType;
    roleType: typeof RoleType;
    shareEntityGroupFormGroup: UntypedFormGroup;
    disabled: boolean;
    private shareGroupRequest;
    private propagateChange;
    private propagateChangePending;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ShareGroupRequest | null): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShareEntityGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShareEntityGroupComponent, "tb-share-entity-group", never, { "disabled": "disabled"; }, {}, never, never, false>;
}
