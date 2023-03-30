import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
export declare enum SecurityType {
    tls = "tls",
    accessToken = "accessToken"
}
export interface WidgetSetting {
    widgetTitle: string;
    gatewayTitle?: string;
    readOnly?: boolean;
    archiveFileName: string;
    gatewayType: string;
    successfulSave: string;
    gatewayNameExists: string;
}
export declare const CURRENT_CONFIGURATION_ATTRIBUTE = "current_configuration";
export declare const CONFIGURATION_DRAFT_ATTRIBUTE = "configuration_drafts";
export declare const CONFIGURATION_ATTRIBUTE = "configuration";
export declare const REMOTE_LOGGING_LEVEL_ATTRIBUTE = "RemoteLoggingLevel";
export declare const SecurityTypeTranslationMap: Map<SecurityType, string>;
export declare enum GatewayLogLevel {
    none = "NONE",
    critical = "CRITICAL",
    error = "ERROR",
    warning = "WARNING",
    info = "INFO",
    debug = "DEBUG"
}
export declare enum StorageType {
    memory = "memory",
    file = "file"
}
export declare const StorageTypeTranslationMap: Map<StorageType, string>;
export declare enum ConnectorType {
    mqtt = "MQTT",
    modbus = "Modbus",
    opcua = "OPC-UA",
    ble = "BLE",
    request = "Request",
    can = "CAN",
    bacnet = "BACnet",
    custom = "Custom"
}
export interface GatewayFormModels {
    gateway?: string;
    accessToken?: string;
    securityType?: SecurityType;
    host?: string;
    port?: number;
    remoteConfiguration?: boolean;
    caCertPath?: string;
    privateKeyPath?: string;
    certPath?: string;
    remoteLoggingLevel?: GatewayLogLevel;
    remoteLoggingPathToLogs?: string;
    storageType?: StorageType;
    readRecordsCount?: number;
    maxRecordsCount?: number;
    maxFilesCount?: number;
    dataFolderPath?: number;
    connectors?: Array<GatewayFormConnectorModel>;
}
export interface GatewayFormConnectorModel {
    config: object;
    name: string;
    configType: ConnectorType;
    enabled: boolean;
}
export declare const DEFAULT_CONNECTOR: GatewayFormConnectorModel;
type Connector = {
    [key in ConnectorType]?: Array<ConnectorConfig>;
};
interface GatewaySetting extends Connector {
    thingsboard: GatewayMainSetting;
}
interface ConnectorConfig {
    name: string;
    config: object;
}
interface GatewayMainSetting {
    thingsboard: GatewayMainThingsboardSetting;
    connectors: Array<GatewayMainConnector>;
    logs: string;
    storage: GatewayStorage;
}
interface GatewayMainThingsboardSetting {
    host: string;
    remoteConfiguration: boolean;
    port: number;
    security: GatewaySecurity;
}
type GatewaySecurity = SecurityToken | SecurityCertificate;
interface SecurityToken {
    accessToken: string;
}
interface SecurityCertificate {
    caCert: string;
    privateKey: string;
    cert: string;
}
type GatewayStorage = GatewayStorageMemory | GatewayStorageFile;
interface GatewayStorageMemory {
    type: string;
    max_records_count: number;
    read_records_count: number;
}
interface GatewayStorageFile {
    type: string;
    data_folder_path: number;
    max_file_count: number;
    max_read_records_count: number;
    max_records_per_file: number;
}
interface GatewayMainConnector {
    configuration: string;
    name: string;
    type: ConnectorType;
}
export declare function ValidateJSON(control: AbstractControl): ValidationErrors | null;
export declare function generateYAMLConfigFile(gatewaySetting: GatewayFormModels): string;
export declare function generateConnectorConfigFiles(fileZipAdd: object, connectors: Array<GatewayFormConnectorModel>): void;
export declare function generateLogConfigFile(fileZipAdd: object, logsLevel: string, logsPath: string): void;
export declare function getEntityId(gatewayId: string): EntityId;
export declare function createFormConfig(keyValue: GatewayMainSetting): GatewayFormModels;
export declare function getDraftConnectorsJSON(currentConnectors: Array<GatewayFormConnectorModel>): {};
export declare function gatewayConfigJSON(gatewayConfiguration: GatewayFormModels): GatewaySetting;
export {};
