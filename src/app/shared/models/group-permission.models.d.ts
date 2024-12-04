import { BaseData } from '@shared/models/base-data';
import { RoleId } from '@shared/models/id/role-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { GroupPermissionId } from '@shared/models/id/group-permission-id';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { EntityType } from '@shared/models/entity-type.models';
import { Role } from '@shared/models/role.models';
import { EntityId } from '@shared/models/id/entity-id';
export interface GroupPermission extends BaseData<GroupPermissionId> {
    tenantId?: TenantId;
    userGroupId?: EntityGroupId;
    roleId: RoleId;
    entityGroupId?: EntityGroupId;
    entityGroupType?: EntityType;
    isPublic?: boolean;
}
export interface GroupPermissionInfo extends GroupPermission {
    role: Role;
    entityGroupName: string;
    entityGroupOwnerId: EntityId;
    entityGroupOwnerName: string;
    userGroupName: string;
    userGroupOwnerId: EntityId;
    userGroupOwnerName: string;
    readOnly: boolean;
}
export interface GroupPermissionFullInfo extends GroupPermissionInfo {
    roleName?: string;
    roleTypeName?: string;
    entityGroupTypeName?: string;
    entityGroupOwnerFullName?: string;
    userGroupOwnerFullName?: string;
    sourceGroupPermission?: GroupPermission;
}
export declare function isGroupPermissionsEqual(gp1: GroupPermission, gp2: GroupPermission): boolean;
