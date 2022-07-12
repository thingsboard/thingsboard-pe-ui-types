import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
export declare enum RoleType {
    GENERIC = "GENERIC",
    GROUP = "GROUP"
}
export declare const roleTypeTranslationMap: Map<RoleType, string>;
export declare enum Operation {
    ALL = "ALL",
    CREATE = "CREATE",
    READ = "READ",
    WRITE = "WRITE",
    DELETE = "DELETE",
    RPC_CALL = "RPC_CALL",
    READ_CREDENTIALS = "READ_CREDENTIALS",
    WRITE_CREDENTIALS = "WRITE_CREDENTIALS",
    READ_ATTRIBUTES = "READ_ATTRIBUTES",
    WRITE_ATTRIBUTES = "WRITE_ATTRIBUTES",
    READ_TELEMETRY = "READ_TELEMETRY",
    WRITE_TELEMETRY = "WRITE_TELEMETRY",
    ADD_TO_GROUP = "ADD_TO_GROUP",
    REMOVE_FROM_GROUP = "REMOVE_FROM_GROUP",
    CHANGE_OWNER = "CHANGE_OWNER",
    IMPERSONATE = "IMPERSONATE",
    CLAIM_DEVICES = "CLAIM_DEVICES",
    SHARE_GROUP = "SHARE_GROUP",
    ASSIGN_TO_TENANT = "ASSIGN_TO_TENANT"
}
export declare const operationTypeTranslationMap: Map<Operation, string>;
export declare enum Resource {
    ALL = "ALL",
    PROFILE = "PROFILE",
    ADMIN_SETTINGS = "ADMIN_SETTINGS",
    ALARM = "ALARM",
    DEVICE = "DEVICE",
    DEVICE_PROFILE = "DEVICE_PROFILE",
    ASSET = "ASSET",
    CUSTOMER = "CUSTOMER",
    DASHBOARD = "DASHBOARD",
    ENTITY_VIEW = "ENTITY_VIEW",
    TENANT = "TENANT",
    TENANT_PROFILE = "TENANT_PROFILE",
    RULE_CHAIN = "RULE_CHAIN",
    USER = "USER",
    WIDGETS_BUNDLE = "WIDGETS_BUNDLE",
    WIDGET_TYPE = "WIDGET_TYPE",
    CONVERTER = "CONVERTER",
    INTEGRATION = "INTEGRATION",
    SCHEDULER_EVENT = "SCHEDULER_EVENT",
    BLOB_ENTITY = "BLOB_ENTITY",
    CUSTOMER_GROUP = "CUSTOMER_GROUP",
    DEVICE_GROUP = "DEVICE_GROUP",
    ASSET_GROUP = "ASSET_GROUP",
    USER_GROUP = "USER_GROUP",
    ENTITY_VIEW_GROUP = "ENTITY_VIEW_GROUP",
    DASHBOARD_GROUP = "DASHBOARD_GROUP",
    ROLE = "ROLE",
    GROUP_PERMISSION = "GROUP_PERMISSION",
    WHITE_LABELING = "WHITE_LABELING",
    AUDIT_LOG = "AUDIT_LOG",
    API_USAGE_STATE = "API_USAGE_STATE",
    TB_RESOURCE = "TB_RESOURCE",
    EDGE = "EDGE",
    EDGE_GROUP = "EDGE_GROUP",
    OTA_PACKAGE = "OTA_PACKAGE",
    QUEUE = "QUEUE",
    VERSION_CONTROL = "VERSION_CONTROL"
}
export declare const resourceTypeTranslationMap: Map<Resource, string>;
export declare const resourceByEntityType: Map<EntityType, Resource>;
export declare const groupResourceByGroupType: Map<EntityType, Resource>;
export declare const sharableGroupTypes: Set<EntityType>;
export declare const publicGroupTypes: Set<EntityType>;
export interface MergedGroupPermissionInfo {
    entityType: EntityType;
    operations: Operation[];
}
export interface MergedGroupTypePermissionInfo {
    entityGroupIds: EntityGroupId[];
    hasGenericRead: boolean;
}
export interface MergedUserPermissions {
    genericPermissions: {
        [resource: string]: Operation[];
    };
    groupPermissions: {
        [entityGroupId: string]: MergedGroupPermissionInfo;
    };
    readGroupPermissions: {
        [entityType: string]: MergedGroupTypePermissionInfo;
    };
}
export interface AllowedPermissionsInfo {
    operationsByResource: {
        [resource: string]: Operation[];
    };
    allowedForGroupRoleOperations: Operation[];
    allowedForGroupOwnerOnlyOperations: Operation[];
    allowedForGroupOwnerOnlyGroupOperations: Operation[];
    allowedResources: Resource[];
    userPermissions: MergedUserPermissions;
    userOwnerId: EntityId;
}
