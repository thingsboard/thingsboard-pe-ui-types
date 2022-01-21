import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EdgeId } from '@shared/models/id/edge-id';
import { EntitySearchQuery } from '@shared/models/relation.models';
import { RuleChainId } from '@shared/models/id/rule-chain-id';
import { BaseEventBody } from '@shared/models/event.models';
import { EventId } from '@shared/models/id/event-id';
import { EntityType } from "@shared/models/entity-type.models";
export interface Edge extends BaseData<EdgeId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    secret: string;
    routingKey: string;
    cloudEndpoint: string;
    edgeLicenseKey: string;
    label?: string;
    additionalInfo?: any;
    rootRuleChainId?: RuleChainId;
}
export interface EdgeInfo extends Edge {
    customerTitle: string;
    customerIsPublic: boolean;
}
export interface EdgeSearchQuery extends EntitySearchQuery {
    edgeTypes: Array<string>;
}
export declare enum EdgeEventType {
    DASHBOARD = "DASHBOARD",
    ASSET = "ASSET",
    DEVICE = "DEVICE",
    DEVICE_PROFILE = "DEVICE_PROFILE",
    ENTITY_VIEW = "ENTITY_VIEW",
    ALARM = "ALARM",
    RULE_CHAIN = "RULE_CHAIN",
    RULE_CHAIN_METADATA = "RULE_CHAIN_METADATA",
    EDGE = "EDGE",
    USER = "USER",
    CUSTOMER = "CUSTOMER",
    RELATION = "RELATION",
    TENANT = "TENANT",
    WIDGETS_BUNDLE = "WIDGETS_BUNDLE",
    WIDGET_TYPE = "WIDGET_TYPE",
    ADMIN_SETTINGS = "ADMIN_SETTINGS",
    ENTITY_GROUP = "ENTITY_GROUP",
    SCHEDULER_EVENT = "SCHEDULER_EVENT",
    WHITE_LABELING = "WHITE_LABELING",
    LOGIN_WHITE_LABELING = "LOGIN_WHITE_LABELING",
    CUSTOM_TRANSLATION = "CUSTOM_TRANSLATION",
    ROLE = "ROLE",
    GROUP_PERMISSION = "GROUP_PERMISSION"
}
export declare enum EdgeEventActionType {
    ADDED = "ADDED",
    DELETED = "DELETED",
    UPDATED = "UPDATED",
    POST_ATTRIBUTES = "POST_ATTRIBUTES",
    ATTRIBUTES_UPDATED = "ATTRIBUTES_UPDATED",
    ATTRIBUTES_DELETED = "ATTRIBUTES_DELETED",
    TIMESERIES_UPDATED = "TIMESERIES_UPDATED",
    CREDENTIALS_UPDATED = "CREDENTIALS_UPDATED",
    RELATION_ADD_OR_UPDATE = "RELATION_ADD_OR_UPDATE",
    RELATION_DELETED = "RELATION_DELETED",
    RPC_CALL = "RPC_CALL",
    ALARM_ACK = "ALARM_ACK",
    ALARM_CLEAR = "ALARM_CLEAR",
    ASSIGNED_TO_EDGE = "ASSIGNED_TO_EDGE",
    UNASSIGNED_FROM_EDGE = "UNASSIGNED_FROM_EDGE",
    CREDENTIALS_REQUEST = "CREDENTIALS_REQUEST",
    ENTITY_MERGE_REQUEST = "ENTITY_MERGE_REQUEST",
    ADDED_TO_ENTITY_GROUP = "ADDED_TO_ENTITY_GROUP",
    REMOVED_FROM_ENTITY_GROUP = "REMOVED_FROM_ENTITY_GROUP",
    CHANGE_OWNER = "CHANGE_OWNER",
    RELATIONS_DELETED = "RELATIONS_DELETED"
}
export declare enum EdgeEventStatus {
    DEPLOYED = "DEPLOYED",
    PENDING = "PENDING"
}
export declare const edgeEventTypeTranslations: Map<EdgeEventType, string>;
export declare const edgeEventActionTypeTranslations: Map<EdgeEventActionType, string>;
export declare const bodyContentEdgeEventActionTypes: EdgeEventActionType[];
export declare const edgeEventStatusColor: Map<EdgeEventStatus, string>;
export interface EdgeEventBody extends BaseEventBody {
    type: string;
    action: string;
    entityId: string;
}
export interface EdgeEvent extends BaseData<EventId> {
    tenantId: TenantId;
    entityId: string;
    edgeId: EdgeId;
    action: EdgeEventActionType;
    type: EdgeEventType;
    uid: string;
    body: string;
}
export declare const edgeEntityGroupTypes: EntityType[];
