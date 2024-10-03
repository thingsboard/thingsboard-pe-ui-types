import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { ContentType } from '@shared/models/constants';
import { ActivatedRouteSnapshot } from '@angular/router';
import { IntegrationType } from '@shared/models/integration.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
export declare enum ConverterType {
    UPLINK = "UPLINK",
    DOWNLINK = "DOWNLINK"
}
export declare const IntegrationTbelDefaultConvertersUrl: Map<IntegrationType, string>;
export declare const jsDefaultConvertorsUrl: Map<ConverterType, string>;
export declare const tbelDefaultConvertorsUrl: Map<ConverterType, string>;
export declare const DefaultUpdateOnlyKeysValue: string[];
export type DefaultUpdateOnlyKeys = {
    [key in IntegrationType]?: Array<string>;
};
export declare const converterTypeTranslationMap: Map<ConverterType, string>;
export interface Converter extends BaseData<ConverterId>, ExportableEntity<ConverterId> {
    tenantId?: TenantId;
    name: string;
    type: ConverterType;
    debugMode: boolean;
    configuration: ConverterConfig;
    additionalInfo?: any;
    edgeTemplate: boolean;
}
export interface ConverterConfig {
    scriptLang: ScriptLanguage;
    decoder: string;
    tbelDecoder: string;
    encoder: string;
    tbelEncoder: string;
    updateOnlyKeys: string[];
}
export interface TestUpLinkInputParams {
    metadata: {
        [key: string]: string;
    };
    payload: string;
    decoder: string;
}
export interface TestDownLinkInputParams {
    metadata: {
        [key: string]: string;
    };
    msg: string;
    msgType: string;
    integrationMetadata: {
        [key: string]: string;
    };
    encoder: string;
}
export interface LatestConverterParameters {
    converterType: ConverterType;
    integrationType?: IntegrationType;
    integrationName?: string;
}
export type TestConverterInputParams = TestUpLinkInputParams & TestDownLinkInputParams;
export interface TestConverterResult {
    output: string;
    error: string;
}
export interface ConverterDebugInput {
    inContentType: ContentType;
    inContent: string;
    inMetadata: string;
    inMsgType: string;
    inIntegrationMetadata: string;
}
export declare enum ConverterSourceType {
    NEW = "new",
    EXISTING = "existing",
    LIBRARY = "library",
    SKIP = "skip"
}
export interface ConverterLibraryValue {
    vendor: string;
    model: string;
    converter: Converter;
}
export interface Vendor {
    name: string;
    logo: string;
}
export interface Model {
    name: string;
    photo: string;
    info: {
        description: string;
        label: string;
        url: string;
    };
    searchText?: string;
}
export declare function getConverterHelpLink(converter: Converter): string;
export interface ConverterParams {
    converterScope: string;
}
export declare function resolveConverterParams(route: ActivatedRouteSnapshot): ConverterParams;
