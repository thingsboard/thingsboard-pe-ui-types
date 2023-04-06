import { InjectionToken } from '@angular/core';
import { IModulesMap } from '@modules/common/modules-map.models';
export declare const Constants: {
    serverErrorCode: {
        general: number;
        authentication: number;
        jwtTokenExpired: number;
        tenantTrialExpired: number;
        credentialsExpired: number;
        permissionDenied: number;
        invalidArguments: number;
        badRequestParams: number;
        itemNotFound: number;
        tooManyRequests: number;
        tooManyUpdates: number;
    };
    entryPoints: {
        login: string;
        tokenRefresh: string;
        nonTokenBased: string;
    };
};
export declare const serverErrorCodesTranslations: Map<number, string>;
export declare const MediaBreakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    'lt-sm': string;
    'lt-md': string;
    'lt-lg': string;
    'lt-xl': string;
    'gt-xs': string;
    'gt-sm': string;
    'gt-md': string;
    'gt-lg': string;
    'gt-xl': string;
};
export declare const helpBaseUrl = "https://thingsboard.io";
export declare const HelpLinks: {
    linksMap: {
        docs: string;
        outgoingMailSettings: string;
        smsProviderSettings: string;
        slackSettings: string;
        securitySettings: string;
        oauth2Settings: string;
        twoFactorAuthSettings: string;
        ruleEngine: string;
        ruleNodeCheckRelation: string;
        ruleNodeCheckExistenceFields: string;
        ruleNodeGpsGeofencingFilter: string;
        ruleNodeJsFilter: string;
        ruleNodeJsSwitch: string;
        ruleNodeAssetProfileSwitch: string;
        ruleNodeDeviceProfileSwitch: string;
        ruleNodeCheckAlarmStatus: string;
        ruleNodeMessageTypeFilter: string;
        ruleNodeMessageTypeSwitch: string;
        ruleNodeOriginatorTypeFilter: string;
        ruleNodeOriginatorTypeSwitch: string;
        ruleNodeOriginatorAttributes: string;
        ruleNodeOriginatorFields: string;
        ruleNodeOriginatorTelemetry: string;
        ruleNodeCustomerAttributes: string;
        ruleNodeCustomerDetails: string;
        ruleNodeDeviceAttributes: string;
        ruleNodeRelatedAttributes: string;
        ruleNodeTenantAttributes: string;
        ruleNodeTenantDetails: string;
        ruleNodeChangeOriginator: string;
        ruleNodeTransformMsg: string;
        ruleNodeMsgToEmail: string;
        ruleNodeAssignToCustomer: string;
        ruleNodeUnassignFromCustomer: string;
        ruleNodeClearAlarm: string;
        ruleNodeCreateAlarm: string;
        ruleNodeCreateRelation: string;
        ruleNodeDeleteRelation: string;
        ruleNodeMsgDelay: string;
        ruleNodeMsgGenerator: string;
        ruleNodeGpsGeofencingEvents: string;
        ruleNodeLog: string;
        ruleNodeRpcCallReply: string;
        ruleNodeRpcCallRequest: string;
        ruleNodeSaveAttributes: string;
        ruleNodeSaveTimeseries: string;
        ruleNodeSaveToCustomTable: string;
        ruleNodeRuleChain: string;
        ruleNodeOutputNode: string;
        ruleNodeAwsSns: string;
        ruleNodeAwsSqs: string;
        ruleNodeKafka: string;
        ruleNodeMqtt: string;
        ruleNodeAzureIotHub: string;
        ruleNodeRabbitMq: string;
        ruleNodeRestApiCall: string;
        ruleNodeSendEmail: string;
        ruleNodeSendSms: string;
        ruleNodeMath: string;
        ruleNodeIntegrationDownlink: string;
        ruleNodeAddToGroup: string;
        ruleNodeRemoveFromGroup: string;
        ruleNodeDuplicateToGroup: string;
        ruleNodeDuplicateToGroupByName: string;
        ruleNodeDuplicateToRelated: string;
        ruleNodeChangeOwner: string;
        ruleNodeGenerateReport: string;
        ruleNodeRestCallReply: string;
        ruleNodeAggregateLatest: string;
        ruleNodeAggregateStream: string;
        ruleNodeAlarmsCount: string;
        ruleNodeAlarmsCountDeprecated: string;
        tenants: string;
        tenantProfiles: string;
        customers: string;
        users: string;
        devices: string;
        deviceProfiles: string;
        assetProfiles: string;
        edges: string;
        assets: string;
        entityViews: string;
        entitiesImport: string;
        rulechains: string;
        dashboards: string;
        resources: string;
        otaUpdates: string;
        widgetsBundles: string;
        widgetsConfig: string;
        widgetsConfigTimeseries: string;
        widgetsConfigLatest: string;
        widgetsConfigRpc: string;
        widgetsConfigAlarm: string;
        widgetsConfigStatic: string;
        ruleNodePushToCloud: string;
        ruleNodePushToEdge: string;
        converters: string;
        uplinkConverters: string;
        downlinkConverters: string;
        integrations: string;
        integrationHttp: string;
        integrationOceanConnect: string;
        integrationSigFox: string;
        integrationThingPark: string;
        integrationThingParkEnterprise: string;
        integrationTMobileIotCdp: string;
        integrationLoriot: string;
        integrationMqtt: string;
        integrationAwsIoT: string;
        integrationAwsSQS: string;
        integrationAwsKinesis: string;
        integrationIbmWatsonIoT: string;
        integrationTheThingsNetwork: string;
        integrationTheThingsIndustries: string;
        integrationChirpStack: string;
        integrationAzureEventHub: string;
        integrationAzureIoTHub: string;
        integrationOpcUa: string;
        integrationUdp: string;
        integrationTcp: string;
        integrationKafka: string;
        integrationRabbitmq: string;
        integrationApachePulsar: string;
        integrationPubsub: string;
        integrationCoAP: string;
        integrationCustom: string;
        whiteLabeling: string;
        entityGroups: string;
        customTranslation: string;
        customMenu: string;
        roles: string;
        selfRegistration: string;
        queue: string;
        repositorySettings: string;
        autoCommitSettings: string;
        twoFactorAuthentication: string;
    };
};
export interface ValueTypeData {
    name: string;
    icon: string;
}
export declare enum ValueType {
    STRING = "STRING",
    INTEGER = "INTEGER",
    DOUBLE = "DOUBLE",
    BOOLEAN = "BOOLEAN",
    JSON = "JSON"
}
export declare enum DataType {
    STRING = "STRING",
    LONG = "LONG",
    BOOLEAN = "BOOLEAN",
    DOUBLE = "DOUBLE",
    JSON = "JSON"
}
export declare const DataTypeTranslationMap: Map<DataType, string>;
export declare const valueTypesMap: Map<ValueType, ValueTypeData>;
export interface ContentTypeData {
    name: string;
    code: string;
}
export declare enum ContentType {
    JSON = "JSON",
    TEXT = "TEXT",
    BINARY = "BINARY"
}
export declare const contentTypesMap: Map<ContentType, ContentTypeData>;
export declare const hidePageSizePixelValue = 550;
export declare const customTranslationsPrefix = "custom.";
export declare const i18nPrefix = "i18n";
export declare const MODULES_MAP: InjectionToken<IModulesMap>;
