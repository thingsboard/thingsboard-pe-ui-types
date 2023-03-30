import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitySearchDirection, RelationEntityTypeFilter } from '@shared/models/relation.models';
import { EntityFilter } from '@shared/models/query/query.models';
export declare enum AliasFilterType {
    singleEntity = "singleEntity",
    entityGroup = "entityGroup",
    entityList = "entityList",
    entityName = "entityName",
    entityType = "entityType",
    entityGroupList = "entityGroupList",
    entityGroupName = "entityGroupName",
    entitiesByGroupName = "entitiesByGroupName",
    stateEntity = "stateEntity",
    stateEntityOwner = "stateEntityOwner",
    assetType = "assetType",
    deviceType = "deviceType",
    entityViewType = "entityViewType",
    edgeType = "edgeType",
    apiUsageState = "apiUsageState",
    relationsQuery = "relationsQuery",
    assetSearchQuery = "assetSearchQuery",
    deviceSearchQuery = "deviceSearchQuery",
    entityViewSearchQuery = "entityViewSearchQuery",
    edgeSearchQuery = "edgeSearchQuery",
    schedulerEvent = "schedulerEvent"
}
export declare const edgeAliasFilterTypes: string[];
export declare const aliasFilterTypeTranslationMap: Map<AliasFilterType, string>;
export interface SingleEntityFilter {
    singleEntity?: EntityId;
}
export interface EntityGroupFilter {
    groupStateEntity?: boolean;
    stateEntityParamName?: string;
    defaultStateGroupType?: EntityType;
    defaultStateEntityGroup?: string;
    groupType?: EntityType;
    entityGroup?: string;
}
export interface EntityListFilter {
    entityType?: EntityType;
    entityList?: string[];
}
export interface EntityNameFilter {
    entityType?: EntityType;
    entityNameFilter?: string;
}
export interface EntityTypeFilter {
    entityType?: EntityType;
}
export interface EntityGroupListFilter {
    groupType?: EntityType;
    entityGroupList?: string[];
}
export interface EntityGroupNameFilter {
    groupType?: EntityType;
    entityGroupNameFilter?: string;
}
export interface EntitiesByGroupNameFilter {
    groupStateEntity?: boolean;
    stateEntityParamName?: string;
    groupType?: EntityType;
    ownerId?: EntityId;
    entityGroupNameFilter?: string;
}
export interface StateEntityFilter {
    stateEntityParamName?: string;
    defaultStateEntity?: EntityId;
}
export interface StateEntityOwnerFilter {
    stateEntityParamName?: string;
    defaultStateEntity?: EntityId;
}
export interface AssetTypeFilter {
    assetType?: string;
    assetNameFilter?: string;
}
export interface DeviceTypeFilter {
    deviceType?: string;
    deviceNameFilter?: string;
}
export interface EntityViewFilter {
    entityViewType?: string;
    entityViewNameFilter?: string;
}
export interface EdgeTypeFilter {
    edgeType?: string;
    edgeNameFilter?: string;
}
export interface RelationsQueryFilter {
    rootStateEntity?: boolean;
    stateEntityParamName?: string;
    defaultStateEntity?: EntityId;
    rootEntity?: EntityId;
    direction?: EntitySearchDirection;
    filters?: Array<RelationEntityTypeFilter>;
    maxLevel?: number;
    fetchLastLevelOnly?: boolean;
}
export interface EntitySearchQueryFilter {
    rootStateEntity?: boolean;
    stateEntityParamName?: string;
    defaultStateEntity?: EntityId;
    rootEntity?: EntityId;
    relationType?: string;
    direction?: EntitySearchDirection;
    maxLevel?: number;
    fetchLastLevelOnly?: boolean;
}
export interface ApiUsageStateFilter {
}
export interface AssetSearchQueryFilter extends EntitySearchQueryFilter {
    assetTypes?: string[];
}
export interface DeviceSearchQueryFilter extends EntitySearchQueryFilter {
    deviceTypes?: string[];
}
export interface EntityViewSearchQueryFilter extends EntitySearchQueryFilter {
    entityViewTypes?: string[];
}
export interface EdgeSearchQueryFilter extends EntitySearchQueryFilter {
    edgeTypes?: string[];
}
export interface SchedulerEventFilter {
    originatorStateEntity?: boolean;
    stateEntityParamName?: string;
    defaultStateEntity?: EntityId;
    originator?: EntityId;
    eventType?: string;
}
export type EntityFilters = SingleEntityFilter & EntityGroupFilter & EntityListFilter & EntityNameFilter & EntityTypeFilter & EntityGroupListFilter & EntityGroupNameFilter & EntitiesByGroupNameFilter & StateEntityFilter & StateEntityOwnerFilter & AssetTypeFilter & DeviceTypeFilter & EntityViewFilter & EdgeTypeFilter & RelationsQueryFilter & AssetSearchQueryFilter & DeviceSearchQueryFilter & EntityViewSearchQueryFilter & EntitySearchQueryFilter & EdgeSearchQueryFilter & SchedulerEventFilter;
export interface EntityAliasFilter extends EntityFilters {
    type?: AliasFilterType;
    resolveMultiple?: boolean;
}
export interface EntityAliasInfo {
    alias: string;
    filter: EntityAliasFilter;
    [key: string]: any;
}
export interface AliasesInfo {
    datasourceAliases: {
        [datasourceIndex: number]: EntityAliasInfo;
    };
    targetDeviceAliases: {
        [targetDeviceAliasIndex: number]: EntityAliasInfo;
    };
}
export interface EntityAlias extends EntityAliasInfo {
    id: string;
}
export interface EntityAliases {
    [id: string]: EntityAlias;
}
export interface EntityAliasFilterResult {
    stateEntity: boolean;
    entityFilter: EntityFilter;
    entityParamName?: string;
}
