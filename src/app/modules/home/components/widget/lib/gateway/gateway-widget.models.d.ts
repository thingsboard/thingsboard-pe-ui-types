import { ResourcesService } from '@core/services/resources.service';
import { Observable } from 'rxjs';
import { ValueTypeData } from '@shared/models/constants';
export declare const noLeadTrailSpacesRegex: RegExp;
export declare enum StorageTypes {
    MEMORY = "memory",
    FILE = "file",
    SQLITE = "sqlite"
}
export declare enum DeviceGatewayStatus {
    EXCEPTION = "EXCEPTION"
}
export declare enum GatewayLogLevel {
    NONE = "NONE",
    CRITICAL = "CRITICAL",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
    DEBUG = "DEBUG"
}
export declare enum PortLimits {
    MIN = 1,
    MAX = 65535
}
export declare const GatewayStatus: {
    EXCEPTION: DeviceGatewayStatus.EXCEPTION;
    NONE: GatewayLogLevel.NONE;
    CRITICAL: GatewayLogLevel.CRITICAL;
    ERROR: GatewayLogLevel.ERROR;
    WARNING: GatewayLogLevel.WARNING;
    INFO: GatewayLogLevel.INFO;
    DEBUG: GatewayLogLevel.DEBUG;
};
export type GatewayStatus = DeviceGatewayStatus | GatewayLogLevel;
export declare enum LogSavingPeriod {
    days = "D",
    hours = "H",
    minutes = "M",
    seconds = "S"
}
export declare enum LocalLogsConfigs {
    service = "service",
    connector = "connector",
    converter = "converter",
    tb_connection = "tb_connection",
    storage = "storage",
    extension = "extension"
}
export declare const LocalLogsConfigTranslateMap: Map<LocalLogsConfigs, string>;
export declare const LogSavingPeriodTranslations: Map<LogSavingPeriod, string>;
export declare const StorageTypesTranslationMap: Map<StorageTypes, string>;
export declare enum SecurityTypes {
    ACCESS_TOKEN = "accessToken",
    USERNAME_PASSWORD = "usernamePassword",
    TLS_ACCESS_TOKEN = "tlsAccessToken",
    TLS_PRIVATE_KEY = "tlsPrivateKey"
}
export declare const GecurityTypesTranslationsMap: Map<SecurityTypes, string>;
export interface GatewayConnector {
    name: string;
    type: ConnectorType;
    configuration?: string;
    configurationJson: string | {
        [key: string]: any;
    };
    basicConfig?: string | {
        [key: string]: any;
    };
    logLevel: string;
    key?: string;
    class?: string;
}
export declare enum ConnectorType {
    MQTT = "mqtt",
    MODBUS = "modbus",
    GRPC = "grpc",
    OPCUA = "opcua",
    OPCUA_ASYNCIO = "opcua_asyncio",
    BLE = "ble",
    REQUEST = "request",
    CAN = "can",
    BACNET = "bacnet",
    ODBC = "odbc",
    REST = "rest",
    SNMP = "snmp",
    FTP = "ftp",
    SOCKET = "socket",
    XMPP = "xmpp",
    OCPP = "ocpp",
    CUSTOM = "custom"
}
export declare const GatewayConnectorDefaultTypesTranslatesMap: Map<ConnectorType, string>;
export interface RPCCommand {
    command: string;
    params: any;
    time: number;
}
export declare enum ModbusCommandTypes {
    Bits = "bits",
    Bit = "bit",
    String = "string",
    Bytes = "bytes",
    Int8 = "8int",
    Uint8 = "8uint",
    Int16 = "16int",
    Uint16 = "16uint",
    Float16 = "16float",
    Int32 = "32int",
    Uint32 = "32uint",
    Float32 = "32float",
    Int64 = "64int",
    Uint64 = "64uint",
    Float64 = "64float"
}
export declare const ModbusCodesTranslate: Map<number, string>;
export declare enum BACnetRequestTypes {
    WriteProperty = "writeProperty",
    ReadProperty = "readProperty"
}
export declare const BACnetRequestTypesTranslates: Map<BACnetRequestTypes, string>;
export declare enum BACnetObjectTypes {
    BinaryInput = "binaryInput",
    BinaryOutput = "binaryOutput",
    AnalogInput = "analogInput",
    AnalogOutput = "analogOutput",
    BinaryValue = "binaryValue",
    AnalogValue = "analogValue"
}
export declare const BACnetObjectTypesTranslates: Map<BACnetObjectTypes, string>;
export declare enum BLEMethods {
    WRITE = "write",
    READ = "read",
    SCAN = "scan"
}
export declare const BLEMethodsTranslates: Map<BLEMethods, string>;
export declare enum CANByteOrders {
    LITTLE = "LITTLE",
    BIG = "BIG"
}
export declare enum SocketMethodProcessings {
    WRITE = "write"
}
export declare const SocketMethodProcessingsTranslates: Map<SocketMethodProcessings, string>;
export declare enum SNMPMethods {
    SET = "set",
    MULTISET = "multiset",
    GET = "get",
    BULKWALK = "bulkwalk",
    TABLE = "table",
    MULTIGET = "multiget",
    GETNEXT = "getnext",
    BULKGET = "bulkget",
    WALKS = "walk"
}
export declare const SNMPMethodsTranslations: Map<SNMPMethods, string>;
export declare enum HTTPMethods {
    CONNECT = "CONNECT",
    DELETE = "DELETE",
    GET = "GET",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    PATCH = "PATCH",
    POST = "POST",
    PUT = "PUT",
    TRACE = "TRACE"
}
export declare enum SocketEncodings {
    UTF_8 = "utf-8"
}
export interface RPCTemplate {
    name?: string;
    config: RPCTemplateConfig;
}
export interface RPCTemplateConfig {
    [key: string]: any;
}
export interface SaveRPCTemplateData {
    config: RPCTemplateConfig;
    templates: Array<RPCTemplate>;
}
export interface LogLink {
    name: string;
    key: string;
    filterFn?: (arg: any) => boolean;
}
export interface GatewayLogData {
    ts: number;
    key: string;
    message: string;
    status: GatewayStatus;
}
export interface AddConnectorConfigData {
    dataSourceData: Array<any>;
}
export interface CreatedConnectorConfigData {
    type: ConnectorType;
    name: string;
    logLevel: GatewayLogLevel;
    useDefaults: boolean;
    sendDataOnlyOnChange: boolean;
    configurationJson?: {
        [key: string]: any;
    };
}
export interface MappingDataKey {
    key: string;
    value: any;
    type: MappingValueType;
}
export interface MappingInfo {
    mappingType: MappingType;
    value: {
        [key: string]: any;
    };
    buttonTitle: string;
}
export declare enum ConnectorConfigurationModes {
    BASIC = "basic",
    ADVANCED = "advanced"
}
export declare enum BrokerSecurityType {
    ANONYMOUS = "anonymous",
    BASIC = "basic",
    CERTIFICATES = "certificates"
}
export declare const BrokerSecurityTypeTranslationsMap: Map<BrokerSecurityType, string>;
export declare const MqttVersions: {
    name: number;
    value: number;
}[];
export declare enum MappingType {
    DATA = "data",
    REQUESTS = "requests"
}
export declare const MappingTypeTranslationsMap: Map<MappingType, string>;
export declare const MappingHintTranslationsMap: Map<MappingType, string>;
export declare const QualityTypes: number[];
export declare const QualityTypeTranslationsMap: Map<number, string>;
export declare enum ConvertorType {
    JSON = "json",
    BYTES = "bytes",
    CUSTOM = "custom"
}
export declare const ConvertorTypeTranslationsMap: Map<ConvertorType, string>;
export declare enum SourceTypes {
    MSG = "message",
    TOPIC = "topic",
    CONST = "constant"
}
export declare enum DeviceInfoType {
    FULL = "full",
    PARTIAL = "partial"
}
export declare const SourceTypeTranslationsMap: Map<SourceTypes, string>;
export declare enum RequestType {
    CONNECT_REQUEST = "connectRequests",
    DISCONNECT_REQUEST = "disconnectRequests",
    ATTRIBUTE_REQUEST = "attributeRequests",
    ATTRIBUTE_UPDATE = "attributeUpdates",
    SERVER_SIDE_RPC = "serverSideRpc"
}
export declare const RequestTypesTranslationsMap: Map<RequestType, string>;
export declare enum MappingKeysType {
    ATTRIBUTES = "attributes",
    TIMESERIES = "timeseries",
    CUSTOM = "extensionConfig"
}
export declare const MappingKeysPanelTitleTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysAddKeyTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysDeleteKeyTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysNoKeysTextTranslationsMap: Map<MappingKeysType, string>;
export declare enum ServerSideRPCType {
    ONE_WAY = "oneWay",
    TWO_WAY = "twoWay"
}
export declare const getDefaultConfig: (resourcesService: ResourcesService, type: string) => Observable<any>;
export declare enum MappingValueType {
    STRING = "string",
    INTEGER = "integer",
    DOUBLE = "double",
    BOOLEAN = "boolean"
}
export declare const mappingValueTypesMap: Map<MappingValueType, ValueTypeData>;
export declare const DataConversionTranslationsMap: Map<ConvertorType, string>;
