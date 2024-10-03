import { ValueTypeData } from '@shared/models/constants';
import { AttributeData } from '@shared/models/telemetry/telemetry.models';
export declare const noLeadTrailSpacesRegex: RegExp;
export declare const integerRegex: RegExp;
export declare const nonZeroFloat: RegExp;
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
    DEBUG = "DEBUG",
    TRACE = "TRACE"
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
    TRACE: GatewayLogLevel.TRACE;
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
export interface GatewayAttributeData extends AttributeData {
    skipSync?: boolean;
}
export interface GatewayConnectorBase {
    name: string;
    type: ConnectorType;
    configuration?: string;
    logLevel: string;
    key?: string;
    class?: string;
    mode?: ConfigurationModes;
    configVersion?: string;
    reportStrategy?: ReportStrategyConfig;
    sendDataOnlyOnChange?: boolean;
    ts?: number;
}
export interface GatewayConnector<BaseConfig = ConnectorBaseConfig> extends GatewayConnectorBase {
    configurationJson: BaseConfig;
    basicConfig?: BaseConfig;
}
export interface GatewayVersionedDefaultConfig {
    legacy: GatewayConnector<ConnectorLegacyConfig>;
    '3.5.2': GatewayConnector<ConnectorBaseConfig_v3_5_2>;
}
export interface DataMapping {
    topicFilter: string;
    QoS: string | number;
    converter: Converter;
}
export interface RequestsMapping {
    requestType: RequestType;
    type: string;
    details: string;
}
export interface OpcUaMapping {
    deviceNodePattern?: string;
    deviceNamePattern?: string;
    deviceProfileExpression?: string;
}
export type MappingValue = DataMapping | RequestsMapping | OpcUaMapping;
export interface ServerConfig {
    name: string;
    url: string;
    timeoutInMillis: number;
    scanPeriodInMillis: number;
    pollPeriodInMillis: number;
    enableSubscriptions: boolean;
    subCheckPeriodInMillis: number;
    showMap: boolean;
    security: string;
    identity: ConnectorSecurity;
}
export interface BrokerConfig {
    name: string;
    host: string;
    port: number;
    version: number;
    clientId: string;
    maxNumberOfWorkers: number;
    maxMessageNumberPerWorker: number;
    security: ConnectorSecurity;
}
export interface ConnectorSecurity {
    type: SecurityType;
    username?: string;
    password?: string;
    pathToCACert?: string;
    pathToPrivateKey?: string;
    pathToClientCert?: string;
    mode?: ModeType;
}
export declare enum GatewayVersion {
    Current = "3.5.2",
    Legacy = "legacy"
}
export type ConnectorMapping = DeviceConnectorMapping | RequestMappingValue | ConverterConnectorMapping;
export type ConnectorMappingFormValue = DeviceConnectorMapping | RequestMappingFormValue | ConverterMappingFormValue;
export type ConnectorBaseConfig = ConnectorBaseConfig_v3_5_2 | ConnectorLegacyConfig;
export type ConnectorLegacyConfig = ConnectorBaseInfo | MQTTLegacyBasicConfig | OPCLegacyBasicConfig | ModbusBasicConfig;
export type ConnectorBaseConfig_v3_5_2 = ConnectorBaseInfo | MQTTBasicConfig_v3_5_2 | OPCBasicConfig_v3_5_2;
export interface ConnectorBaseInfo {
    name: string;
    id: string;
    enableRemoteLogging: boolean;
    logLevel: GatewayLogLevel;
    configVersion: string | number;
    reportStrategy?: ReportStrategyConfig;
}
export type MQTTBasicConfig = MQTTBasicConfig_v3_5_2 | MQTTLegacyBasicConfig;
export interface MQTTBasicConfig_v3_5_2 {
    mapping: ConverterConnectorMapping[];
    requestsMapping: Record<RequestType, RequestMappingData[] | RequestMappingValue[]> | RequestMappingData[] | RequestMappingValue[];
    broker: BrokerConfig;
    workers?: WorkersConfig;
}
export interface MQTTLegacyBasicConfig {
    mapping: LegacyConverterConnectorMapping[];
    broker: BrokerConfig;
    workers?: WorkersConfig;
    connectRequests: LegacyRequestMappingData[];
    disconnectRequests: LegacyRequestMappingData[];
    attributeRequests: LegacyRequestMappingData[];
    attributeUpdates: LegacyRequestMappingData[];
    serverSideRpc: LegacyRequestMappingData[];
}
export type OPCBasicConfig = OPCBasicConfig_v3_5_2 | OPCLegacyBasicConfig;
export interface OPCBasicConfig_v3_5_2 {
    mapping: DeviceConnectorMapping[];
    server: ServerConfig;
}
export interface OPCLegacyBasicConfig {
    server: LegacyServerConfig;
}
export interface LegacyServerConfig extends Omit<ServerConfig, 'enableSubscriptions'> {
    mapping: LegacyDeviceConnectorMapping[];
    disableSubscriptions: boolean;
}
export type ModbusBasicConfig = ModbusBasicConfig_v3_5_2 | ModbusLegacyBasicConfig;
export interface ModbusBasicConfig_v3_5_2 {
    master: ModbusMasterConfig;
    slave: ModbusSlave;
}
export interface ModbusLegacyBasicConfig {
    master: ModbusMasterConfig<LegacySlaveConfig>;
    slave: ModbusLegacySlave;
}
export interface WorkersConfig {
    maxNumberOfWorkers: number;
    maxMessageNumberPerWorker: number;
}
export interface ConnectorDeviceInfo {
    deviceNameExpression: string;
    deviceNameExpressionSource: SourceType | OPCUaSourceType;
    deviceProfileExpression: string;
    deviceProfileExpressionSource: SourceType | OPCUaSourceType;
}
export interface Attribute {
    key: string;
    type: string;
    value: string;
}
export interface LegacyAttribute {
    key: string;
    path: string;
}
export interface Timeseries {
    key: string;
    type: string;
    value: string;
}
export interface LegacyTimeseries {
    key: string;
    path: string;
}
export interface RpcArgument {
    type: string;
    value: number | string | boolean;
}
export interface RpcMethod {
    method: string;
    arguments: RpcArgument[];
}
export interface LegacyRpcMethod {
    method: string;
    arguments: unknown[];
}
export interface AttributesUpdate {
    key: string;
    type: string;
    value: string;
}
export interface LegacyDeviceAttributeUpdate {
    attributeOnThingsBoard: string;
    attributeOnDevice: string;
}
export interface Converter {
    type: ConvertorType;
    deviceInfo?: ConnectorDeviceInfo;
    sendDataOnlyOnChange: boolean;
    timeout: number;
    attributes?: Attribute[];
    timeseries?: Timeseries[];
    extension?: string;
    cached?: boolean;
    extensionConfig?: Record<string, number>;
}
export interface LegacyConverter extends Converter {
    deviceNameJsonExpression?: string;
    deviceTypeJsonExpression?: string;
    deviceNameTopicExpression?: string;
    deviceTypeTopicExpression?: string;
    deviceNameExpression?: string;
    deviceNameExpressionSource?: string;
    deviceTypeExpression?: string;
    deviceProfileExpression?: string;
    deviceProfileExpressionSource?: string;
    ['extension-config']?: Record<string, unknown>;
}
export interface ConverterConnectorMapping {
    topicFilter: string;
    subscriptionQos?: string | number;
    converter: Converter;
}
export interface LegacyConverterConnectorMapping {
    topicFilter: string;
    subscriptionQos?: string | number;
    converter: LegacyConverter;
}
export type ConverterMappingFormValue = Omit<ConverterConnectorMapping, 'converter'> & {
    converter: {
        type: ConvertorType;
    } & Record<ConvertorType, Converter>;
};
export interface DeviceConnectorMapping {
    deviceNodePattern: string;
    deviceNodeSource: OPCUaSourceType;
    deviceInfo: ConnectorDeviceInfo;
    attributes?: Attribute[];
    timeseries?: Timeseries[];
    rpc_methods?: RpcMethod[];
    attributes_updates?: AttributesUpdate[];
}
export interface LegacyDeviceConnectorMapping {
    deviceNamePattern: string;
    deviceNodePattern: string;
    deviceTypePattern: string;
    attributes?: LegacyAttribute[];
    timeseries?: LegacyTimeseries[];
    rpc_methods?: LegacyRpcMethod[];
    attributes_updates?: LegacyDeviceAttributeUpdate[];
}
export declare enum ConnectorType {
    MQTT = "mqtt",
    MODBUS = "modbus",
    GRPC = "grpc",
    OPCUA = "opcua",
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
export declare const ModbusFunctionCodeTranslationsMap: Map<number, string>;
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
export interface RPCTemplateConfigMQTT {
    methodFilter: string;
    requestTopicExpression: string;
    responseTopicExpression?: string;
    responseTimeout?: number;
    valueExpression: string;
    withResponse: boolean;
}
export interface RPCTemplateConfigModbus {
    tag: string;
    type: ModbusDataType;
    functionCode?: number;
    objectsCount: number;
    address: number;
    value?: string;
}
export interface RPCTemplateConfigOPC {
    method: string;
    arguments: RpcArgument[];
}
export interface OPCTypeValue {
    type: MappingValueType;
    boolean?: boolean;
    double?: number;
    integer?: number;
    string?: string;
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
    gatewayVersion: string;
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
export interface RpcMethodsMapping {
    method: string;
    arguments: Array<MappingDataKey>;
}
export interface MappingInfo {
    mappingType: MappingType;
    value: {
        [key: string]: any;
    };
    buttonTitle: string;
}
export interface ModbusSlaveInfo<Slave = SlaveConfig> {
    value: Slave;
    buttonTitle: string;
    hideNewFields: boolean;
}
export declare enum ConfigurationModes {
    BASIC = "basic",
    ADVANCED = "advanced"
}
export declare enum SecurityType {
    ANONYMOUS = "anonymous",
    BASIC = "basic",
    CERTIFICATES = "certificates"
}
export declare enum ReportStrategyType {
    OnChange = "ON_CHANGE",
    OnReportPeriod = "ON_REPORT_PERIOD",
    OnChangeOrReportPeriod = "ON_CHANGE_OR_REPORT_PERIOD"
}
export declare enum ReportStrategyDefaultValue {
    Connector = 60000,
    Device = 30000,
    Key = 15000
}
export declare const ReportStrategyTypeTranslationsMap: Map<ReportStrategyType, string>;
export declare enum ModeType {
    NONE = "None",
    SIGN = "Sign",
    SIGNANDENCRYPT = "SignAndEncrypt"
}
export declare const SecurityTypeTranslationsMap: Map<SecurityType, string>;
export declare enum RestSecurityType {
    ANONYMOUS = "anonymous",
    BASIC = "basic"
}
export declare const RestSecurityTypeTranslationsMap: Map<RestSecurityType, string>;
export declare const MqttVersions: {
    name: number;
    value: number;
}[];
export declare enum MappingType {
    DATA = "data",
    REQUESTS = "requests",
    OPCUA = "OPCua"
}
export declare const MappingTypeTranslationsMap: Map<MappingType, string>;
export declare const MappingHintTranslationsMap: Map<MappingType, string>;
export declare const HelpLinkByMappingTypeMap: Map<MappingType, string>;
export declare const QualityTypes: number[];
export declare const QualityTypeTranslationsMap: Map<number, string>;
export declare enum ConvertorType {
    JSON = "json",
    BYTES = "bytes",
    CUSTOM = "custom"
}
export declare const ConvertorTypeTranslationsMap: Map<ConvertorType, string>;
export declare enum SourceType {
    MSG = "message",
    TOPIC = "topic",
    CONST = "constant"
}
export declare enum OPCUaSourceType {
    PATH = "path",
    IDENTIFIER = "identifier",
    CONST = "constant"
}
export declare enum DeviceInfoType {
    FULL = "full",
    PARTIAL = "partial"
}
export declare const SourceTypeTranslationsMap: Map<SourceType | OPCUaSourceType, string>;
export interface RequestMappingValue {
    requestType: RequestType;
    requestValue: RequestMappingData;
}
export interface RequestMappingFormValue {
    requestType: RequestType;
    requestValue: Record<RequestType, RequestMappingData>;
}
export type RequestMappingData = ConnectRequest | DisconnectRequest | AttributeRequest | AttributeUpdate | ServerSideRpc;
export type LegacyRequestMappingData = LegacyConnectRequest | LegacyDisconnectRequest | LegacyAttributeRequest | LegacyAttributeUpdate | LegacyServerSideRpc;
export interface ConnectRequest {
    topicFilter: string;
    deviceInfo: ConnectorDeviceInfo;
}
export interface DisconnectRequest {
    topicFilter: string;
    deviceInfo: ConnectorDeviceInfo;
}
export interface AttributeRequest {
    retain: boolean;
    topicFilter: string;
    deviceInfo: ConnectorDeviceInfo;
    attributeNameExpressionSource: SourceType;
    attributeNameExpression: string;
    topicExpression: string;
    valueExpression: string;
}
export interface AttributeUpdate {
    retain: boolean;
    deviceNameFilter: string;
    attributeFilter: string;
    topicExpression: string;
    valueExpression: string;
}
export interface ServerSideRpc {
    type: ServerSideRpcType;
    deviceNameFilter: string;
    methodFilter: string;
    requestTopicExpression: string;
    responseTopicExpression?: string;
    responseTopicQoS?: number;
    responseTimeout?: number;
    valueExpression: string;
}
export declare enum ServerSideRpcType {
    WithResponse = "twoWay",
    WithoutResponse = "oneWay"
}
export interface LegacyConnectRequest {
    topicFilter: string;
    deviceNameJsonExpression?: string;
    deviceNameTopicExpression?: string;
}
interface LegacyDisconnectRequest {
    topicFilter: string;
    deviceNameJsonExpression?: string;
    deviceNameTopicExpression?: string;
}
interface LegacyAttributeRequest {
    retain: boolean;
    topicFilter: string;
    deviceNameJsonExpression: string;
    attributeNameJsonExpression: string;
    topicExpression: string;
    valueExpression: string;
}
interface LegacyAttributeUpdate {
    retain: boolean;
    deviceNameFilter: string;
    attributeFilter: string;
    topicExpression: string;
    valueExpression: string;
}
interface LegacyServerSideRpc {
    deviceNameFilter: string;
    methodFilter: string;
    requestTopicExpression: string;
    responseTopicExpression?: string;
    responseTimeout?: number;
    valueExpression: string;
}
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
    CUSTOM = "extensionConfig",
    RPC_METHODS = "rpc_methods",
    ATTRIBUTES_UPDATES = "attributes_updates"
}
export declare const MappingKeysPanelTitleTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysAddKeyTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysDeleteKeyTranslationsMap: Map<MappingKeysType, string>;
export declare const MappingKeysNoKeysTextTranslationsMap: Map<MappingKeysType, string>;
export declare enum ServerSideRPCType {
    ONE_WAY = "oneWay",
    TWO_WAY = "twoWay"
}
export declare enum MappingValueType {
    STRING = "string",
    INTEGER = "integer",
    DOUBLE = "double",
    BOOLEAN = "boolean"
}
export declare enum ModifierType {
    DIVIDER = "divider",
    MULTIPLIER = "multiplier"
}
export declare const ModifierTypesMap: Map<ModifierType, ValueTypeData>;
export declare const mappingValueTypesMap: Map<MappingValueType, ValueTypeData>;
export declare const DataConversionTranslationsMap: Map<ConvertorType, string>;
export declare enum SecurityPolicy {
    BASIC128 = "Basic128Rsa15",
    BASIC256 = "Basic256",
    BASIC256SHA = "Basic256Sha256"
}
export declare const SecurityPolicyTypes: {
    value: SecurityPolicy;
    name: string;
}[];
export declare enum ModbusProtocolType {
    TCP = "tcp",
    UDP = "udp",
    Serial = "serial"
}
export declare const ModbusProtocolLabelsMap: Map<ModbusProtocolType, string>;
export declare enum ModbusMethodType {
    SOCKET = "socket",
    RTU = "rtu"
}
export declare enum ModbusSerialMethodType {
    RTU = "rtu",
    ASCII = "ascii"
}
export declare const ModbusMethodLabelsMap: Map<ModbusMethodType | ModbusSerialMethodType, string>;
export declare const ModbusByteSizes: number[];
export declare enum ModbusParity {
    Even = "E",
    Odd = "O",
    None = "N"
}
export declare const ModbusParityLabelsMap: Map<ModbusParity, string>;
export declare enum ModbusOrderType {
    BIG = "BIG",
    LITTLE = "LITTLE"
}
export declare enum ModbusRegisterType {
    HoldingRegisters = "holding_registers",
    CoilsInitializer = "coils_initializer",
    InputRegisters = "input_registers",
    DiscreteInputs = "discrete_inputs"
}
export declare const ModbusRegisterTranslationsMap: Map<ModbusRegisterType, string>;
export declare enum ModbusDataType {
    STRING = "string",
    BYTES = "bytes",
    BITS = "bits",
    INT8 = "8int",
    UINT8 = "8uint",
    FLOAT8 = "8float",
    INT16 = "16int",
    UINT16 = "16uint",
    FLOAT16 = "16float",
    INT32 = "32int",
    UINT32 = "32uint",
    FLOAT32 = "32float",
    INT64 = "64int",
    UINT64 = "64uint",
    FLOAT64 = "64float"
}
export declare const ModbusEditableDataTypes: ModbusDataType[];
export declare enum ModbusObjectCountByDataType {
    '8int' = 1,
    '8uint' = 1,
    '8float' = 1,
    '16int' = 1,
    '16uint' = 1,
    '16float' = 1,
    '32int' = 2,
    '32uint' = 2,
    '32float' = 2,
    '64int' = 4,
    '64uint' = 4,
    '64float' = 4
}
export declare enum ModbusValueKey {
    ATTRIBUTES = "attributes",
    TIMESERIES = "timeseries",
    ATTRIBUTES_UPDATES = "attributeUpdates",
    RPC_REQUESTS = "rpc"
}
export declare const ModbusKeysPanelTitleTranslationsMap: Map<ModbusValueKey, string>;
export declare const ModbusKeysAddKeyTranslationsMap: Map<ModbusValueKey, string>;
export declare const ModbusKeysDeleteKeyTranslationsMap: Map<ModbusValueKey, string>;
export declare const ModbusKeysNoKeysTextTranslationsMap: Map<ModbusValueKey, string>;
export interface ModbusMasterConfig<Slave = SlaveConfig> {
    slaves: Slave[];
}
export interface LegacySlaveConfig extends Omit<SlaveConfig, 'reportStrategy'> {
    sendDataOnlyOnChange: boolean;
}
export interface SlaveConfig {
    name: string;
    host?: string;
    port: string | number;
    serialPort?: string;
    type: ModbusProtocolType;
    method: ModbusMethodType;
    timeout: number;
    byteOrder: ModbusOrderType;
    wordOrder: ModbusOrderType;
    retries: boolean;
    retryOnEmpty: boolean;
    retryOnInvalid: boolean;
    pollPeriod: number;
    unitId: number;
    deviceName: string;
    deviceType?: string;
    reportStrategy: ReportStrategyConfig;
    connectAttemptTimeMs: number;
    connectAttemptCount: number;
    waitAfterFailedAttemptsMs: number;
    attributes: ModbusValue[];
    timeseries: ModbusValue[];
    attributeUpdates: ModbusValue[];
    rpc: ModbusValue[];
    security?: ModbusSecurity;
    baudrate?: number;
    stopbits?: number;
    bytesize?: number;
    parity?: ModbusParity;
    strict?: boolean;
}
export interface ModbusValue {
    tag: string;
    type: ModbusDataType;
    functionCode?: number;
    objectsCount: number;
    address: number;
    value?: string;
    reportStrategy?: ReportStrategyConfig;
    multiplier?: number;
    divider?: number;
}
export interface ModbusFormValue extends ModbusValue {
    modifierType?: ModifierType;
    modifierValue?: string;
}
export interface ModbusSecurity {
    certfile?: string;
    keyfile?: string;
    password?: string;
    server_hostname?: string;
    reqclicert?: boolean;
}
export interface ModbusSlave {
    host?: string;
    type: ModbusProtocolType;
    method: ModbusMethodType;
    unitId: number;
    serialPort?: string;
    baudrate?: number;
    deviceName: string;
    deviceType: string;
    pollPeriod: number;
    sendDataToThingsBoard: boolean;
    byteOrder: ModbusOrderType;
    wordOrder: ModbusOrderType;
    identity: ModbusIdentity;
    values?: ModbusValuesState;
    port: string | number;
    security: ModbusSecurity;
}
export interface ModbusLegacySlave extends Omit<ModbusSlave, 'values'> {
    values?: ModbusLegacyRegisterValues;
}
export type ModbusValuesState = ModbusRegisterValues | ModbusValues;
export interface ModbusLegacyRegisterValues {
    holding_registers: ModbusValues[];
    coils_initializer: ModbusValues[];
    input_registers: ModbusValues[];
    discrete_inputs: ModbusValues[];
}
export interface ModbusRegisterValues {
    holding_registers: ModbusValues;
    coils_initializer: ModbusValues;
    input_registers: ModbusValues;
    discrete_inputs: ModbusValues;
}
export interface ModbusValues {
    attributes: ModbusValue[];
    timeseries: ModbusValue[];
    attributeUpdates: ModbusValue[];
    rpc: ModbusValue[];
}
export interface ModbusIdentity {
    vendorName?: string;
    productCode?: string;
    vendorUrl?: string;
    productName?: string;
    modelName?: string;
}
export interface ReportStrategyConfig {
    type: ReportStrategyType;
    reportPeriod?: number;
}
export declare const ModbusBaudrates: number[];
export {};
