import { ValidatorFn } from '@angular/forms';
import { Lwm2mSecurityType } from '@shared/models/lwm2m-security-config.models';
export declare const PAGE_SIZE_LIMIT = 50;
export declare const INSTANCES = "instances";
export declare const RESOURCES = "resources";
export declare const OBSERVE = "observe";
export declare const ATTRIBUTE = "attribute";
export declare const TELEMETRY = "telemetry";
export declare const KEY_NAME = "keyName";
export declare const DEFAULT_ID_SERVER = 123;
export declare const DEFAULT_ID_BOOTSTRAP = 0;
export declare const DEFAULT_LOCAL_HOST_NAME = "localhost";
export declare const DEFAULT_PORT_SERVER_NO_SEC = 5685;
export declare const DEFAULT_PORT_BOOTSTRAP_NO_SEC = 5687;
export declare const DEFAULT_CLIENT_HOLD_OFF_TIME = 1;
export declare const DEFAULT_LIFE_TIME = 300;
export declare const DEFAULT_MIN_PERIOD = 1;
export declare const DEFAULT_NOTIF_IF_DESIBLED = true;
export declare const DEFAULT_BINDING = "U";
export declare const DEFAULT_BOOTSTRAP_SERVER_ACCOUNT_TIME_OUT = 0;
export declare const INSTANCES_ID_VALUE_MIN = 0;
export declare const INSTANCES_ID_VALUE_MAX = 65535;
export declare const DEFAULT_OTA_UPDATE_PROTOCOL = "coap://";
export declare const DEFAULT_FW_UPDATE_RESOURCE: string;
export declare const DEFAULT_SW_UPDATE_RESOURCE: string;
export declare const DEFAULT_PSM_ACTIVITY_TIMER = 10000;
export declare const DEFAULT_EDRX_CYCLE = 81000;
export declare const DEFAULT_PAGING_TRANSMISSION_WINDOW = 10000;
export declare enum BingingMode {
    U = "U",
    M = "M",
    H = "H",
    T = "T",
    S = "S",
    N = "N",
    UQ = "UQ",
    UQS = "UQS",
    TQ = "TQ",
    TQS = "TQS",
    SQ = "SQ"
}
export declare const BingingModeTranslationsMap: Map<BingingMode, string>;
export declare enum AttributeName {
    pmin = "pmin",
    pmax = "pmax",
    gt = "gt",
    lt = "lt",
    st = "st"
}
export declare const AttributeNameTranslationMap: Map<AttributeName, string>;
export declare enum ServerConfigType {
    LWM2M = "LWM2M",
    BOOTSTRAP = "BOOTSTRAP"
}
export declare const ServerConfigTypeTranslationMap: Map<ServerConfigType, string>;
export declare enum PowerMode {
    PSM = "PSM",
    DRX = "DRX",
    E_DRX = "E_DRX"
}
export declare const PowerModeTranslationMap: Map<PowerMode, string>;
export declare enum ObjectIDVer {
    V1_0 = "1.0",
    V1_1 = "1.1"
}
export declare const ObjectIDVerTranslationMap: Map<ObjectIDVer, string>;
export interface ServerSecurityConfig {
    host?: string;
    port?: number;
    securityMode: Lwm2mSecurityType;
    securityHost?: string;
    securityPort?: number;
    serverPublicKey?: string;
    serverCertificate?: string;
    clientHoldOffTime?: number;
    shortServerId?: number;
    bootstrapServerAccountTimeout: number;
    lifetime: number;
    defaultMinPeriod: number;
    notifIfDisabled: boolean;
    binding: string;
    bootstrapServerIs: boolean;
}
export interface ServerSecurityConfigInfo extends ServerSecurityConfig {
    securityHost?: string;
    securityPort?: number;
    bootstrapServerIs: boolean;
}
export interface Lwm2mProfileConfigModels {
    clientLwM2mSettings: ClientLwM2mSettings;
    observeAttr: ObservableAttributes;
    bootstrapServerUpdateEnable: boolean;
    bootstrap: Array<ServerSecurityConfig>;
}
export interface ClientLwM2mSettings {
    clientOnlyObserveAfterConnect: number;
    fwUpdateStrategy: number;
    swUpdateStrategy: number;
    fwUpdateResource?: string;
    swUpdateResource?: string;
    powerMode: PowerMode;
    edrxCycle?: number;
    pagingTransmissionWindow?: number;
    psmActivityTimer?: number;
    defaultObjectIDVer: ObjectIDVer;
}
export interface ObservableAttributes {
    observe: string[];
    attribute: string[];
    telemetry: string[];
    keyName: {};
    attributeLwm2m: AttributesNameValueMap;
}
export declare function getDefaultProfileObserveAttrConfig(): ObservableAttributes;
export declare function getDefaultProfileClientLwM2mSettingsConfig(): ClientLwM2mSettings;
export type ResourceSettingTelemetry = 'observe' | 'attribute' | 'telemetry';
export interface ResourceLwM2M {
    id: number;
    name: string;
    observe: boolean;
    attribute: boolean;
    telemetry: boolean;
    keyName: string;
    attributes?: AttributesNameValueMap;
}
export interface Instance {
    id: number;
    attributes?: AttributesNameValueMap;
    resources: ResourceLwM2M[];
}
/**
 * multiple  == true  => Multiple
 * multiple  == false => Single
 * mandatory == true  => Mandatory
 * mandatory == false => Optional
 */
export interface ObjectLwM2M {
    id: number;
    keyId: string;
    name: string;
    multiple?: boolean;
    mandatory?: boolean;
    attributes?: AttributesNameValueMap;
    instances?: Instance[];
}
export type AttributesNameValueMap = {
    [key in AttributeName]?: number;
};
export interface AttributesNameValue {
    name: AttributeName;
    value: number;
}
export declare function valueValidatorByAttributeName(attributeName: AttributeName): ValidatorFn[];
