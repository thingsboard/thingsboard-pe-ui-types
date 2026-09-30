export declare enum InstallMethod {
    DIRECT_HTTP = "DIRECT_HTTP",
    DIRECT_MQTT = "DIRECT_MQTT",
    DIRECT_COAP = "DIRECT_COAP",
    DIRECT_LWM2M = "DIRECT_LWM2M",
    DIRECT_SNMP = "DIRECT_SNMP",
    GATEWAY_MQTT = "GATEWAY_MQTT",
    GATEWAY_MODBUS = "GATEWAY_MODBUS",
    GATEWAY_OPCUA = "GATEWAY_OPCUA",
    GATEWAY_BACNET = "GATEWAY_BACNET",
    GATEWAY_BLE = "GATEWAY_BLE",
    GATEWAY_CAN = "GATEWAY_CAN",
    GATEWAY_FTP = "GATEWAY_FTP",
    GATEWAY_KNX = "GATEWAY_KNX",
    GATEWAY_OCPP = "GATEWAY_OCPP",
    GATEWAY_ODBC = "GATEWAY_ODBC",
    GATEWAY_REQUEST = "GATEWAY_REQUEST",
    GATEWAY_REST = "GATEWAY_REST",
    GATEWAY_SNMP = "GATEWAY_SNMP",
    GATEWAY_SOCKET = "GATEWAY_SOCKET",
    GATEWAY_XMPP = "GATEWAY_XMPP",
    CHIRPSTACK = "CHIRPSTACK",
    INTEGRATION_APACHE_PULSAR = "INTEGRATION_APACHE_PULSAR",
    INTEGRATION_AWS_IOT = "INTEGRATION_AWS_IOT",
    INTEGRATION_AWS_KINESIS = "INTEGRATION_AWS_KINESIS",
    INTEGRATION_AWS_SQS = "INTEGRATION_AWS_SQS",
    INTEGRATION_AZURE_EVENT_HUB = "INTEGRATION_AZURE_EVENT_HUB",
    INTEGRATION_AZURE_IOT_HUB = "INTEGRATION_AZURE_IOT_HUB",
    INTEGRATION_AZURE_SERVICE_BUS = "INTEGRATION_AZURE_SERVICE_BUS",
    INTEGRATION_CHIRPSTACK = "INTEGRATION_CHIRPSTACK",
    INTEGRATION_COAP = "INTEGRATION_COAP",
    INTEGRATION_CUSTOM = "INTEGRATION_CUSTOM",
    INTEGRATION_HTTP = "INTEGRATION_HTTP",
    INTEGRATION_IOT_CREATORS = "INTEGRATION_IOT_CREATORS",
    INTEGRATION_KAFKA = "INTEGRATION_KAFKA",
    INTEGRATION_KPN_THINGS = "INTEGRATION_KPN_THINGS",
    INTEGRATION_LORIOT = "INTEGRATION_LORIOT",
    INTEGRATION_MQTT = "INTEGRATION_MQTT",
    INTEGRATION_OPC_UA = "INTEGRATION_OPC_UA",
    INTEGRATION_PARTICLE = "INTEGRATION_PARTICLE",
    INTEGRATION_PUB_SUB = "INTEGRATION_PUB_SUB",
    INTEGRATION_RABBITMQ = "INTEGRATION_RABBITMQ",
    INTEGRATION_REMOTE = "INTEGRATION_REMOTE",
    INTEGRATION_SIGFOX = "INTEGRATION_SIGFOX",
    INTEGRATION_TCP = "INTEGRATION_TCP",
    INTEGRATION_THINGPARK = "INTEGRATION_THINGPARK",
    INTEGRATION_THINGPARK_ENTERPRISE = "INTEGRATION_THINGPARK_ENTERPRISE",
    INTEGRATION_TTI = "INTEGRATION_TTI",
    INTEGRATION_TTN = "INTEGRATION_TTN",
    INTEGRATION_TUYA = "INTEGRATION_TUYA",
    INTEGRATION_UDP = "INTEGRATION_UDP"
}
export declare const installMethodLabels: Map<string, string>;
export declare const installMethodIcons: Map<string, string>;
export declare enum InstallStepType {
    SHOW_INSTRUCTION = "SHOW_INSTRUCTION",
    SHOW_FORM = "SHOW_FORM",
    DEVICE_PROFILE = "DEVICE_PROFILE",
    UPLINK_CONVERTER = "UPLINK_CONVERTER",
    DOWNLINK_CONVERTER = "DOWNLINK_CONVERTER",
    INTEGRATION = "INTEGRATION",
    DEVICE = "DEVICE",
    GATEWAY = "GATEWAY",
    GATEWAY_CONNECTOR = "GATEWAY_CONNECTOR",
    DASHBOARD = "DASHBOARD",
    RULE_CHAIN = "RULE_CHAIN"
}
export declare const ENTITY_STEP_TYPES: Set<string>;
export declare const stepTypeAliasMap: Record<string, string>;
export interface DeviceInstallStep {
    type: InstallStepType;
    name: string;
    file?: string;
    template?: string;
    serverAttributes?: string;
    sharedAttributes?: string;
    credentials?: string;
    dockerCompose?: string;
    form?: string;
}
export interface DevicePackageInfo {
    name: string;
    description: string;
    vendor: string;
    hardwareType: string;
    installMethods: string[];
    installSteps: Record<string, DeviceInstallStep[]>;
    productURL?: string;
    datasheetURL?: string;
}
export declare enum FormFieldType {
    STRING = "STRING",
    INTEGER = "INTEGER",
    BOOLEAN = "BOOLEAN",
    SELECT = "SELECT",
    STRING_AUTOCOMPLETE = "STRING_AUTOCOMPLETE",
    PASSWORD = "PASSWORD"
}
export type SecretType = 'TEXT' | 'TEXT_FILE';
export interface FormFieldValidator {
    pattern: string;
    message: string;
}
export interface FormFieldOption {
    value: string;
    label: string;
}
export interface FormFieldDefinition {
    key: string;
    label: string;
    type: FormFieldType;
    defaultValue?: any;
    required?: boolean;
    helpText?: string;
    helpImage?: string;
    validators?: FormFieldValidator[];
    options?: FormFieldOption[];
    randomGenerator?: boolean;
    randomSize?: number;
    randomByDefault?: boolean;
    secretSupport?: boolean;
    secretType?: SecretType;
    group?: string;
}
export interface EntityStepOutput {
    id: string;
    name: string;
    url?: string;
    token?: string;
    dockerComposeUrl?: string;
    routingKey?: string;
    httpEndpoint?: string;
    baseUrl?: string;
}
export type EntityStepStatus = 'pending' | 'running' | 'success' | 'error' | 'conflict';
export type ConflictType = 'use-or-overwrite' | 'overwrite-or-copy';
export interface EntityStepProgress {
    step: DeviceInstallStep;
    status: EntityStepStatus;
    resolvedName?: string;
    entityOutput?: EntityStepOutput;
    errorMessage?: string;
    existingEntity?: EntityStepOutput;
    conflictType?: ConflictType;
    resolution?: string;
}
