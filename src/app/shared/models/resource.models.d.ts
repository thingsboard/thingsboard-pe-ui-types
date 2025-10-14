import { BaseData, ExportableEntity, HasId } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { TbResourceId } from '@shared/models/id/tb-resource-id';
import { WhiteLabeling } from '@shared/models/white-labeling.models';
export declare enum ResourceType {
    LWM2M_MODEL = "LWM2M_MODEL",
    PKCS_12 = "PKCS_12",
    JKS = "JKS",
    JS_MODULE = "JS_MODULE",
    GENERAL = "GENERAL"
}
export declare enum ResourceSubType {
    IMAGE = "IMAGE",
    SCADA_SYMBOL = "SCADA_SYMBOL",
    EXTENSION = "EXTENSION",
    MODULE = "MODULE"
}
export declare const ResourceTypeMIMETypes: Map<ResourceType, string>;
export declare const ResourceTypeExtension: Map<ResourceType, string>;
export declare const ResourceTypeTranslationMap: Map<ResourceType, string>;
export declare const ResourceSubTypeTranslationMap: Map<ResourceSubType, string>;
export interface TbResourceInfo<D> extends Omit<BaseData<TbResourceId>, 'name' | 'label'>, ExportableEntity<TbResourceId> {
    tenantId?: TenantId;
    resourceKey?: string;
    title?: string;
    resourceType: ResourceType;
    resourceSubType?: ResourceSubType;
    fileName?: string;
    public?: boolean;
    publicResourceKey?: string;
    readonly link?: string;
    readonly publicLink?: string;
    descriptor?: D;
}
export type ResourceInfo = TbResourceInfo<any>;
export interface Resource extends ResourceInfo {
    data?: string;
    name?: string;
}
export interface ImageDescriptor {
    mediaType: string;
    width: number;
    height: number;
    size: number;
    etag: string;
    previewDescriptor: ImageDescriptor;
}
export type ImageResourceInfo = TbResourceInfo<ImageDescriptor>;
export interface ImageResource extends ImageResourceInfo {
    base64?: string;
}
export interface ImageExportData {
    mediaType: string;
    fileName: string;
    title: string;
    subType: string;
    resourceKey: string;
    public: boolean;
    publicResourceKey: string;
    data: string;
}
export type ImageResourceType = 'tenant' | 'system';
export type TBResourceScope = 'tenant' | 'system';
export type ResourceReferences = Array<BaseData<HasId> | WhiteLabeling>;
export interface ResourceInfoWithReferences extends ResourceInfo {
    references: ResourceReferences;
}
export interface ResourceDeleteResult {
    resource: TbResourceInfo<any>;
    success: boolean;
    resourceIsReferencedError?: boolean;
    error?: any;
    references?: ResourceReferences;
}
export declare const toResourceDeleteResult: (resource: ResourceInfo, e?: any) => ResourceDeleteResult;
export declare const imageResourceType: (imageInfo: ImageResourceInfo) => ImageResourceType;
export declare const TB_IMAGE_PREFIX = "tb-image;";
export declare const TB_RESOURCE_PREFIX = "tb-resource;";
export declare const IMAGES_URL_REGEXP: RegExp;
export declare const IMAGES_URL_PREFIX = "/api/images";
export declare const RESOURCES_URL_REGEXP: RegExp;
export declare const PUBLIC_IMAGES_URL_PREFIX = "/api/images/public";
export declare const IMAGE_BASE64_URL_PREFIX = "data:image/";
export declare const removeTbImagePrefix: (url: string) => string;
export declare const removeTbResourcePrefix: (url: string) => string;
export declare const removeTbImagePrefixFromUrls: (urls: string[]) => string[];
export declare const prependTbImagePrefix: (url: string) => string;
export declare const prependTbImagePrefixToUrls: (urls: string[]) => string[];
export declare const prependTbResourcePrefix: (url: string) => string;
export declare const isImageResourceUrl: (url: string) => boolean;
export declare const isJSResourceUrl: (url: string) => boolean;
export declare const isJSResource: (url: string) => boolean;
export declare const extractParamsFromImageResourceUrl: (url: string) => {
    type: ImageResourceType;
    key: string;
};
export declare const extractParamsFromJSResourceUrl: (url: string) => {
    type: ResourceType;
    scope: TBResourceScope;
    key: string;
};
export declare const isBase64DataImageUrl: (url: string) => boolean;
export declare const NO_IMAGE_DATA_URI = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
