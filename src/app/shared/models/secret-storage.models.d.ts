import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { SecretStorageId } from '@shared/models/id/secret-storage-id';
import { ResourceReferences, TbResourceInfo } from '@shared/models/resource.models';
export interface SecretStorage extends BaseData<SecretStorageId> {
    tenantId?: TenantId;
    name: string;
    type: SecretStorageType;
    description?: any;
}
export interface SecretStorageInfo extends SecretStorage {
    value: string;
}
export declare enum SecretStorageType {
    TEXT = "TEXT",
    TEXT_FILE = "TEXT_FILE"
}
export declare const secretStorageTypeTranslationMap: Map<SecretStorageType, string>;
export declare const secretStorageCreateTitleTranslationMap: Map<SecretStorageType, string>;
export interface SecretWithReferences extends SecretStorage {
    references: any;
}
export interface SecretDeleteResult {
    resource: SecretStorage;
    success: boolean;
    resourceIsReferencedError?: boolean;
    error?: any;
    references?: ResourceReferences;
}
export type SecretResourceInfo = TbResourceInfo<SecretStorage>;
export declare const toSecretDeleteResult: (resource: SecretStorage, e?: any) => SecretDeleteResult;
export declare const parseSecret: (str: string) => string;
