import { BaseData } from '@shared/models/base-data';
import { DeviceId } from './id/device-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { DeviceCredentialsId } from '@shared/models/id/device-credentials-id';
import { EntitySearchQuery } from '@shared/models/relation.models';
import { DeviceProfileId } from '@shared/models/id/device-profile-id';
import { RuleChainId } from '@shared/models/id/rule-chain-id';
import { EntityInfoData } from '@shared/models/entity.models';
import { FilterPredicateValue, KeyFilter } from '@shared/models/query/query.models';
import { TimeUnit } from '@shared/models/time/time.models';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { OtaPackageId } from '@shared/models/id/ota-package-id';
import { DashboardId } from '@shared/models/id/dashboard-id';
import { DataType } from '@shared/models/constants';
import { PowerMode } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
export declare enum DeviceProfileType {
    DEFAULT = "DEFAULT",
    SNMP = "SNMP"
}
export declare enum DeviceTransportType {
    DEFAULT = "DEFAULT",
    MQTT = "MQTT",
    COAP = "COAP",
    LWM2M = "LWM2M",
    SNMP = "SNMP"
}
export declare enum TransportPayloadType {
    JSON = "JSON",
    PROTOBUF = "PROTOBUF"
}
export declare enum CoapTransportDeviceType {
    DEFAULT = "DEFAULT",
    EFENTO = "EFENTO"
}
export declare enum DeviceProvisionType {
    DISABLED = "DISABLED",
    ALLOW_CREATE_NEW_DEVICES = "ALLOW_CREATE_NEW_DEVICES",
    CHECK_PRE_PROVISIONED_DEVICES = "CHECK_PRE_PROVISIONED_DEVICES"
}
export interface DeviceConfigurationFormInfo {
    hasProfileConfiguration: boolean;
    hasDeviceConfiguration: boolean;
}
export declare const deviceProfileTypeTranslationMap: Map<DeviceProfileType, string>;
export declare const deviceProfileTypeConfigurationInfoMap: Map<DeviceProfileType, DeviceConfigurationFormInfo>;
export declare const deviceTransportTypeTranslationMap: Map<DeviceTransportType, string>;
export declare const deviceProvisionTypeTranslationMap: Map<DeviceProvisionType, string>;
export declare const deviceTransportTypeHintMap: Map<DeviceTransportType, string>;
export declare const transportPayloadTypeTranslationMap: Map<TransportPayloadType, string>;
export declare const defaultTelemetrySchema: string;
export declare const defaultAttributesSchema: string;
export declare const defaultRpcRequestSchema: string;
export declare const defaultRpcResponseSchema: string;
export declare const coapDeviceTypeTranslationMap: Map<CoapTransportDeviceType, string>;
export declare const deviceTransportTypeConfigurationInfoMap: Map<DeviceTransportType, DeviceConfigurationFormInfo>;
export interface DefaultDeviceProfileConfiguration {
    [key: string]: any;
}
export declare type DeviceProfileConfigurations = DefaultDeviceProfileConfiguration;
export interface DeviceProfileConfiguration extends DeviceProfileConfigurations {
    type: DeviceProfileType;
}
export interface DefaultDeviceProfileTransportConfiguration {
    [key: string]: any;
}
export interface MqttDeviceProfileTransportConfiguration {
    deviceTelemetryTopic?: string;
    deviceAttributesTopic?: string;
    transportPayloadTypeConfiguration?: {
        transportPayloadType?: TransportPayloadType;
        enableCompatibilityWithJsonPayloadFormat?: boolean;
        useJsonPayloadFormatForDefaultDownlinkTopics?: boolean;
    };
    [key: string]: any;
}
export interface CoapClientSetting {
    powerMode?: PowerMode | null;
    edrxCycle?: number;
    pagingTransmissionWindow?: number;
    psmActivityTimer?: number;
}
export interface CoapDeviceProfileTransportConfiguration {
    coapDeviceTypeConfiguration?: {
        coapDeviceType?: CoapTransportDeviceType;
        transportPayloadTypeConfiguration?: {
            transportPayloadType?: TransportPayloadType;
            [key: string]: any;
        };
    };
    clientSettings?: CoapClientSetting;
}
export interface Lwm2mDeviceProfileTransportConfiguration {
    [key: string]: any;
}
export interface SnmpDeviceProfileTransportConfiguration {
    timeoutMs?: number;
    retries?: number;
    communicationConfigs?: SnmpCommunicationConfig[];
}
export declare enum SnmpSpecType {
    TELEMETRY_QUERYING = "TELEMETRY_QUERYING",
    CLIENT_ATTRIBUTES_QUERYING = "CLIENT_ATTRIBUTES_QUERYING",
    SHARED_ATTRIBUTES_SETTING = "SHARED_ATTRIBUTES_SETTING",
    TO_DEVICE_RPC_REQUEST = "TO_DEVICE_RPC_REQUEST"
}
export declare const SnmpSpecTypeTranslationMap: Map<SnmpSpecType, string>;
export interface SnmpCommunicationConfig {
    spec: SnmpSpecType;
    mappings: SnmpMapping[];
    queryingFrequencyMs?: number;
}
export interface SnmpMapping {
    oid: string;
    key: string;
    dataType: DataType;
}
export declare type DeviceProfileTransportConfigurations = DefaultDeviceProfileTransportConfiguration & MqttDeviceProfileTransportConfiguration & CoapDeviceProfileTransportConfiguration & Lwm2mDeviceProfileTransportConfiguration & SnmpDeviceProfileTransportConfiguration;
export interface DeviceProfileTransportConfiguration extends DeviceProfileTransportConfigurations {
    type: DeviceTransportType;
}
export interface DeviceProvisionConfiguration {
    type: DeviceProvisionType;
    provisionDeviceSecret?: string;
    provisionDeviceKey?: string;
}
export declare function createDeviceProfileConfiguration(type: DeviceProfileType): DeviceProfileConfiguration;
export declare function createDeviceConfiguration(type: DeviceProfileType): DeviceConfiguration;
export declare function createDeviceProfileTransportConfiguration(type: DeviceTransportType): DeviceProfileTransportConfiguration;
export declare function createDeviceTransportConfiguration(type: DeviceTransportType): DeviceTransportConfiguration;
export declare enum AlarmConditionType {
    SIMPLE = "SIMPLE",
    DURATION = "DURATION",
    REPEATING = "REPEATING"
}
export declare const AlarmConditionTypeTranslationMap: Map<AlarmConditionType, string>;
export interface AlarmConditionSpec {
    type?: AlarmConditionType;
    unit?: TimeUnit;
    predicate: FilterPredicateValue<number>;
}
export interface AlarmCondition {
    condition: Array<KeyFilter>;
    spec?: AlarmConditionSpec;
}
export declare enum AlarmScheduleType {
    ANY_TIME = "ANY_TIME",
    SPECIFIC_TIME = "SPECIFIC_TIME",
    CUSTOM = "CUSTOM"
}
export declare const AlarmScheduleTypeTranslationMap: Map<AlarmScheduleType, string>;
export interface AlarmSchedule {
    type: AlarmScheduleType;
    timezone?: string;
    daysOfWeek?: number[];
    startsOn?: number;
    endsOn?: number;
    items?: CustomTimeSchedulerItem[];
}
export interface CustomTimeSchedulerItem {
    enabled: boolean;
    dayOfWeek: number;
    startsOn: number;
    endsOn: number;
}
export interface AlarmRule {
    condition: AlarmCondition;
    alarmDetails?: string;
    dashboardId?: DashboardId;
    schedule?: AlarmSchedule;
}
export declare function alarmRuleValidator(control: AbstractControl): ValidationErrors | null;
export interface DeviceProfileAlarm {
    id: string;
    alarmType: string;
    createRules: {
        [severity: string]: AlarmRule;
    };
    clearRule?: AlarmRule;
    propagate?: boolean;
    propagateToOwner?: boolean;
    propagateToOwnerHierarchy?: boolean;
    propagateToTenant?: boolean;
    propagateRelationTypes?: Array<string>;
}
export declare function deviceProfileAlarmValidator(control: AbstractControl): ValidationErrors | null;
export interface DeviceProfileData {
    configuration: DeviceProfileConfiguration;
    transportConfiguration: DeviceProfileTransportConfiguration;
    alarms?: Array<DeviceProfileAlarm>;
    provisionConfiguration?: DeviceProvisionConfiguration;
}
export interface DeviceProfile extends BaseData<DeviceProfileId> {
    tenantId?: TenantId;
    name: string;
    description?: string;
    default?: boolean;
    type: DeviceProfileType;
    image?: string;
    transportType: DeviceTransportType;
    provisionType: DeviceProvisionType;
    provisionDeviceKey?: string;
    defaultRuleChainId?: RuleChainId;
    defaultDashboardId?: DashboardId;
    defaultQueueName?: string;
    firmwareId?: OtaPackageId;
    softwareId?: OtaPackageId;
    profileData: DeviceProfileData;
}
export interface DeviceProfileInfo extends EntityInfoData {
    type: DeviceProfileType;
    transportType: DeviceTransportType;
    image?: string;
    defaultDashboardId?: DashboardId;
}
export interface DefaultDeviceConfiguration {
    [key: string]: any;
}
export declare type DeviceConfigurations = DefaultDeviceConfiguration;
export interface DeviceConfiguration extends DeviceConfigurations {
    type: DeviceProfileType;
}
export interface DefaultDeviceTransportConfiguration {
    [key: string]: any;
}
export interface MqttDeviceTransportConfiguration {
    [key: string]: any;
}
export interface CoapDeviceTransportConfiguration {
    powerMode?: PowerMode | null;
    edrxCycle?: number;
    pagingTransmissionWindow?: number;
    psmActivityTimer?: number;
}
export interface Lwm2mDeviceTransportConfiguration {
    powerMode?: PowerMode | null;
    edrxCycle?: number;
    pagingTransmissionWindow?: number;
    psmActivityTimer?: number;
}
export declare enum SnmpDeviceProtocolVersion {
    V1 = "V1",
    V2C = "V2C",
    V3 = "V3"
}
export declare enum SnmpAuthenticationProtocol {
    SHA_1 = "SHA_1",
    SHA_224 = "SHA_224",
    SHA_256 = "SHA_256",
    SHA_384 = "SHA_384",
    SHA_512 = "SHA_512",
    MD5 = "MD%"
}
export declare const SnmpAuthenticationProtocolTranslationMap: Map<SnmpAuthenticationProtocol, string>;
export declare enum SnmpPrivacyProtocol {
    DES = "DES",
    AES_128 = "AES_128",
    AES_192 = "AES_192",
    AES_256 = "AES_256"
}
export declare const SnmpPrivacyProtocolTranslationMap: Map<SnmpPrivacyProtocol, string>;
export interface SnmpDeviceTransportConfiguration {
    host?: string;
    port?: number;
    protocolVersion?: SnmpDeviceProtocolVersion;
    community?: string;
    username?: string;
    securityName?: string;
    contextName?: string;
    authenticationProtocol?: SnmpAuthenticationProtocol;
    authenticationPassphrase?: string;
    privacyProtocol?: SnmpPrivacyProtocol;
    privacyPassphrase?: string;
    engineId?: string;
}
export declare type DeviceTransportConfigurations = DefaultDeviceTransportConfiguration & MqttDeviceTransportConfiguration & CoapDeviceTransportConfiguration & Lwm2mDeviceTransportConfiguration & SnmpDeviceTransportConfiguration;
export interface DeviceTransportConfiguration extends DeviceTransportConfigurations {
    type: DeviceTransportType;
}
export interface DeviceData {
    configuration: DeviceConfiguration;
    transportConfiguration: DeviceTransportConfiguration;
}
export interface Device extends BaseData<DeviceId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    label: string;
    firmwareId?: OtaPackageId;
    softwareId?: OtaPackageId;
    deviceProfileId?: DeviceProfileId;
    deviceData?: DeviceData;
    additionalInfo?: any;
}
export declare enum DeviceCredentialsType {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    X509_CERTIFICATE = "X509_CERTIFICATE",
    MQTT_BASIC = "MQTT_BASIC",
    LWM2M_CREDENTIALS = "LWM2M_CREDENTIALS"
}
export declare const credentialTypeNames: Map<DeviceCredentialsType, string>;
export declare const credentialTypesByTransportType: Map<DeviceTransportType, DeviceCredentialsType[]>;
export interface DeviceCredentials extends BaseData<DeviceCredentialsId> {
    deviceId: DeviceId;
    credentialsType: DeviceCredentialsType;
    credentialsId: string;
    credentialsValue: string;
}
export interface DeviceCredentialMQTTBasic {
    clientId: string;
    userName: string;
    password: string;
}
export declare function getDeviceCredentialMQTTDefault(): DeviceCredentialMQTTBasic;
export interface DeviceSearchQuery extends EntitySearchQuery {
    deviceTypes: Array<string>;
}
export interface ClaimRequest {
    secretKey: string;
}
export declare enum ClaimResponse {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE",
    CLAIMED = "CLAIMED"
}
export interface ClaimResult {
    device: Device;
    response: ClaimResponse;
}
export declare const dayOfWeekTranslations: string[];
export declare function getDayString(day: number): string;
export declare function timeOfDayToUTCTimestamp(date: Date | number): number;
export declare function utcTimestampToTimeOfDay(time?: number): Date;
export declare function getAlarmScheduleRangeText(startsOn: Date | number, endsOn: Date | number): string;
