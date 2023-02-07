import { BaseData } from './base-data';
import { AuditLogId } from './id/audit-log-id';
import { CustomerId } from './id/customer-id';
import { EntityId } from './id/entity-id';
import { UserId } from './id/user-id';
import { TenantId } from './id/tenant-id';
export declare enum AuditLogMode {
    TENANT = 0,
    ENTITY = 1,
    USER = 2,
    CUSTOMER = 3
}
export declare enum ActionType {
    ADDED = "ADDED",
    DELETED = "DELETED",
    UPDATED = "UPDATED",
    ATTRIBUTES_UPDATED = "ATTRIBUTES_UPDATED",
    ATTRIBUTES_DELETED = "ATTRIBUTES_DELETED",
    RPC_CALL = "RPC_CALL",
    CREDENTIALS_UPDATED = "CREDENTIALS_UPDATED",
    ASSIGNED_TO_CUSTOMER = "ASSIGNED_TO_CUSTOMER",
    UNASSIGNED_FROM_CUSTOMER = "UNASSIGNED_FROM_CUSTOMER",
    ACTIVATED = "ACTIVATED",
    SUSPENDED = "SUSPENDED",
    CREDENTIALS_READ = "CREDENTIALS_READ",
    ATTRIBUTES_READ = "ATTRIBUTES_READ",
    ADDED_TO_ENTITY_GROUP = "ADDED_TO_ENTITY_GROUP",
    REMOVED_FROM_ENTITY_GROUP = "REMOVED_FROM_ENTITY_GROUP",
    RELATION_ADD_OR_UPDATE = "RELATION_ADD_OR_UPDATE",
    RELATION_DELETED = "RELATION_DELETED",
    RELATIONS_DELETED = "RELATIONS_DELETED",
    ALARM_ACK = "ALARM_ACK",
    ALARM_CLEAR = "ALARM_CLEAR",
    ADDED_COMMENT = "ADDED_COMMENT",
    UPDATED_COMMENT = "UPDATED_COMMENT",
    DELETED_COMMENT = "DELETED_COMMENT",
    REST_API_RULE_ENGINE_CALL = "REST_API_RULE_ENGINE_CALL",
    MADE_PUBLIC = "MADE_PUBLIC",
    MADE_PRIVATE = "MADE_PRIVATE",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    LOCKOUT = "LOCKOUT",
    ASSIGNED_FROM_TENANT = "ASSIGNED_FROM_TENANT",
    ASSIGNED_TO_TENANT = "ASSIGNED_TO_TENANT",
    PROVISION_SUCCESS = "PROVISION_SUCCESS",
    PROVISION_FAILURE = "PROVISION_FAILURE",
    TIMESERIES_UPDATED = "TIMESERIES_UPDATED",
    TIMESERIES_DELETED = "TIMESERIES_DELETED",
    CHANGE_OWNER = "CHANGE_OWNER",
    ASSIGNED_TO_EDGE = "ASSIGNED_TO_EDGE",
    UNASSIGNED_FROM_EDGE = "UNASSIGNED_FROM_EDGE"
}
export declare enum ActionStatus {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
export declare const actionTypeTranslations: Map<ActionType, string>;
export declare const actionStatusTranslations: Map<ActionStatus, string>;
export interface AuditLog extends BaseData<AuditLogId> {
    tenantId: TenantId;
    customerId: CustomerId;
    entityId: EntityId;
    entityName: string;
    userId: UserId;
    userName: string;
    actionType: ActionType;
    actionData: any;
    actionStatus: ActionStatus;
    actionFailureDetails: string;
}
