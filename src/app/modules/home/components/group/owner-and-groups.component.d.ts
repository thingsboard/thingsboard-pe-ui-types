import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntityType } from '@shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityInfoData } from '@shared/models/entity.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityId } from '@app/shared/models/id/entity-id';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { CreateEntityGroupFunction } from '@shared/components/group/entity-group-list.component';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export interface OwnerAndGroupsData {
    owner?: EntityId | EntityInfoData;
    groups?: EntityInfoData[];
}
export declare class OwnerAndGroupsComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    private userPermissionsService;
    private homeDialogs;
    private destroyRef;
    disabled: boolean;
    entityType: EntityType;
    defaultOwnerId: EntityId | null;
    skipDefaultPermissionCheck: boolean;
    appearance: MatFormFieldAppearance;
    ownerAndGroupsFormGroup: UntypedFormGroup;
    modelValue: OwnerAndGroupsData | null;
    currentUser: import("../../../../shared/public-api").AuthUser;
    private propagateChange;
    private ownerDisabled;
    private groupsDisabled;
    createGroupFunction: CreateEntityGroupFunction;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder, userPermissionsService: UserPermissionsService, homeDialogs: HomeDialogsService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: OwnerAndGroupsData | undefined): void;
    ownerId(): EntityId | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwnerAndGroupsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwnerAndGroupsComponent, "tb-owner-and-groups", never, { "disabled": { "alias": "disabled"; "required": false; }; "entityType": { "alias": "entityType"; "required": false; }; "defaultOwnerId": { "alias": "defaultOwnerId"; "required": false; }; "skipDefaultPermissionCheck": { "alias": "skipDefaultPermissionCheck"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, never, false, never>;
}
