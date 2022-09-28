import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { AssetId } from './id/asset-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { CustomerId } from '@shared/models/id/customer-id';
import { EntitySearchQuery } from '@shared/models/relation.models';
import { AssetProfileId } from '@shared/models/id/asset-profile-id';
import { RuleChainId } from '@shared/models/id/rule-chain-id';
import { DashboardId } from '@shared/models/id/dashboard-id';
import { EntityInfoData } from '@shared/models/entity.models';
export declare const TB_SERVICE_QUEUE = "TbServiceQueue";
export interface AssetProfile extends BaseData<AssetProfileId>, ExportableEntity<AssetProfileId> {
    tenantId?: TenantId;
    name: string;
    description?: string;
    default?: boolean;
    image?: string;
    defaultRuleChainId?: RuleChainId;
    defaultDashboardId?: DashboardId;
    defaultQueueName?: string;
}
export interface AssetProfileInfo extends EntityInfoData {
    image?: string;
    defaultDashboardId?: DashboardId;
}
export interface Asset extends BaseData<AssetId>, ExportableEntity<AssetId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    name: string;
    type: string;
    label: string;
    assetProfileId?: AssetProfileId;
    additionalInfo?: any;
}
export interface AssetSearchQuery extends EntitySearchQuery {
    assetTypes: Array<string>;
}
