import { ContactBased } from '@shared/models/contact-based.model';
import { TenantId } from './id/tenant-id';
import { TenantProfileId } from '@shared/models/id/tenant-profile-id';
import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { QueueInfo } from '@shared/models/queue.models';
export declare enum TenantProfileType {
    DEFAULT = "DEFAULT"
}
export interface DefaultTenantProfileConfiguration {
    maxDevices: number;
    maxAssets: number;
    maxCustomers: number;
    maxUsers: number;
    maxDashboards: number;
    maxRuleChains: number;
    maxEdges: number;
    maxIntegrations: number;
    maxConverters: number;
    maxSchedulerEvents: number;
    maxResourcesInBytes: number;
    maxOtaPackagesInBytes: number;
    maxResourceSize: number;
    transportTenantMsgRateLimit?: string;
    transportTenantTelemetryMsgRateLimit?: string;
    transportTenantTelemetryDataPointsRateLimit?: string;
    transportDeviceMsgRateLimit?: string;
    transportDeviceTelemetryMsgRateLimit?: string;
    transportDeviceTelemetryDataPointsRateLimit?: string;
    transportGatewayMsgRateLimit?: string;
    transportGatewayTelemetryMsgRateLimit?: string;
    transportGatewayTelemetryDataPointsRateLimit?: string;
    transportGatewayDeviceMsgRateLimit?: string;
    transportGatewayDeviceTelemetryMsgRateLimit?: string;
    transportGatewayDeviceTelemetryDataPointsRateLimit?: string;
    integrationMsgsPerTenantRateLimit?: string;
    integrationMsgsPerDeviceRateLimit?: string;
    integrationMsgsPerAssetRateLimit?: string;
    tenantEntityExportRateLimit?: string;
    tenantEntityImportRateLimit?: string;
    tenantNotificationRequestsRateLimit?: string;
    tenantNotificationRequestsPerRuleRateLimit?: string;
    maxTransportMessages: number;
    maxTransportDataPoints: number;
    maxREExecutions: number;
    maxJSExecutions: number;
    maxTbelExecutions: number;
    maxDPStorageDays: number;
    maxRuleNodeExecutionsPerMessage: number;
    maxEmails: number;
    maxSms: number;
    smsEnabled: boolean;
    maxCreatedAlarms: number;
    maxDebugModeDurationMinutes: number;
    tenantServerRestLimitsConfiguration: string;
    customerServerRestLimitsConfiguration: string;
    maxWsSessionsPerTenant: number;
    maxWsSessionsPerCustomer: number;
    maxWsSessionsPerRegularUser: number;
    maxWsSessionsPerPublicUser: number;
    wsMsgQueueLimitPerSession: number;
    maxWsSubscriptionsPerTenant: number;
    maxWsSubscriptionsPerCustomer: number;
    maxWsSubscriptionsPerRegularUser: number;
    maxWsSubscriptionsPerPublicUser: number;
    wsUpdatesPerSessionRateLimit: string;
    cassandraWriteQueryTenantCoreRateLimits: string;
    cassandraReadQueryTenantCoreRateLimits: string;
    cassandraWriteQueryTenantRuleEngineRateLimits: string;
    cassandraReadQueryTenantRuleEngineRateLimits: string;
    edgeEventRateLimits?: string;
    edgeEventRateLimitsPerEdge?: string;
    edgeUplinkMessagesRateLimits?: string;
    edgeUplinkMessagesRateLimitsPerEdge?: string;
    defaultStorageTtlDays: number;
    alarmsTtlDays: number;
    rpcTtlDays: number;
    queueStatsTtlDays: number;
    ruleEngineExceptionsTtlDays: number;
    blobEntityTtlDays: number;
    maxCalculatedFieldsPerEntity: number;
    maxArgumentsPerCF: number;
    maxDataPointsPerRollingArg: number;
    maxStateSizeInKBytes: number;
    maxSingleValueArgumentSizeInKBytes: number;
    calculatedFieldDebugEventsRateLimit: string;
}
export type TenantProfileConfigurations = DefaultTenantProfileConfiguration;
export interface TenantProfileConfiguration extends TenantProfileConfigurations {
    type: TenantProfileType;
}
export declare function createTenantProfileConfiguration(type: TenantProfileType): TenantProfileConfiguration;
export interface TenantProfileData {
    configuration: TenantProfileConfiguration;
    queueConfiguration?: Array<QueueInfo>;
}
export interface TenantProfile extends BaseData<TenantProfileId>, ExportableEntity<TenantProfileId> {
    name: string;
    description?: string;
    default?: boolean;
    isolatedTbRuleEngine?: boolean;
    profileData?: TenantProfileData;
}
export interface Tenant extends ContactBased<TenantId> {
    title: string;
    region: string;
    tenantProfileId: TenantProfileId;
    additionalInfo?: any;
}
export interface TenantInfo extends Tenant {
    tenantProfileName: string;
}
