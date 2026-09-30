import { BaseData, GroupEntityInfo } from '@shared/models/base-data';
import { AgentId } from '@shared/models/id/agent-id';
import { AgentProfileId } from '@shared/models/id/agent-profile-id';
import { AgentApplicationId } from '@shared/models/id/agent-application-id';
import { AgentAppEventId } from '@shared/models/id/agent-app-event-id';
import { AgentAppUnitId } from '@shared/models/id/agent-app-unit-id';
import { AgentAppProfileId } from '@shared/models/id/agent-app-profile-id';
import { AgentBulkActionId } from '@shared/models/id/agent-bulk-action-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityType } from '@shared/models/entity-type.models';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
export declare enum AgentApplicationType {
    GENERIC = "GENERIC",
    EDGE = "EDGE",
    GATEWAY = "GATEWAY"
}
export declare const agentApplicationTypeTranslationMap: Map<AgentApplicationType, string>;
export declare enum AgentApplicationOrigin {
    INSTALLED = "INSTALLED",
    DISCOVERED = "DISCOVERED",
    AUTO_PROVISIONED = "AUTO_PROVISIONED"
}
export declare const agentApplicationOriginTranslationMap: Map<AgentApplicationOrigin, string>;
export declare enum AgentAppEventActionType {
    INSTALL = "INSTALL",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    RESTART = "RESTART",
    ROLLBACK = "ROLLBACK",
    UPGRADE = "UPGRADE",
    AGENT_UPGRADE = "AGENT_UPGRADE"
}
export declare const agentAppEventActionTypeTranslationMap: Map<AgentAppEventActionType, string>;
export declare const isAgentScopedAppEventActionType: (actionType: AgentAppEventActionType) => boolean;
export declare enum AgentProcessingStatus {
    PENDING = "PENDING",
    QUEUED = "QUEUED",
    PROCESSING = "PROCESSING",
    FINISHED = "FINISHED",
    ERROR = "ERROR",
    START_FAILED = "START_FAILED"
}
export declare const agentProcessingStatusTranslationMap: Map<AgentProcessingStatus, string>;
export declare enum ProcessingStartStatus {
    DELIVERY_FAIL = "DELIVERY_FAIL",
    PENDING = "PENDING",
    DELIVERED = "DELIVERED"
}
export declare const processingStartStatusTranslationMap: Map<ProcessingStartStatus, string>;
export declare enum AgentAppUnitType {
    CONTAINER = "CONTAINER",
    VOLUME = "VOLUME",
    NETWORK = "NETWORK"
}
export declare const agentAppUnitTypeTranslationMap: Map<AgentAppUnitType, string>;
export declare enum AgentAppStepType {
    COMPOSE_TEMPLATE = "COMPOSE_TEMPLATE",
    COMPOSE = "COMPOSE",
    COMPOSE_START = "COMPOSE_START",
    COMPOSE_DOWN = "COMPOSE_DOWN",
    ROLLBACK = "ROLLBACK",
    BACKUP_VOLUME = "BACKUP_VOLUME",
    BACKUP_VOLUME_REMOVE = "BACKUP_VOLUME_REMOVE",
    COMPOSE_RESTART = "COMPOSE_RESTART",
    RUN_JOB = "RUN_JOB",
    AGENT_PREPARE = "AGENT_PREPARE",
    AGENT_FINALIZE = "AGENT_FINALIZE"
}
export declare enum AgentAppConfigType {
    DOCKER_COMPOSE = "DOCKER_COMPOSE"
}
export declare enum AgentAppArgumentSource {
    AGENT = "AGENT",
    OWNER = "OWNER",
    RELATED_ENTITY = "RELATED_ENTITY",
    TENANT = "TENANT",
    DEVICE = "DEVICE",
    ASSET = "ASSET",
    CUSTOMER = "CUSTOMER",
    EDGE = "EDGE"
}
export declare const agentAppArgumentSourceTranslationMap: Map<AgentAppArgumentSource, string>;
export interface AgentAppArgumentSourceEntityParams {
    title: string;
    entityType: EntityType;
}
export declare const agentAppArgumentSourceEntityTypeMap: Map<AgentAppArgumentSource, AgentAppArgumentSourceEntityParams>;
export declare enum AgentAppArgumentValueType {
    ATTRIBUTE = "ATTRIBUTE",
    LATEST_TELEMETRY = "LATEST_TELEMETRY"
}
export declare const agentAppArgumentValueTypeTranslationMap: Map<AgentAppArgumentValueType, string>;
export declare enum AgentAppArgumentFormat {
    STRING = "STRING",
    JSON = "JSON"
}
export declare const agentAppArgumentFormatTranslationMap: Map<AgentAppArgumentFormat, string>;
export interface AgentAppArgument {
    name: string;
    sourceType: AgentAppArgumentSource;
    sourceEntityId?: EntityId;
    valueType: AgentAppArgumentValueType;
    scope?: AttributeScope;
    key: string;
    defaultValue?: string;
    format?: AgentAppArgumentFormat;
}
export declare enum AgentProvisionType {
    DISABLED = "DISABLED",
    NO_AUTO_INSTALL = "NO_AUTO_INSTALL",
    AUTO_INSTALL_PER_APP_TYPE = "AUTO_INSTALL_PER_APP_TYPE",
    AUTO_INSTALL_PER_APP_PROFILE = "AUTO_INSTALL_PER_APP_PROFILE"
}
export declare const agentProvisionTypeTranslationMap: Map<AgentProvisionType, string>;
export declare const agentProvisionTypeDescriptionMap: Map<AgentProvisionType, string>;
export declare const agentProvisionTypeSupportsAppAutoInstall: (type: AgentProvisionType) => boolean;
export declare enum AgentBulkActionStatus {
    QUEUED = "QUEUED",
    IN_PROGRESS = "IN_PROGRESS",
    STARTED = "STARTED",
    START_FAILED = "START_FAILED"
}
export declare const agentBulkActionStatusTranslationMap: Map<AgentBulkActionStatus, string>;
export interface Agent extends BaseData<AgentId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name?: string;
    description?: string;
    routingKey?: string;
    secret?: string;
    agentProfileId?: AgentProfileId;
    version?: number;
}
export interface AgentInfo extends Agent, GroupEntityInfo<AgentId> {
    customerTitle: string;
    customerIsPublic: boolean;
    agentProfileName?: string;
    active?: boolean;
    agentVersion?: string;
    upgradeTargetImageRef?: string;
}
export interface AgentInstructions {
    instructions: string;
}
export interface AgentProfile extends BaseData<AgentProfileId> {
    tenantId?: TenantId;
    name: string;
    description?: string;
    provisionKey?: string;
    provisionSecret?: string;
    provisionType?: AgentProvisionType;
    default?: boolean;
    version?: number;
}
export type AgentProfileInfo = Omit<AgentProfile, 'provisionKey' | 'provisionSecret'>;
export interface AgentAppConfig {
    type: AgentAppConfigType;
    arguments?: AgentAppArgument[];
}
export interface DockerComposeConfig extends AgentAppConfig {
    compose: any;
    composeType?: string;
}
export declare function dockerComposeConfig(source: {
    config?: AgentAppConfig;
} | null | undefined): DockerComposeConfig | undefined;
export interface AgentApplication extends BaseData<AgentApplicationId> {
    tenantId?: TenantId;
    agentId: AgentId;
    name?: string;
    appType: AgentApplicationType;
    templateVersion?: string;
    desiredTemplateVersion?: string;
    config?: AgentAppConfig;
    version?: number;
    projectName?: string;
    origin?: AgentApplicationOrigin;
    applicationProfileId?: AgentAppProfileId;
    profileConfigVersion?: number;
}
export interface AgentApplicationSaveRequest extends AgentApplication {
    relatedEntityIdNext?: EntityId | null;
    relatedEntityIdPrev?: EntityId | null;
}
export interface AgentApplicationInfo extends AgentApplication {
    currentVersion?: string;
    nextVersion?: string;
    profileConfigOutdated?: boolean;
    profileName?: string;
    profileTemplateVersion?: string;
    agentName?: string;
    relatedEntityId?: EntityId;
}
export interface StepField<T = any> {
    value: T;
    userChoice: boolean;
}
export interface AgentAppStep {
    id: string;
    title: string;
    type: AgentAppStepType;
    templateOnly?: boolean;
    nextId?: string;
    composeTemplates?: Record<string, any>;
    state?: {
        [field: string]: StepField;
    };
}
export interface AgentAppStepState {
    [key: string]: any;
}
export interface AgentAppEvent extends BaseData<AgentAppEventId> {
    tenantId?: TenantId;
    applicationId?: AgentApplicationId;
    agentId?: AgentId;
    applicationName?: string;
    actionType: AgentAppEventActionType;
    startStatus: ProcessingStartStatus;
    processingStatus: AgentProcessingStatus;
    currentStepId?: string;
    currentActivity?: string;
    errorMessage?: string;
    updatedTime: number;
    stepStates?: {
        [stepId: string]: AgentAppStepState;
    };
    bulkActionId?: string;
    resolvedArguments?: {
        [key: string]: string;
    };
}
export interface AgentAppEventInfo extends AgentAppEvent {
    applicationName?: string;
    agentName?: string;
}
export interface AgentAppInstallResponse {
    application: AgentApplication;
    event: AgentAppEvent;
}
export interface AgentAppUnit extends BaseData<AgentAppUnitId> {
    agentApplicationId: AgentApplicationId;
    identifier: string;
    type: AgentAppUnitType;
    /** Client-side enrichment: SERVER_SCOPE attribute, populated by the UI. */
    image?: string;
    /** Client-side enrichment: SERVER_SCOPE attribute, populated by the UI. */
    state?: string;
}
export interface AgentAppTemplate {
    tenantId?: TenantId;
    appType: AgentApplicationType;
    configType?: AgentAppConfigType;
    currentVersion: string;
    previousVersion?: string;
    nextVersion?: string;
    startSteps?: AgentAppStep[];
    upgradeSteps?: AgentAppStep[];
    deleteSteps?: AgentAppStep[];
    rollbackSteps?: AgentAppStep[];
    restartSteps?: AgentAppStep[];
    version?: number;
}
export interface AgentAppProfile extends BaseData<AgentAppProfileId> {
    tenantId?: TenantId;
    name: string;
    description?: string;
    appType: AgentApplicationType;
    templateVersion: string;
    config?: AgentAppConfig;
    version?: number;
}
export interface AgentAppProfileInfo extends AgentAppProfile {
    templateCurrentVersion?: string;
}
export interface VirtualAgentAppProfile extends AgentAppProfile {
    virtual: true;
    defaultComposeType?: string;
}
export declare function isVirtualAppProfile(profile: AgentAppProfile | null | undefined): profile is VirtualAgentAppProfile;
export interface AgentAppProfileRelationInfo extends AgentAppProfileInfo {
    agentProfileId?: AgentProfileId;
    assignedApplicationsCount?: number;
    additionalInfo?: any;
}
export interface AgentBulkAction extends BaseData<AgentBulkActionId> {
    tenantId?: TenantId;
    agentProfileId: string;
    applicationProfileId: string;
    actionType: AgentAppEventActionType;
    status: AgentBulkActionStatus;
    errorMsg?: string;
    processingStartedTime?: number;
    total: number;
    submitted: number;
    skipCounts?: {
        [reason: string]: number;
    };
}
export interface AgentBulkActionEventStats {
    countsByStatus: {
        [status in AgentProcessingStatus]?: number;
    };
    total: number;
}
export interface AgentAppEventRequest {
    actionType: AgentAppEventActionType;
    application?: AgentApplication;
    stepInputs?: {
        [stepId: string]: AgentAppStepState;
    };
    bulkActionId?: string;
    skipProfileRefetch?: boolean;
    relatedEntityId?: EntityId;
}
export interface BulkOperationRequest {
    actionType: AgentAppEventActionType;
    stepInputs?: {
        [stepId: string]: AgentAppStepState;
    };
}
export interface BulkOperationPreview {
    total: number;
    eligible: number;
    skippedCountsByReason: {
        [reason: string]: number;
    };
    skippedSample: SkippedApp[];
}
export interface SkippedApp {
    agentId?: AgentId;
    agentName?: string;
    applicationId: AgentApplicationId;
    applicationName?: string;
    reason: SkipReason;
    msg?: string;
}
export declare enum SkipReason {
    VERSION_MISMATCH = "VERSION_MISMATCH",
    ACTIVE_EVENT = "ACTIVE_EVENT",
    RATE_LIMIT_EXCEEDED = "RATE_LIMIT_EXCEEDED",
    ERROR = "ERROR"
}
export interface BulkOperationResult {
    total: number;
    submitted: number;
    skipped: SkippedApp[];
}
