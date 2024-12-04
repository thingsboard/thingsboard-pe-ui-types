import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { GroupPermission } from '@shared/models/group-permission.models';
import { RoleType } from '@shared/models/security.models';
import { RoleId } from '@shared/models/id/role-id';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { EntityType } from '@shared/models/entity-type.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class UserGroupsPanelRowComponent implements ControlValueAccessor, Validator {
    private fb;
    private userPermissionsService;
    disabled: boolean;
    groupPermissionForm: import("@angular/forms").FormGroup<{
        roleId: import("@angular/forms").FormControl<RoleId>;
        entityGroupId: import("@angular/forms").FormControl<EntityGroupId>;
    }>;
    groupType: import("@angular/forms").FormControl<RoleType>;
    readonly entityType: typeof EntityType;
    readonly roleType: typeof RoleType;
    readonly roleTypes: RoleType[];
    readonly roleTypeTranslations: Map<RoleType, string>;
    entityGroupOwnerId: import("../../../../shared/public-api").EntityId;
    private propagateChange;
    constructor(fb: FormBuilder, userPermissionsService: UserPermissionsService);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(permission: GroupPermission): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserGroupsPanelRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserGroupsPanelRowComponent, "tb-user-groups-panel-row", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}
