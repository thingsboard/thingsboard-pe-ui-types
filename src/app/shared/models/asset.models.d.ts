import { BaseData } from '@shared/models/base-data';
import { AssetId } from './id/asset-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EntitySearchQuery } from '@shared/models/relation.models';
export interface Asset extends BaseData<AssetId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    label: string;
    additionalInfo?: any;
}
export interface AssetInfo extends Asset {
    customerTitle: string;
    customerIsPublic: boolean;
}
export interface AssetSearchQuery extends EntitySearchQuery {
    assetTypes: Array<string>;
}
