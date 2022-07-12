import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { IntegrationId } from '@shared/models/id/integration-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { ActivatedRouteSnapshot } from '@angular/router';
export declare enum IntegrationType {
    HTTP = "HTTP",
    OCEANCONNECT = "OCEANCONNECT",
    SIGFOX = "SIGFOX",
    THINGPARK = "THINGPARK",
    LORIOT = "LORIOT",
    TPE = "TPE",
    TMOBILE_IOT_CDP = "TMOBILE_IOT_CDP",
    MQTT = "MQTT",
    AWS_IOT = "AWS_IOT",
    AWS_SQS = "AWS_SQS",
    AWS_KINESIS = "AWS_KINESIS",
    IBM_WATSON_IOT = "IBM_WATSON_IOT",
    CHIRPSTACK = "CHIRPSTACK",
    TTN = "TTN",
    TTI = "TTI",
    AZURE_EVENT_HUB = "AZURE_EVENT_HUB",
    AZURE_IOT_HUB = "AZURE_IOT_HUB",
    OPC_UA = "OPC_UA",
    UDP = "UDP",
    TCP = "TCP",
    KAFKA = "KAFKA",
    RABBITMQ = "RABBITMQ",
    APACHE_PULSAR = "APACHE_PULSAR",
    PUB_SUB = "PUB_SUB",
    COAP = "COAP",
    CUSTOM = "CUSTOM"
}
export declare enum CoapSecurityMode {
    NO_SECURE = "NO_SECURE",
    DTLS = "DTLS",
    MIXED = "MIXED"
}
export declare const coapSecurityModeTranslationsMap: Map<CoapSecurityMode, string>;
export interface IntegrationTypeInfo {
    name: string;
    http?: boolean;
    mqtt?: boolean;
    remote?: boolean;
}
export declare const integrationTypeInfoMap: Map<IntegrationType, IntegrationTypeInfo>;
export declare function getIntegrationHelpLink(integration: Integration): string;
export interface Integration extends BaseData<IntegrationId>, ExportableEntity<IntegrationId> {
    tenantId?: TenantId;
    defaultConverterId: ConverterId;
    downlinkConverterId?: ConverterId;
    name: string;
    routingKey: string;
    type: IntegrationType;
    debugMode: boolean;
    enabled: boolean;
    remote: boolean;
    allowCreateDevicesOrAssets: boolean;
    secret: string;
    configuration: any;
    additionalInfo?: any;
    edgeTemplate: boolean;
}
export interface IntegrationParams extends EntityGroupParams {
    integrationScope: string;
}
export declare enum IntegrationSubType {
    CORE = "CORE",
    EDGE = "EDGE"
}
export declare function resolveIntegrationParams(route: ActivatedRouteSnapshot): IntegrationParams;
