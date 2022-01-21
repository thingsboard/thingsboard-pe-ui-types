import { ContactBased } from '@shared/models/contact-based.model';
import { TenantId } from './id/tenant-id';
import { TenantProfileId } from '@shared/models/id/tenant-profile-id';
import { BaseData } from '@shared/models/base-data';
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
    maxIntegrations: number;
    maxConverters: number;
    maxSchedulerEvents: number;
    maxResourcesInBytes: number;
    maxOtaPackagesInBytes: number;
    transportTenantMsgRateLimit?: string;
    transportTenantTelemetryMsgRateLimit?: string;
    transportTenantTelemetryDataPointsRateLimit?: string;
    transportDeviceMsgRateLimit?: string;
    transportDeviceTelemetryMsgRateLimit?: string;
    transportDeviceTelemetryDataPointsRateLimit?: string;
    maxTransportMessages: number;
    maxTransportDataPoints: number;
    maxREExecutions: number;
    maxJSExecutions: number;
    maxDPStorageDays: number;
    maxRuleNodeExecutionsPerMessage: number;
    maxEmails: number;
    maxSms: number;
    maxCreatedAlarms: number;
    defaultStorageTtlDays: number;
    alarmsTtlDays: number;
    rpcTtlDays: number;
}
export declare type TenantProfileConfigurations = DefaultTenantProfileConfiguration;
export interface TenantProfileConfiguration extends TenantProfileConfigurations {
    type: TenantProfileType;
}
export declare function createTenantProfileConfiguration(type: TenantProfileType): TenantProfileConfiguration;
export interface TenantProfileData {
    configuration: TenantProfileConfiguration;
}
export interface TenantProfile extends BaseData<TenantProfileId> {
    name: string;
    description?: string;
    default?: boolean;
    isolatedTbCore?: boolean;
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
