import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroupDirective, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { GroupEntityInfo } from '@shared/models/base-data';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export interface ManageOwnerAndGroupsDialogData {
    groupEntity: GroupEntityInfo<EntityId>;
}
export declare class ManageOwnerAndGroupsDialogComponent extends DialogComponent<ManageOwnerAndGroupsDialogComponent, boolean> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageOwnerAndGroupsDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ManageOwnerAndGroupsDialogComponent, boolean>;
    fb: UntypedFormBuilder;
    private userPermissionsService;
    private entityGroupService;
    ownerAndGroupsFormGroup: UntypedFormGroup;
    groupEntity: GroupEntityInfo<EntityId>;
    entityType: EntityType;
    readonly: boolean;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ManageOwnerAndGroupsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageOwnerAndGroupsDialogComponent, boolean>, fb: UntypedFormBuilder, userPermissionsService: UserPermissionsService, entityGroupService: EntityGroupService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageOwnerAndGroupsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageOwnerAndGroupsDialogComponent, "tb-manage-owner-and-groups-dialog", never, {}, {}, never, never, false, never>;
}
