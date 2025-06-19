import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { ContentType } from '@shared/models/constants';
import { ActivatedRouteSnapshot } from '@angular/router';
import { IntegrationType } from '@shared/models/integration.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { HasEntityDebugSettings } from '@shared/models/entity.models';
import { EntityType } from '@shared/models/entity-type.models';
export declare enum ConverterType {
    UPLINK = "UPLINK",
    DOWNLINK = "DOWNLINK"
}
export declare const IntegrationTbelDefaultConvertersUrl: Map<IntegrationType, string>;
export declare const IntegrationJSDefaultConvertersUrl: Map<IntegrationType, string>;
export declare const jsDefaultConvertersUrl: Map<ConverterType, string>;
export declare const jsDefaultConvertersV2Url: Map<ConverterType, string>;
export declare const tbelDefaultConvertersUrl: Map<ConverterType, string>;
export declare const tbelDefaultConvertersV2Url: Map<ConverterType, string>;
export declare const DefaultUpdateOnlyKeysValue: string[];
export type DefaultUpdateOnlyKeys = {
    [key in IntegrationType]?: Array<string>;
};
export declare const converterTypeTranslationMap: Map<ConverterType, string>;
export declare const converterTypeTitleTranslationMap: Map<ConverterType, string>;
export type ConverterVersion = 1 | 2;
export interface Converter extends BaseData<ConverterId>, ExportableEntity<ConverterId>, HasEntityDebugSettings {
    tenantId?: TenantId;
    name: string;
    type: ConverterType;
    configuration: ConverterConfig & Partial<ConverterConfigV2>;
    additionalInfo?: any;
    edgeTemplate: boolean;
    integrationType?: IntegrationType;
    converterVersion: ConverterVersion;
}
export interface ConverterConfig {
    scriptLang: ScriptLanguage;
    decoder: string;
    tbelDecoder: string;
    encoder: string;
    tbelEncoder: string;
    updateOnlyKeys: string[];
}
export interface ConverterConfigV2 extends ConverterConfig {
    type: EntityType.DEVICE | EntityType.ASSET;
    name: string;
    profile: string;
    label: string;
    customer: string;
    group: string;
    attributes: string[];
    telemetry: string[];
}
export interface ConverterMsg {
    payload: any;
    metadata: {
        [key: string]: string;
    };
}
export interface ConvertedInputMsgParams {
    metadata: {
        [key: string]: string;
    };
    payload: {
        [key: string]: string;
    };
}
export interface ConvertedInputMsgResult {
    payload: any;
    metadata: {
        [key: string]: string;
    };
    contentType: ContentType;
    stringContent?: string;
}
export interface TestUpLinkInputParams {
    metadata: {
        [key: string]: string;
    };
    payload: string;
    decoder: string;
    converter: Converter;
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
    converterVersion?: ConverterVersion;
    converterType?: ConverterType;
    integrationType?: IntegrationType;
    integrationName?: string;
}
export type TestConverterInputParams = TestUpLinkInputParams & TestDownLinkInputParams;
export interface TestConverterResult {
    output: string;
    outputMsg?: Record<string, any>;
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
export interface ConverterLibraryInfo {
    vendor: string;
    model: string;
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
export declare const getTargetField: (converterType: ConverterType, scriptLang: ScriptLanguage) => string;
export declare const getTargetTemplateUrl: (converterType: ConverterType, scriptLang: ScriptLanguage, integrationType: IntegrationType, converterVersion?: ConverterVersion) => string;
export declare const getConverterFunctionHeldId: (converterType: ConverterType, scriptLang: ScriptLanguage, converterVersion: ConverterVersion) => string;
export declare const getConverterFunctionHeldPopupStyle: (converterType: ConverterType) => Record<string, string>;
export declare const getConverterFunctionName: (converterType: ConverterType, converterVersion: ConverterVersion) => string;
export declare const getConverterTestFunctionName: (converterType: ConverterType, converterVersion: ConverterVersion) => string;
export declare const getConverterFunctionArgs: (converterType: ConverterType) => string[];
