import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { BlobEntityId } from '@shared/models/id/blob-entity-id';
export interface BlobEntityInfo extends BaseData<BlobEntityId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    contentType: string;
    additionalInfo?: any;
}
export interface BlobEntityWithCustomerInfo extends BlobEntityInfo {
    customerTitle: string;
    customerIsPublic: boolean;
    typeName?: string;
}
export declare const blobEntityTypeTranslationMap: Map<string, string>;
