import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { TbResourceId } from '@shared/models/id/tb-resource-id';
export declare enum ResourceType {
    LWM2M_MODEL = "LWM2M_MODEL",
    PKCS_12 = "PKCS_12",
    JKS = "JKS",
    JS_MODULE = "JS_MODULE"
}
export declare const ResourceTypeMIMETypes: Map<ResourceType, string>;
export declare const ResourceTypeExtension: Map<ResourceType, string>;
export declare const ResourceTypeTranslationMap: Map<ResourceType, string>;
export interface ResourceInfo extends Omit<BaseData<TbResourceId>, 'name' | 'label'> {
    tenantId?: TenantId;
    resourceKey?: string;
    title?: string;
    resourceType: ResourceType;
}
export interface Resource extends ResourceInfo {
    data: string;
    fileName: string;
    name?: string;
}
export interface Resources extends ResourceInfo {
    data: Array<string>;
    fileName: Array<string>;
}
