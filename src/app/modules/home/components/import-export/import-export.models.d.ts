import { Widget, WidgetTypeDetails } from '@app/shared/models/widget.models';
import { DashboardLayoutId } from '@shared/models/dashboard.models';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
export interface ImportWidgetResult {
    widget: Widget;
    layoutId: DashboardLayoutId;
}
export interface WidgetsBundleItem {
    widgetsBundle: WidgetsBundle;
    widgetTypes: WidgetTypeDetails[];
}
export interface CsvToJsonConfig {
    delim?: string;
    header?: boolean;
}
export interface CsvToJsonResult {
    headers?: string[];
    rows?: any[][];
}
export declare type CSVDelimiter = ',' | ';' | '|' | '\t';
export declare enum ImportEntityColumnType {
    name = "NAME",
    type = "TYPE",
    label = "LABEL",
    clientAttribute = "CLIENT_ATTRIBUTE",
    sharedAttribute = "SHARED_ATTRIBUTE",
    serverAttribute = "SERVER_ATTRIBUTE",
    timeseries = "TIMESERIES",
    accessToken = "ACCESS_TOKEN",
    x509 = "X509",
    mqttClientId = "MQTT_CLIENT_ID",
    mqttUserName = "MQTT_USER_NAME",
    mqttPassword = "MQTT_PASSWORD",
    lwm2mClientEndpoint = "LWM2M_CLIENT_ENDPOINT",
    lwm2mClientSecurityConfigMode = "LWM2M_CLIENT_SECURITY_CONFIG_MODE",
    lwm2mClientIdentity = "LWM2M_CLIENT_IDENTITY",
    lwm2mClientKey = "LWM2M_CLIENT_KEY",
    lwm2mClientCert = "LWM2M_CLIENT_CERT",
    lwm2mBootstrapServerSecurityMode = "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE",
    lwm2mBootstrapServerClientPublicKeyOrId = "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID",
    lwm2mBootstrapServerClientSecretKey = "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY",
    lwm2mServerSecurityMode = "LWM2M_SERVER_SECURITY_MODE",
    lwm2mServerClientPublicKeyOrId = "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID",
    lwm2mServerClientSecretKey = "LWM2M_SERVER_CLIENT_SECRET_KEY",
    isGateway = "IS_GATEWAY",
    description = "DESCRIPTION",
    edgeLicenseKey = "EDGE_LICENSE_KEY",
    cloudEndpoint = "CLOUD_ENDPOINT",
    routingKey = "ROUTING_KEY",
    secret = "SECRET"
}
export declare const importEntityObjectColumns: ImportEntityColumnType[];
export declare const importEntityColumnTypeTranslations: Map<ImportEntityColumnType, string>;
export interface CsvColumnParam {
    type: ImportEntityColumnType;
    key: string;
    sampleData: any;
}
export interface ColumnMapping {
    type: ImportEntityColumnType;
    key?: string;
}
export interface BulkImportRequest {
    file: string;
    mapping: {
        columns: Array<ColumnMapping>;
        delimiter: CSVDelimiter;
        header: boolean;
        update: boolean;
    };
}
export interface BulkImportResult {
    created: number;
    updated: number;
    errors: number;
    errorsList: Array<string>;
}
export interface FileType {
    mimeType: string;
    extension: string;
}
export declare const JSON_TYPE: FileType;
export declare const ZIP_TYPE: FileType;
export declare function convertCSVToJson(csvdata: string, config: CsvToJsonConfig, onError: (messageId: string, params?: any) => void): CsvToJsonResult | number;
