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
    type: string;
    configuration?: string;
    configurationJson: string;
    logLevel: string;
    key?: string;
}
export declare const GatewayConnectorDefaultTypesTranslates: Map<string, string>;
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
