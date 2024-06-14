import { TenantId } from './id/tenant-id';
import { BaseData, HasId } from '@shared/models/base-data';
export declare enum EntityType {
    TENANT = "TENANT",
    TENANT_PROFILE = "TENANT_PROFILE",
    CUSTOMER = "CUSTOMER",
    USER = "USER",
    DASHBOARD = "DASHBOARD",
    ASSET = "ASSET",
    DEVICE = "DEVICE",
    DEVICE_PROFILE = "DEVICE_PROFILE",
    ASSET_PROFILE = "ASSET_PROFILE",
    ALARM = "ALARM",
    ENTITY_GROUP = "ENTITY_GROUP",
    CONVERTER = "CONVERTER",
    INTEGRATION = "INTEGRATION",
    RULE_CHAIN = "RULE_CHAIN",
    RULE_NODE = "RULE_NODE",
    SCHEDULER_EVENT = "SCHEDULER_EVENT",
    BLOB_ENTITY = "BLOB_ENTITY",
    ENTITY_VIEW = "ENTITY_VIEW",
    WIDGETS_BUNDLE = "WIDGETS_BUNDLE",
    WIDGET_TYPE = "WIDGET_TYPE",
    ROLE = "ROLE",
    GROUP_PERMISSION = "GROUP_PERMISSION",
    API_USAGE_STATE = "API_USAGE_STATE",
    TB_RESOURCE = "TB_RESOURCE",
    EDGE = "EDGE",
    OTA_PACKAGE = "OTA_PACKAGE",
    RPC = "RPC",
    QUEUE = "QUEUE",
    QUEUE_STATS = "QUEUE_STATS",
    NOTIFICATION = "NOTIFICATION",
    NOTIFICATION_REQUEST = "NOTIFICATION_REQUEST",
    NOTIFICATION_RULE = "NOTIFICATION_RULE",
    NOTIFICATION_TARGET = "NOTIFICATION_TARGET",
    NOTIFICATION_TEMPLATE = "NOTIFICATION_TEMPLATE"
}
export declare enum AliasEntityType {
    CURRENT_CUSTOMER = "CURRENT_CUSTOMER",
    CURRENT_TENANT = "CURRENT_TENANT",
    CURRENT_USER = "CURRENT_USER",
    CURRENT_USER_OWNER = "CURRENT_USER_OWNER"
}
export interface EntityTypeTranslation {
    type?: string;
    typePlural?: string;
    list?: string;
    nameStartsWith?: string;
    details?: string;
    add?: string;
    noEntities?: string;
    selectedEntities?: string;
    search?: string;
    selectGroupToAdd?: string;
    selectGroupToMove?: string;
    removeFromGroup?: string;
    group?: string;
    groupList?: string;
    groupNameStartsWith?: string;
}
export interface EntityTypeResource<T> {
    helpLinkId: string;
    helpLinkIdForEntity?(entity: T): string;
}
export declare const entityTypeTranslations: Map<EntityType | AliasEntityType, EntityTypeTranslation>;
export declare const entityTypeResources: Map<EntityType, EntityTypeResource<BaseData<HasId>>>;
export declare const baseDetailsPageByEntityType: Map<EntityType, string>;
export declare const groupUrlPrefixByEntityType: Map<EntityType, string>;
export interface EntitySubtype {
    tenantId: TenantId;
    entityType: EntityType;
    type: string;
}
