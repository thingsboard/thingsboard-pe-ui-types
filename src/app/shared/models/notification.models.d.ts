import { NotificationId } from '@shared/models/id/notification-id';
import { NotificationRequestId } from '@shared/models/id/notification-request-id';
import { UserId } from '@shared/models/id/user-id';
import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { NotificationTargetId } from '@shared/models/id/notification-target-id';
import { NotificationTemplateId } from '@shared/models/id/notification-template-id';
import { EntityId } from '@shared/models/id/entity-id';
import { NotificationRuleId } from '@shared/models/id/notification-rule-id';
import { AlarmSearchStatus, AlarmSeverity, AlarmStatus } from '@shared/models/alarm.models';
import { EntityType } from '@shared/models/entity-type.models';
import { ApiFeature, ApiUsageStateValue } from '@shared/models/api-usage.models';
import { LimitedApi } from '@shared/models/limited-api.models';
import { IntegrationType } from '@shared/models/integration.models';
export interface Notification {
    readonly id: NotificationId;
    readonly requestId: NotificationRequestId;
    readonly recipientId: UserId;
    readonly type: NotificationType;
    readonly subject: string;
    readonly text: string;
    readonly info?: NotificationInfo;
    readonly status: NotificationStatus;
    readonly createdTime: number;
    readonly additionalConfig?: WebDeliveryMethodAdditionalConfig;
}
export interface NotificationInfo {
    description: string;
    type: string;
    alarmSeverity?: AlarmSeverity;
    alarmStatus?: AlarmStatus;
    alarmType?: string;
    stateEntityId?: EntityId;
    acknowledged?: boolean;
    cleared?: boolean;
}
export interface NotificationRequest extends Omit<BaseData<NotificationRequestId>, 'label'> {
    tenantId?: TenantId;
    targets: Array<string>;
    templateId?: NotificationTemplateId;
    template?: NotificationTemplate;
    info?: NotificationInfo;
    deliveryMethods: Array<NotificationDeliveryMethod>;
    originatorEntityId: EntityId;
    status: NotificationRequestStatus;
    stats: NotificationRequestStats;
    additionalConfig: NotificationRequestConfig;
}
export interface NotificationRequestInfo extends NotificationRequest {
    templateName: string;
    deliveryMethods: NotificationDeliveryMethod[];
}
export interface NotificationRequestPreview {
    totalRecipientsCount: number;
    recipientsCountByTarget: {
        [key in string]: number;
    };
    processedTemplates: {
        [key in NotificationDeliveryMethod]: DeliveryMethodNotificationTemplate;
    };
    recipientsPreview: Array<string>;
}
export interface NotificationRequestStats {
    sent: Map<NotificationDeliveryMethod, any>;
    errors: {
        [key in NotificationDeliveryMethod]: {
            [errorKey in string]: string;
        };
    };
    processedRecipients: Map<NotificationDeliveryMethod, Set<UserId>>;
}
export interface NotificationRequestConfig {
    sendingDelayInSec: number;
}
export interface NotificationSettings {
    deliveryMethodsConfigs: {
        [key in NotificationDeliveryMethod]: NotificationDeliveryMethodConfig;
    };
}
export interface NotificationDeliveryMethodConfig extends Partial<SlackNotificationDeliveryMethodConfig> {
    enabled: boolean;
    method: NotificationDeliveryMethod;
}
interface SlackNotificationDeliveryMethodConfig {
    botToken: string;
}
export interface SlackConversation {
    id: string;
    title: string;
    name: string;
    wholeName: string;
    email: string;
    type: string;
}
export interface NotificationRule extends Omit<BaseData<NotificationRuleId>, 'label'>, ExportableEntity<NotificationRuleId> {
    tenantId: TenantId;
    enabled: boolean;
    templateId: NotificationTemplateId;
    triggerType: TriggerType;
    triggerConfig: NotificationRuleTriggerConfig;
    recipientsConfig: NotificationRuleRecipientConfig;
    additionalConfig: {
        description: string;
    };
}
export type NotificationRuleTriggerConfig = Partial<AlarmNotificationRuleTriggerConfig & DeviceInactivityNotificationRuleTriggerConfig & EntityActionNotificationRuleTriggerConfig & AlarmCommentNotificationRuleTriggerConfig & AlarmAssignmentNotificationRuleTriggerConfig & RuleEngineLifecycleEventNotificationRuleTriggerConfig & EntitiesLimitNotificationRuleTriggerConfig & ApiUsageLimitNotificationRuleTriggerConfig & RateLimitsNotificationRuleTriggerConfig & IntegrationLifecycleEventNotificationRuleTriggerConfig>;
export interface AlarmNotificationRuleTriggerConfig {
    alarmTypes?: Array<string>;
    alarmSeverities?: Array<AlarmSeverity>;
    notifyOn: Array<AlarmAction>;
    clearRule?: ClearRule;
}
interface ClearRule {
    alarmStatuses: Array<AlarmSearchStatus>;
}
export interface DeviceInactivityNotificationRuleTriggerConfig {
    devices?: Array<string>;
    deviceProfiles?: Array<string>;
}
export interface EntityActionNotificationRuleTriggerConfig {
    entityTypes: EntityType[];
    created: boolean;
    updated: boolean;
    deleted: boolean;
}
export interface AlarmCommentNotificationRuleTriggerConfig {
    alarmTypes?: Array<string>;
    alarmSeverities?: Array<AlarmSeverity>;
    alarmStatuses?: Array<AlarmSearchStatus>;
    onlyUserComments?: boolean;
    notifyOnCommentUpdate?: boolean;
}
export interface AlarmAssignmentNotificationRuleTriggerConfig {
    alarmTypes?: Array<string>;
    alarmSeverities?: Array<AlarmSeverity>;
    alarmStatuses?: Array<AlarmSearchStatus>;
    notifyOn: Array<AlarmAssignmentAction>;
}
export interface RuleEngineLifecycleEventNotificationRuleTriggerConfig {
    ruleChains?: Array<string>;
    ruleChainEvents?: Array<ComponentLifecycleEvent>;
    onlyRuleChainLifecycleFailures: boolean;
    trackRuleNodeEvents: boolean;
    ruleNodeEvents: Array<any>;
    onlyRuleNodeLifecycleFailures: ComponentLifecycleEvent;
}
export interface EntitiesLimitNotificationRuleTriggerConfig {
    entityTypes: EntityType[];
    threshold: number;
}
export interface ApiUsageLimitNotificationRuleTriggerConfig {
    apiFeatures: ApiFeature[];
    notifyOn: ApiUsageStateValue[];
}
export interface RateLimitsNotificationRuleTriggerConfig {
    apis: LimitedApi[];
}
export interface IntegrationLifecycleEventNotificationRuleTriggerConfig {
    integrationTypes?: Array<IntegrationType>;
    integrations?: Array<string>;
    notifyOn: Array<ComponentLifecycleEvent>;
    onlyOnError: boolean;
}
export declare enum ComponentLifecycleEvent {
    STARTED = "STARTED",
    UPDATED = "UPDATED",
    STOPPED = "STOPPED"
}
export declare const ComponentLifecycleEventTranslationMap: Map<ComponentLifecycleEvent, string>;
export declare enum AlarmAction {
    CREATED = "CREATED",
    SEVERITY_CHANGED = "SEVERITY_CHANGED",
    ACKNOWLEDGED = "ACKNOWLEDGED",
    CLEARED = "CLEARED"
}
export declare const AlarmActionTranslationMap: Map<AlarmAction, string>;
export declare enum AlarmAssignmentAction {
    ASSIGNED = "ASSIGNED",
    UNASSIGNED = "UNASSIGNED"
}
export declare const AlarmAssignmentActionTranslationMap: Map<AlarmAssignmentAction, string>;
export declare enum DeviceEvent {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare const DeviceEventTranslationMap: Map<DeviceEvent, string>;
export interface NotificationRuleRecipientConfig {
    targets?: Array<string>;
    escalationTable?: {
        [key: number]: Array<string>;
    };
}
export interface NonConfirmedNotificationEscalation {
    delayInSec: number;
    targets: Array<string>;
}
export interface NotificationTarget extends Omit<BaseData<NotificationTargetId>, 'label'>, ExportableEntity<NotificationTargetId> {
    tenantId: TenantId;
    configuration: NotificationTargetConfig;
}
export interface NotificationTargetConfig extends Partial<PlatformUsersNotificationTargetConfig & SlackNotificationTargetConfig> {
    description?: string;
    type: NotificationTargetType;
}
export interface PlatformUsersNotificationTargetConfig {
    usersFilter: UsersFilter;
}
export interface UsersFilter extends Partial<UserListFilter & CustomerUsersFilter & TenantAdministratorsFilter & UserGroupListFilter & UserRoleFilter> {
    type: NotificationTargetConfigType;
}
interface UserListFilter {
    usersIds: Array<string>;
}
interface CustomerUsersFilter {
    customerId: string;
}
interface UserGroupListFilter {
    groupsIds: Array<string>;
}
interface UserRoleFilter {
    rolesIds: Array<string>;
}
interface TenantAdministratorsFilter {
    tenantsIds?: Array<string>;
    tenantProfilesIds?: Array<string>;
}
export interface SlackNotificationTargetConfig {
    conversationType: SlackChanelType;
    conversation: SlackConversation;
}
export declare enum NotificationTargetType {
    PLATFORM_USERS = "PLATFORM_USERS",
    SLACK = "SLACK"
}
export declare const NotificationTargetTypeTranslationMap: Map<NotificationTargetType, string>;
export interface NotificationTemplate extends Omit<BaseData<NotificationTemplateId>, 'label'>, ExportableEntity<NotificationTemplateId> {
    tenantId: TenantId;
    notificationType: NotificationType;
    configuration: NotificationTemplateConfig;
}
interface NotificationTemplateConfig {
    deliveryMethodsTemplates: {
        [key in NotificationDeliveryMethod]: DeliveryMethodNotificationTemplate;
    };
}
export interface DeliveryMethodNotificationTemplate extends Partial<WebDeliveryMethodNotificationTemplate & EmailDeliveryMethodNotificationTemplate & SlackDeliveryMethodNotificationTemplate> {
    body?: string;
    enabled: boolean;
    method: NotificationDeliveryMethod;
}
interface WebDeliveryMethodNotificationTemplate {
    subject?: string;
    additionalConfig: WebDeliveryMethodAdditionalConfig;
}
interface WebDeliveryMethodAdditionalConfig {
    icon: {
        enabled: boolean;
        icon: string;
        color: string;
    };
    actionButtonConfig: {
        enabled: boolean;
        text: string;
        linkType: ActionButtonLinkType;
        link?: string;
        dashboardId?: string;
        dashboardState?: string;
        setEntityIdInState?: boolean;
    };
}
interface EmailDeliveryMethodNotificationTemplate {
    subject: string;
}
interface SlackDeliveryMethodNotificationTemplate {
    conversationType: SlackChanelType;
    conversationId: string;
}
export declare enum NotificationStatus {
    SENT = "SENT",
    READ = "READ"
}
export declare enum NotificationDeliveryMethod {
    WEB = "WEB",
    SMS = "SMS",
    EMAIL = "EMAIL",
    SLACK = "SLACK"
}
export declare const NotificationDeliveryMethodTranslateMap: Map<NotificationDeliveryMethod, string>;
export declare enum NotificationRequestStatus {
    PROCESSING = "PROCESSING",
    SCHEDULED = "SCHEDULED",
    SENT = "SENT"
}
export declare const NotificationRequestStatusTranslateMap: Map<NotificationRequestStatus, string>;
export declare enum SlackChanelType {
    PUBLIC_CHANNEL = "PUBLIC_CHANNEL",
    PRIVATE_CHANNEL = "PRIVATE_CHANNEL",
    DIRECT = "DIRECT"
}
export declare const SlackChanelTypesTranslateMap: Map<SlackChanelType, string>;
export declare enum NotificationTargetConfigType {
    ALL_USERS = "ALL_USERS",
    TENANT_ADMINISTRATORS = "TENANT_ADMINISTRATORS",
    USER_LIST = "USER_LIST",
    USER_GROUP_LIST = "USER_GROUP_LIST",
    CUSTOMER_USERS = "CUSTOMER_USERS",
    USER_ROLE = "USER_ROLE",
    ORIGINATOR_ENTITY_OWNER_USERS = "ORIGINATOR_ENTITY_OWNER_USERS",
    AFFECTED_USER = "AFFECTED_USER",
    SYSTEM_ADMINISTRATORS = "SYSTEM_ADMINISTRATORS",
    AFFECTED_TENANT_ADMINISTRATORS = "AFFECTED_TENANT_ADMINISTRATORS"
}
export interface NotificationTargetConfigTypeInfo {
    name: string;
    hint?: string;
}
export declare const NotificationTargetConfigTypeInfoMap: Map<NotificationTargetConfigType, NotificationTargetConfigTypeInfo>;
export declare enum NotificationType {
    GENERAL = "GENERAL",
    ALARM = "ALARM",
    DEVICE_ACTIVITY = "DEVICE_ACTIVITY",
    ENTITY_ACTION = "ENTITY_ACTION",
    ALARM_COMMENT = "ALARM_COMMENT",
    ALARM_ASSIGNMENT = "ALARM_ASSIGNMENT",
    RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT = "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT",
    ENTITIES_LIMIT = "ENTITIES_LIMIT",
    API_USAGE_LIMIT = "API_USAGE_LIMIT",
    NEW_PLATFORM_VERSION = "NEW_PLATFORM_VERSION",
    RULE_NODE = "RULE_NODE",
    INTEGRATION_LIFECYCLE_EVENT = "INTEGRATION_LIFECYCLE_EVENT",
    RATE_LIMITS = "RATE_LIMITS"
}
export declare const NotificationTypeIcons: Map<NotificationType, string>;
export declare const AlarmSeverityNotificationColors: Map<AlarmSeverity, string>;
export declare enum ActionButtonLinkType {
    LINK = "LINK",
    DASHBOARD = "DASHBOARD"
}
export declare const ActionButtonLinkTypeTranslateMap: Map<ActionButtonLinkType, string>;
export interface NotificationTemplateTypeTranslate {
    name: string;
    helpId?: string;
}
export declare const NotificationTemplateTypeTranslateMap: Map<NotificationType, NotificationTemplateTypeTranslate>;
export declare enum TriggerType {
    ALARM = "ALARM",
    DEVICE_ACTIVITY = "DEVICE_ACTIVITY",
    ENTITY_ACTION = "ENTITY_ACTION",
    ALARM_COMMENT = "ALARM_COMMENT",
    ALARM_ASSIGNMENT = "ALARM_ASSIGNMENT",
    RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT = "RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT",
    ENTITIES_LIMIT = "ENTITIES_LIMIT",
    API_USAGE_LIMIT = "API_USAGE_LIMIT",
    INTEGRATION_LIFECYCLE_EVENT = "INTEGRATION_LIFECYCLE_EVENT",
    NEW_PLATFORM_VERSION = "NEW_PLATFORM_VERSION",
    RATE_LIMITS = "RATE_LIMITS"
}
export declare const TriggerTypeTranslationMap: Map<TriggerType, string>;
export {};
