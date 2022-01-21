import { BaseData, HasId } from '@shared/models/base-data';
import { EntityBooleanFunction, EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityGroupInfo, EntityGroupParams, ShortEntityView } from '@shared/models/entity-group.models';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { InjectionToken } from '@angular/core';
import { Device } from '@shared/models/device.models';
import { EntityType } from '@shared/models/entity-type.models';
import { WidgetActionDescriptor } from '@shared/models/widget.models';
import { Asset } from '@shared/models/asset.models';
import { EntityView } from '@shared/models/entity-view.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { User } from '@shared/models/user.model';
import { Customer } from '@shared/models/customer.model';
import { Edge } from '@shared/models/edge.models';
export declare const ASSET_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<Asset>>;
export declare const DEVICE_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<Device>>;
export declare const ENTITY_VIEW_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<EntityView>>;
export declare const EDGE_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<Edge>>;
export declare const DASHBOARD_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<Dashboard>>;
export declare const USER_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<User>>;
export declare const CUSTOMER_GROUP_CONFIG_FACTORY: InjectionToken<EntityGroupStateConfigFactory<Customer>>;
export declare const groupConfigFactoryTokenMap: Map<EntityType, InjectionToken<EntityGroupStateConfigFactory<BaseData<HasId>>>>;
export interface EntityGroupStateConfigFactory<T extends BaseData<HasId>> {
    createConfig(params: EntityGroupParams, entityGroup: EntityGroupStateInfo<T>): Observable<GroupEntityTableConfig<T>>;
}
export interface EntityGroupStateInfo<T extends BaseData<HasId>> extends EntityGroupInfo {
    customerGroupsTitle?: string;
    parentEntityGroup?: EntityGroupInfo;
    entityGroupConfig?: GroupEntityTableConfig<T>;
    edgeGroupsTitle?: string;
    edgeGroupName?: string;
}
export declare class GroupEntityTableConfig<T extends BaseData<HasId>> extends EntityTableConfig<T, PageLink, ShortEntityView> {
    entityGroup: EntityGroupStateInfo<T>;
    groupParams: EntityGroupParams;
    customerId: string;
    settings: import("@shared/models/entity-group.models").EntityGroupSettings;
    actionDescriptorsBySourceId: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    };
    onToggleEntityGroupDetails: () => void;
    onToggleEntityDetails: ($event: Event, entity: ShortEntityView) => void;
    assignmentEnabled: EntityBooleanFunction<T | ShortEntityView>;
    loginAsUserEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageCredentialsEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageUsersEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageCustomersEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageAssetsEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageDevicesEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageEntityViewsEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageEdgesEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageDashboardsEnabled: EntityBooleanFunction<T | ShortEntityView>;
    manageSchedulerEventsEnabled: EntityBooleanFunction<T | ShortEntityView>;
    constructor(entityGroup: EntityGroupStateInfo<T>, groupParams: EntityGroupParams);
}
