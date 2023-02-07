import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { GroupPermission, GroupPermissionFullInfo } from '@shared/models/group-permission.models';
import { RoleService } from '@core/http/role.service';
import { RoleType } from '@shared/models/security.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export interface GroupPermissionDialogData {
    isUserGroup: boolean;
    isAdd: boolean;
    groupPermission: GroupPermissionFullInfo;
    groupPermissionsMode: 'group' | 'registration';
}
export declare class GroupPermissionDialogComponent extends DialogComponent<GroupPermissionDialogComponent, boolean | GroupPermission> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: GroupPermissionDialogData;
    private roleService;
    private userPermissionsService;
    private errorStateMatcher;
    dialogRef: MatDialogRef<GroupPermissionDialogComponent, boolean | GroupPermission>;
    fb: UntypedFormBuilder;
    groupPermissionFormGroup: UntypedFormGroup;
    isAdd: boolean;
    isUserGroup: boolean;
    groupPermission: GroupPermissionFullInfo;
    roleType: typeof RoleType;
    roleTypes: string[];
    roleTypeTranslations: Map<RoleType, string>;
    entityType: typeof EntityType;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: GroupPermissionDialogData, roleService: RoleService, userPermissionsService: UserPermissionsService, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<GroupPermissionDialogComponent, boolean | GroupPermission>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    private updateEnabledState;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupPermissionDialogComponent, [null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupPermissionDialogComponent, "tb-group-permission-dialog", never, {}, {}, never, never, false>;
}
