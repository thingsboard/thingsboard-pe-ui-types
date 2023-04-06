import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { IntegrationId } from '@shared/models/id/integration-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { ActivatedRouteSnapshot } from '@angular/router';
export declare enum IntegrationType {
    MQTT = "MQTT",
    HTTP = "HTTP",
    TTN = "TTN",
    AWS_IOT = "AWS_IOT",
    TCP = "TCP",
    SIGFOX = "SIGFOX",
    TTI = "TTI",
    CHIRPSTACK = "CHIRPSTACK",
    AZURE_EVENT_HUB = "AZURE_EVENT_HUB",
    AZURE_SERVICE_BUS = "AZURE_SERVICE_BUS",
    COAP = "COAP",
    OPC_UA = "OPC_UA",
    APACHE_PULSAR = "APACHE_PULSAR",
    AWS_KINESIS = "AWS_KINESIS",
    AWS_SQS = "AWS_SQS",
    AZURE_IOT_HUB = "AZURE_IOT_HUB",
    CUSTOM = "CUSTOM",
    IBM_WATSON_IOT = "IBM_WATSON_IOT",
    KAFKA = "KAFKA",
    LORIOT = "LORIOT",
    OCEANCONNECT = "OCEANCONNECT",
    PUB_SUB = "PUB_SUB",
    RABBITMQ = "RABBITMQ",
    THINGPARK = "THINGPARK",
    TMOBILE_IOT_CDP = "TMOBILE_IOT_CDP",
    TPE = "TPE",
    UDP = "UDP",
    TUYA = "TUYA"
}
export declare enum CoapSecurityMode {
    NO_SECURE = "NO_SECURE",
    DTLS = "DTLS",
    MIXED = "MIXED"
}
export declare const coapSecurityModeTranslationsMap: Map<CoapSecurityMode, string>;
export interface IntegrationTypeInfo {
    name: string;
    description: string;
    icon: string;
    tags?: string[];
    remote?: boolean;
    checkConnection?: boolean;
    hideDownlink?: boolean;
}
export declare const integrationTypeInfoMap: Map<IntegrationType, IntegrationTypeInfo>;
export type IntegrationConfiguration = ApachePulsarIntegration | HttpIntegration | ThingParkIntegration | LoriotIntegration | MqttIntegration | AwsIotIntegration | AwsSqsIntegration | AwsKinesisIntegration | IbmWatsonIotIntegration | TtnIntegration | ChipStackIntegration | AzureEventHubIntegration | AzureIotHubIntegration | OpcUaIntegration | UpdIntegration | TcpIntegration | KafkaIntegration | RabbitMqIntegration | PubSubIntegration | CoapIntegration | TuyaIntegration | CustomIntegration;
export declare function getIntegrationHelpLink(integration: Integration): string;
export interface IntegrationMetaData {
    metadata?: {
        [k: string]: string;
    };
}
export interface IntegrationBasic extends BaseData<IntegrationId>, ExportableEntity<IntegrationId> {
    type: IntegrationType;
    debugMode: boolean;
    enabled: boolean;
    remote: boolean;
    allowCreateDevicesOrAssets: boolean;
    edgeTemplate: boolean;
}
export interface Integration extends IntegrationBasic {
    configuration: IntegrationConfiguration & IntegrationMetaData;
    defaultConverterId: ConverterId;
    downlinkConverterId?: ConverterId;
    routingKey: string;
    secret: string;
    additionalInfo?: any;
}
export interface IntegrationInfo extends IntegrationBasic {
    status?: IntegrationStatus;
    stats: Array<number>;
}
export interface IntegrationStatus {
    success: boolean;
    serviceId?: string;
    error?: any;
}
export interface IntegrationParams extends EntityGroupParams {
    integrationScope: string;
}
export declare enum IntegrationSubType {
    CORE = "CORE",
    EDGE = "EDGE"
}
export declare function resolveIntegrationParams(route: ActivatedRouteSnapshot): IntegrationParams;
export declare enum MqttQos {
    AT_MOST_ONE = 0,
    AT_LEAST_ONCE = 1,
    EXACTLY_ONCE = 2
}
export declare const MqttQosTranslation: Map<MqttQos, string>;
export interface MqttTopicFilter {
    filter: string;
    qos: MqttQos;
}
export declare enum TcpBinaryByteOrder {
    LITTLE_ENDIAN = "LITTLE_ENDIAN",
    BIG_ENDIAN = "BIG_ENDIAN"
}
export declare enum TcpTextMessageSeparator {
    SYSTEM_LINE_SEPARATOR = "SYSTEM_LINE_SEPARATOR",
    NUL_DELIMITER = "NUL_DELIMITER"
}
export declare enum IntegrationCredentialType {
    Anonymous = "anonymous",
    Basic = "basic",
    CertPEM = "cert.PEM",
    Token = "token",
    SAS = "sas"
}
export interface Credentials {
    type: IntegrationCredentialType;
}
export interface TokenCredentials extends Credentials {
    token: string;
}
export interface CertPemCredentials extends Credentials {
    caCertFileName: string;
    caCert: string;
    certFileName: string;
    cert: string;
    privateKeyFileName: string;
    privateKey: string;
    privateKeyPassword?: string;
}
export interface SasCredentials extends Credentials {
    caCertFileName: string;
    caCert: string;
    sasKey: string;
}
export interface BasicCredentials extends Credentials {
    username: string;
    password: string;
}
export declare const IntegrationCredentialTypeTranslation: Map<IntegrationCredentialType, string>;
export declare enum TcpHandlerConfigurationType {
    TEXT = "TEXT",
    BINARY = "BINARY",
    JSON = "JSON"
}
export declare enum UpdHandlerConfigurationType {
    HEX = "HEX"
}
export type HandlerConfigurationType = TcpHandlerConfigurationType | UpdHandlerConfigurationType;
export declare const HandlerConfigurationType: {
    HEX: UpdHandlerConfigurationType.HEX;
    TEXT: TcpHandlerConfigurationType.TEXT;
    BINARY: TcpHandlerConfigurationType.BINARY;
    JSON: TcpHandlerConfigurationType.JSON;
};
export declare const HandlerConfigurationTypeTranslation: Map<HandlerConfigurationType, string>;
export declare enum IdentityType {
    Anonymous = "anonymous",
    Username = "username"
}
export interface AnonymousIdentityType {
    type: IdentityType;
}
export interface UsernameIdentityType extends AnonymousIdentityType {
    username: string;
    password: string;
}
export declare const IdentityTypeTranslation: Map<IdentityType, string>;
export declare enum OpcSecurityType {
    Basic128Rsa15 = "Basic128Rsa15",
    Basic256 = "Basic256",
    Basic256Sha256 = "Basic256Sha256",
    None = "None"
}
export declare enum OpcKeystoreType {
    PKCS12 = "PKCS12",
    JKS = "JKS"
}
export declare enum OpcMappingType {
    ID = "ID",
    FQN = "FQN"
}
export declare const OpcMappingTypeTranslation: Map<OpcMappingType, string>;
export declare enum InitialPositionInStream {
    LATEST = "LATEST",
    TRIM_HORIZON = "TRIM_HORIZON",
    AT_TIMESTAMP = "AT_TIMESTAMP"
}
export declare const InitialPositionInStreamTranslation: Map<InitialPositionInStream, string>;
export interface Topics {
    topicFilters: Array<MqttTopicFilter>;
    downlinkTopicPattern: string;
}
export interface ApachePulsarIntegration {
    clientConfiguration: {
        serviceUrl: string;
        topics: string;
        subscriptionName: string;
        maxNumMessages: number;
        maxNumBytes: number;
        timeoutInMs: number;
        credentials: Credentials | TokenCredentials;
    };
}
export interface AwsIotIntegration extends Topics {
    clientConfiguration: {
        host: string;
        connectTimeoutSec: number;
        clientId: string;
        maxBytesInMessage: number;
        credentials: CertPemCredentials;
    };
}
export interface AwsKinesisIntegration {
    clientConfiguration: {
        streamName: string;
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
        useCredentialsFromInstanceMetadata: boolean;
        applicationName?: string;
        initialPositionInStream: InitialPositionInStream;
        useConsumersWithEnhancedFanOut: boolean;
        maxRecords: number;
        requestTimeout: number;
    };
}
export interface AwsSqsIntegration {
    sqsConfiguration: {
        queueUrl: string;
        pollingPeriodSeconds: number;
        region: string;
        accessKeyId: string;
        secretAccessKey: string;
    };
}
export interface AzureEventHubIntegration {
    clientConfiguration: {
        connectTimeoutSec: number;
        connectionString: string;
        consumerGroup?: string;
        iotHubName?: string;
    };
}
export interface AzureServicesBusIntegration {
    clientConfiguration: {
        connectionString: string;
        topicName: string;
        subName: string;
        downlinkConnectionString: string;
        downlinkTopicName: string;
    };
}
export interface AzureIotHubIntegration {
    clientConfiguration: {
        host: string;
        clientId: string;
        maxBytesInMessage: number;
        credentials: CertPemCredentials | SasCredentials;
    };
    topicFilters: Array<MqttTopicFilter>;
}
export interface ChipStackIntegration {
    clientConfiguration: {
        baseUrl: string;
        httpEndpoint: string;
        applicationServerUrl: string;
        applicationServerAPIToken: string;
    };
}
export interface CoapIntegration {
    clientConfiguration: {
        baseUrl: string;
        dtlsBaseUrl: string;
        securityMode: CoapSecurityMode;
        coapEndpoint: string;
        dtlsCoapEndpoint: string;
    };
}
export interface CustomIntegration {
    clazz: string;
    configuration: string;
}
export interface HttpIntegration {
    baseUrl: string;
    httpEndpoint: string;
    enableSecurity?: boolean;
    headersFilter?: {
        [key: string]: string;
    } | null;
    replaceNoContentToOk: boolean;
}
export interface IbmWatsonIotIntegration extends Topics {
    clientConfiguration: {
        connectTimeoutSec: number;
        maxBytesInMessage: number;
        credentials: BasicCredentials;
    };
}
export interface KafkaIntegration {
    clientConfiguration: {
        groupId: string;
        clientId: string;
        topics: string;
        bootstrapServers: string;
        pollInterval: number;
        autoCreateTopics: boolean;
        otherProperties?: {
            [key: string]: string;
        } | null;
    };
}
export interface LoriotIntegration {
    baseUrl: string;
    httpEndpoint: string;
    enableSecurity: boolean;
    headersFilter?: {
        [key: string]: string;
    } | null;
    replaceNoContentToOk: boolean;
    createLoriotOutput: boolean;
    sendDownlink: boolean;
    server: string;
    domain: string;
    appId: string;
    token: string;
    credentials: BasicCredentials | TokenCredentials;
    loriotDownlinkUrl: string;
}
export interface MqttIntegration extends Topics {
    clientConfiguration: {
        host: string;
        port: number;
        cleanSession: boolean;
        ssl: boolean;
        connectTimeoutSec: number;
        clientId: string;
        maxBytesInMessage: number;
        credentials: Credentials | BasicCredentials | CertPemCredentials;
    };
}
export interface OpcUaIntegration {
    clientConfiguration: {
        applicationName?: string;
        applicationUri?: string;
        host: string;
        port: number;
        scanPeriodInSeconds: number;
        timeoutInMillis: number;
        security: OpcSecurityType;
        identity: UsernameIdentityType | AnonymousIdentityType;
        mapping: Array<OpcUaMapping>;
        keystore: {
            location: string;
            type: OpcKeystoreType;
            fileContent: string;
            password: string;
            alias: string;
            keyPassword: string;
        };
    };
}
export interface OpcUaMapping {
    deviceNodePattern: string;
    mappingType: OpcMappingType;
    subscriptionTags: Array<OpcUaSubscription>;
    namespace: number | null;
}
export interface OpcUaSubscription {
    key: string;
    path: string;
    required: boolean;
}
export interface PubSubIntegration {
    clientConfiguration: {
        projectId: string;
        subscriptionId: string;
        serviceAccountKey: string;
        serviceAccountKeyFileName: string;
    };
}
export interface RabbitMqIntegration {
    clientConfiguration: {
        exchangeName: string;
        host: string;
        port: number;
        virtualHost: string;
        username: string;
        password: string;
        downlinkTopic: string;
        queues: string;
        routingKeys: string;
        connectionTimeout: number;
        handshakeTimeout: number;
        pollPeriod: number;
        durable: boolean;
        exclusive: boolean;
        autoDelete: boolean;
    };
}
export declare enum TuyaRegion {
    CN = "CN",
    US = "US",
    EU = "EU",
    IN = "IN"
}
export declare enum TuyaEnv {
    PROD = "PROD",
    TEST = "TEST"
}
export interface TuyaIntegration {
    clientConfiguration: {
        region: TuyaRegion;
        accessId: string;
        accessKey: string;
        env: TuyaEnv;
    };
}
export declare const TuyaRegionTranslation: Map<TuyaRegion, string>;
interface TcpHandlerConfiguration {
    handlerType: TcpHandlerConfigurationType;
}
interface BinaryTcpHandlerConfiguration extends TcpHandlerConfiguration {
    byteOrder: TcpBinaryByteOrder;
    maxFrameLength: number;
    lengthFieldOffset: number;
    lengthFieldLength: number;
    lengthAdjustment: number;
    initialBytesToStrip: number;
    failFast: boolean;
}
interface TextTcpHandlerConfiguration extends TcpHandlerConfiguration {
    stripDelimiter: boolean;
    messageSeparator: TcpTextMessageSeparator;
}
export interface TcpIntegration {
    clientConfiguration: {
        port: number;
        soBacklogOption: number;
        soRcvBuf: number;
        soSndBuf: number;
        soKeepaliveOption: boolean;
        tcpNoDelay: boolean;
        cacheSize: number;
        timeToLiveInMinutes: number;
        handlerConfiguration: BinaryTcpHandlerConfiguration | TextTcpHandlerConfiguration | TcpHandlerConfiguration;
    };
}
export interface ThingParkIntegration {
    baseUrl: string;
    httpEndpoint: string;
    enableSecurity: boolean;
    replaceNoContentToOk: boolean;
    downlinkUrl?: string;
    enableSecurityNew: boolean;
    asId?: string;
    asIdNew?: string;
    asKey?: string;
    clientIdNew?: string;
    clientSecret?: string;
    maxTimeDiffInSeconds: number;
}
export interface TtnIntegration extends Topics {
    clientConfiguration: {
        host: string;
        hostEdit?: string;
        customHost: boolean;
        port: number;
        ssl: boolean;
        maxBytesInMessage: number;
        connectTimeoutSec: number;
        apiVersion?: boolean;
        credentials: BasicCredentials;
    };
}
interface UpdHandlerConfiguration {
    type: HandlerConfigurationType;
}
interface TextUpdHandlerConfiguration extends UpdHandlerConfiguration {
    charsetName: string;
}
interface HexUpdHandlerConfiguration extends UpdHandlerConfiguration {
    maxFrameLength: number;
}
export interface UpdIntegration {
    clientConfiguration: {
        port: number;
        soBroadcast: boolean;
        soRcvBuf: number;
        cacheSize: number;
        timeToLiveInMinutes: number;
        handlerConfiguration: HexUpdHandlerConfiguration | TextUpdHandlerConfiguration | UpdHandlerConfiguration;
    };
}
export {};
