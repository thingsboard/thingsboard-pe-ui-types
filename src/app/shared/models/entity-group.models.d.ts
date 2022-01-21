import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { BaseData } from '@shared/models/base-data';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { WidgetActionDescriptor, WidgetActionSource, WidgetActionType } from '@shared/models/widget.models';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Customer } from '@shared/models/customer.model';
import { EntityData, EntityDataPageLink, EntityKey, EntityKeyType } from '@shared/models/query/query.models';
import { PageLink } from '@shared/models/page/page-link';
import { RoleId } from '@shared/models/id/role-id';
import { Edge } from '@shared/models/edge.models';
import { OtaPackageId } from '@shared/models/id/ota-package-id';
import { DeviceGroupOtaPackage } from '@shared/models/ota-package.models';
export declare const entityGroupTypes: EntityType[];
export declare const entityGroupActionTypes: WidgetActionType[];
export declare const entityGroupActionSources: {
    [acionSourceId: string]: WidgetActionSource;
};
export declare enum EntityGroupDetailsMode {
    onRowClick = "onRowClick",
    onActionButtonClick = "onActionButtonClick",
    disabled = "disabled"
}
export declare const entityGroupDetailsModeTranslationMap: Map<EntityGroupDetailsMode, string>;
export interface EntityGroupSettings {
    groupTableTitle: string;
    enableSearch: boolean;
    enableAdd: boolean;
    enableDelete: boolean;
    enableSelection: boolean;
    enableGroupTransfer: boolean;
    detailsMode: EntityGroupDetailsMode;
    displayPagination: boolean;
    defaultPageSize: number;
    enableAssignment: boolean;
    enableCredentialsManagement: boolean;
    enableLoginAsUser: boolean;
    enableUsersManagement: boolean;
    enableCustomersManagement: boolean;
    enableAssetsManagement: boolean;
    enableDevicesManagement: boolean;
    enableEntityViewsManagement: boolean;
    enableDashboardsManagement: boolean;
    enableEdgesManagement: boolean;
    enableSchedulerEventsManagement: boolean;
}
export declare enum EntityGroupSortOrder {
    ASC = "ASC",
    DESC = "DESC",
    NONE = "NONE"
}
export declare const entityGroupSortOrderTranslationMap: Map<EntityGroupSortOrder, string>;
export declare enum EntityGroupColumnType {
    CLIENT_ATTRIBUTE = "CLIENT_ATTRIBUTE",
    SHARED_ATTRIBUTE = "SHARED_ATTRIBUTE",
    SERVER_ATTRIBUTE = "SERVER_ATTRIBUTE",
    TIMESERIES = "TIMESERIES",
    ENTITY_FIELD = "ENTITY_FIELD"
}
export declare const entityGroupColumnTypeTranslationMap: Map<EntityGroupColumnType, string>;
export interface EntityGroupEntityField {
    name: string;
    value: string;
    time?: boolean;
}
export declare const entityGroupEntityFields: {
    [fieldName: string]: EntityGroupEntityField;
};
export declare const entityGroupEntityFieldsToKeysMap: {
    [keyName: string]: string;
};
export interface EntityGroupColumn {
    type: EntityGroupColumnType;
    key: string;
    property?: string;
    columnKey?: string;
    title?: string;
    sortOrder: EntityGroupSortOrder;
    mobileHide: boolean;
    useCellStyleFunction?: boolean;
    cellStyleFunction?: string;
    useCellContentFunction?: string;
    cellContentFunction?: string;
}
export interface EntityGroupConfiguration {
    columns: EntityGroupColumn[];
    settings: EntityGroupSettings;
    actions: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    };
}
export interface EntityGroup extends BaseData<EntityGroupId> {
    type: EntityType;
    name: string;
    ownerId: EntityId;
    groupAll?: boolean;
    additionalInfo?: any;
    configuration?: EntityGroupConfiguration;
}
export interface EntityGroupInfo extends EntityGroup {
    ownerIds: EntityId[];
    softwareId?: OtaPackageId;
    softwareGroup?: DeviceGroupOtaPackage;
    firmwareId?: OtaPackageId;
    firmwareGroup?: DeviceGroupOtaPackage;
}
export declare function prepareEntityGroupConfiguration(groupType: EntityType, configuration: EntityGroupConfiguration): EntityGroupConfiguration;
export interface ShortEntityView {
    id: EntityId;
    name: string;
    [key: string]: any;
}
export declare function groupColumnTypeToEntityKeyType(groupColumnType: EntityGroupColumnType): EntityKeyType;
export declare function entityGroupColumnKeyToEntityKey(column: EntityGroupColumn): string;
export declare function entityGroupColumnToEntityKey(column: EntityGroupColumn): EntityKey;
export declare function prepareEntityDataColumnMap(columns: EntityGroupColumn[]): {
    [entityKeyType: string]: EntityGroupColumn[];
};
export declare function entityDataToShortEntityView(entityData: EntityData, columnsMap: {
    [entityKeyType: string]: EntityGroupColumn[];
}, isUpdate?: boolean): ShortEntityView;
export declare function groupEntitiesPageLinkToEntityDataPageLink(pageLink: PageLink, columnKeyToEntityKeyMap: {
    [columnKey: string]: EntityKey;
}): EntityDataPageLink;
export declare function groupSettingsDefaults(entityType: EntityType, settings: EntityGroupSettings): EntityGroupSettings;
export declare function entityGroupsTitle(groupType: EntityType): "entity-group.asset-groups" | "entity-group.device-groups" | "entity-group.customer-groups" | "entity-group.user-groups" | "entity-group.entity-view-groups" | "entity-group.dashboard-groups" | "entity-group.edge-groups" | "scheduler.scheduler" | "edge.rulechains";
export interface HierarchyCallbacks {
    groupSelected?: (parentNodeId: string, groupId: string) => void;
    customerGroupsSelected?: (parentNodeId: string, customerId: string, groupsType: EntityType) => void;
    refreshEntityGroups?: (internalId: string) => void;
    refreshCustomerGroups?: (customerGroupIds: string[]) => void;
    refreshEdgeGroups?: (edgeGroupIds: string[]) => void;
    groupUpdated?: (entityGroup: EntityGroupInfo) => void;
    groupDeleted?: (groupNodeId: string, entityGroupId: string) => void;
    groupAdded?: (entityGroup: EntityGroupInfo, existingGroupId: string) => void;
    customerAdded?: (parentNodeId: string, customer: Customer) => void;
    customerUpdated?: (customer: Customer) => void;
    customersDeleted?: (customerIds: string[]) => void;
    edgeGroupsSelected?: (parentNodeId: string, edgeId: string, groupsType: EntityType) => void;
    edgeAdded?: (parentNodeId: string, edge: Edge) => void;
    edgeUpdated?: (edge: Edge) => void;
    edgesDeleted?: (edgeIds: string[]) => void;
}
export interface EntityGroupParams {
    customerId?: string;
    customerGroupId?: string;
    entityGroupId?: string;
    childEntityGroupId?: string;
    groupType?: EntityType;
    childGroupType?: EntityType;
    hierarchyView?: boolean;
    nodeId?: string;
    internalId?: string;
    hierarchyCallbacks?: HierarchyCallbacks;
    edge?: Edge;
    edgeId?: string;
    grandChildGroupType?: EntityType;
    grandChildGroupId?: string;
}
export interface ShareGroupRequest {
    ownerId: EntityId;
    allUserGroup: boolean;
    userGroupId?: EntityGroupId;
    readElseWrite: boolean;
    roleIds?: RoleId[];
}
export declare function resolveGroupParams(route: ActivatedRouteSnapshot): EntityGroupParams;
