import { BaseData, HasId } from '@shared/models/base-data';
import { EntitiesDataSource, EntitiesFetchFunction } from '@home/models/datasource/entity-datasource';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SortOrder } from '@shared/models/page/sort-order';
import { EntityType, EntityTypeResource, EntityTypeTranslation } from '@shared/models/entity-type.models';
import { EntityComponent } from '@home/components/entity/entity.component';
import { Type } from '@angular/core';
import { EntityAction } from './entity-component.models';
import { HasUUID } from '@shared/models/id/has-uuid';
import { PageLink } from '@shared/models/page/page-link';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { ActivatedRoute } from '@angular/router';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { IEntitiesTableComponent } from '@home/models/entity/entity-table-component.models';
import { IEntityDetailsPageComponent } from '@home/models/entity/entity-details-page-component.models';
import { MatButton } from '@angular/material/button';
import { EntityGroupParams } from '@shared/models/entity-group.models';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTabsComponent } from '@home/components/group/group-entity-tabs.component';
import { EntityInfoData } from '@shared/models/entity.models';
export type EntityBooleanFunction<T extends BaseData<HasId>> = (entity: T) => boolean;
export type EntityStringFunction<T extends BaseData<HasId>> = (entity: T) => string;
export type EntityVoidFunction<T extends BaseData<HasId>> = (entity: T) => void;
export type EntityIdsVoidFunction<T extends BaseData<HasId>> = (ids: HasUUID[]) => void;
export type EntityCountStringFunction = (count: number) => string;
export type EntityTwoWayOperation<T extends BaseData<HasId>> = (entity: T, originalEntity?: T) => Observable<T>;
export type EntityByIdOperation<T extends BaseData<HasId>> = (id: HasUUID) => Observable<T>;
export type EntityIdOneWayOperation = (id: HasUUID) => Observable<any>;
export type EntityActionFunction<T extends BaseData<HasId>> = (action: EntityAction<T>) => boolean;
export type CreateEntityOperation<T extends BaseData<HasId>> = () => Observable<T>;
export type EntityRowClickFunction<T extends BaseData<HasId>> = (event: Event, entity: T) => boolean;
export type CellContentFunction<T extends BaseData<HasId>> = (entity: T, key: string) => string;
export type CellChartContentFunction<T extends BaseData<HasId>> = (entity: T, key: string) => number[];
export type CellTooltipFunction<T extends BaseData<HasId>> = (entity: T, key: string) => string | undefined;
export type HeaderCellStyleFunction<T extends BaseData<HasId>> = (key: string) => object;
export type CellStyleFunction<T extends BaseData<HasId>> = (entity: T, key: string) => object;
export type CopyCellContent<T extends BaseData<HasId>> = (entity: T, key: string, length: number) => object;
export declare enum CellActionDescriptorType {
    'DEFAULT' = 0,
    'COPY_BUTTON' = 1
}
export interface CellActionDescriptor<T extends BaseData<HasId>> {
    name: string;
    nameFunction?: (entity: T) => string;
    icon?: string;
    iconFunction?: (entity: T) => string;
    style?: any;
    isEnabled: (entity: T) => boolean;
    onAction: ($event: MouseEvent, entity: T) => any;
    type?: CellActionDescriptorType;
}
export interface GroupActionDescriptor<T extends BaseData<HasId>> {
    name: string;
    icon: string;
    isEnabled: boolean;
    onAction: ($event: MouseEvent, entities: T[]) => void;
}
export interface HeaderActionDescriptor {
    name: string;
    icon: string;
    isEnabled: () => boolean;
    onAction: ($event: MouseEvent, headerButton?: MatButton) => void;
}
export type EntityTableColumnType = 'content' | 'action' | 'link' | 'chart' | 'groups';
export declare class BaseEntityTableColumn<T extends BaseData<HasId>> {
    type: EntityTableColumnType;
    key: string;
    title: string;
    width: string;
    sortable: boolean;
    ignoreTranslate: boolean;
    mobileHide: boolean;
    constructor(type: EntityTableColumnType, key: string, title: string, width?: string, sortable?: boolean, ignoreTranslate?: boolean, mobileHide?: boolean);
}
export declare class EntityTableColumn<T extends BaseData<HasId>> extends BaseEntityTableColumn<T> {
    key: string;
    title: string;
    width: string;
    cellContentFunction: CellContentFunction<T>;
    cellStyleFunction: CellStyleFunction<T>;
    sortable: boolean;
    headerCellStyleFunction: HeaderCellStyleFunction<T>;
    cellTooltipFunction: CellTooltipFunction<T>;
    isNumberColumn: boolean;
    actionCell: CellActionDescriptor<T>;
    constructor(key: string, title: string, width?: string, cellContentFunction?: CellContentFunction<T>, cellStyleFunction?: CellStyleFunction<T>, sortable?: boolean, headerCellStyleFunction?: HeaderCellStyleFunction<T>, cellTooltipFunction?: CellTooltipFunction<T>, isNumberColumn?: boolean, actionCell?: CellActionDescriptor<T>);
}
export declare class EntityActionTableColumn<T extends BaseData<HasId>> extends BaseEntityTableColumn<T> {
    key: string;
    title: string;
    actionDescriptor: CellActionDescriptor<T>;
    width: string;
    constructor(key: string, title: string, actionDescriptor: CellActionDescriptor<T>, width?: string);
}
export declare class EntityLinkTableColumn<T extends BaseData<HasId>> extends BaseEntityTableColumn<T> {
    key: string;
    title: string;
    width: string;
    cellContentFunction: CellContentFunction<T>;
    entityURL: (entity: any) => string;
    sortable: boolean;
    constructor(key: string, title: string, width: string, cellContentFunction: CellContentFunction<T>, entityURL: (entity: any) => string, sortable?: boolean);
}
export declare class DateEntityTableColumn<T extends BaseData<HasId>> extends EntityTableColumn<T> {
    constructor(key: string, title: string, datePipe: DatePipe, width?: string, dateFormat?: string, cellStyleFunction?: CellStyleFunction<T>);
}
export declare class ChartEntityTableColumn<T extends BaseData<HasId>> extends BaseEntityTableColumn<T> {
    key: string;
    title: string;
    width: string;
    cellContentFunction: CellChartContentFunction<T>;
    chartStyleFunction: CellStyleFunction<T>;
    cellStyleFunction: CellStyleFunction<T>;
    constructor(key: string, title: string, width?: string, cellContentFunction?: CellChartContentFunction<T>, chartStyleFunction?: CellStyleFunction<T>, cellStyleFunction?: CellStyleFunction<T>);
}
export declare class GroupChipsEntityTableColumn<T extends BaseData<HasId>> extends BaseEntityTableColumn<T> {
    key: string;
    title: string;
    width: string;
    cellContentFunction: CellChartContentFunction<T>;
    chartStyleFunction: CellStyleFunction<T>;
    cellStyleFunction: CellStyleFunction<T>;
    constructor(key: string, title: string, width?: string, cellContentFunction?: CellChartContentFunction<T>, chartStyleFunction?: CellStyleFunction<T>, cellStyleFunction?: CellStyleFunction<T>);
}
export type EntityColumn<T extends BaseData<HasId>> = EntityTableColumn<T> | EntityActionTableColumn<T> | EntityLinkTableColumn<T> | ChartEntityTableColumn<T> | GroupChipsEntityTableColumn<T>;
export declare class EntityTableConfig<T extends BaseData<HasId>, P extends PageLink = PageLink, L extends BaseData<HasId> = T> {
    groupParams?: EntityGroupParams;
    customerId: string;
    backNavigationCommands?: any[];
    constructor(groupParams?: EntityGroupParams);
    displayBackButton(): boolean;
    private table;
    private entityDetailsPage;
    componentsData: any;
    loadDataOnInit: boolean;
    onLoadAction: (route: ActivatedRoute) => void;
    useTimePageLink: boolean;
    forAllTimeEnabled: boolean;
    defaultTimewindowInterval: import("@shared/models/time/time.models").Timewindow;
    entityType: EntityType;
    tableTitle: string;
    selectionEnabled: boolean;
    searchEnabled: boolean;
    addEnabled: boolean;
    entitiesDeleteEnabled: boolean;
    detailsPanelEnabled: boolean;
    hideDetailsTabsOnEdit: boolean;
    rowPointer: boolean;
    actionsColumnTitle: any;
    entityTranslations: EntityTypeTranslation;
    entityResources: EntityTypeResource<T>;
    entityComponent: Type<EntityComponent<T, P, L> | GroupEntityComponent<T>>;
    entityTabsComponent: Type<EntityTabsComponent<T, P, L> | GroupEntityTabsComponent<T>>;
    addDialogStyle: {};
    defaultSortOrder: SortOrder;
    displayPagination: boolean;
    pageMode: boolean;
    defaultPageSize: number;
    columns: Array<EntityColumn<L>>;
    cellActionDescriptors: Array<CellActionDescriptor<L>>;
    groupActionDescriptors: Array<GroupActionDescriptor<L>>;
    headerActionDescriptors: Array<HeaderActionDescriptor>;
    addActionDescriptors: Array<HeaderActionDescriptor>;
    headerComponent: Type<EntityTableHeaderComponent<T, P, L>>;
    addEntity: CreateEntityOperation<T>;
    addDialogOwnerAndGroupWizard: boolean;
    dataSource: (dataLoadedFunction: (col?: number, row?: number) => void) => EntitiesDataSource<L>;
    detailsReadonly: EntityBooleanFunction<T>;
    entitySelectionEnabled: EntityBooleanFunction<L>;
    deleteEnabled: EntityBooleanFunction<T | L>;
    deleteEntityTitle: EntityStringFunction<L>;
    deleteEntityContent: EntityStringFunction<L>;
    deleteEntitiesTitle: EntityCountStringFunction;
    deleteEntitiesContent: EntityCountStringFunction;
    loadEntity: EntityByIdOperation<T | L>;
    saveEntity: EntityTwoWayOperation<T>;
    deleteEntity: EntityIdOneWayOperation;
    entitiesFetchFunction: EntitiesFetchFunction<L, P>;
    onEntityAction: EntityActionFunction<T>;
    handleRowClick: EntityRowClickFunction<L>;
    entityTitle: EntityStringFunction<T | L>;
    entityAdded: EntityVoidFunction<T>;
    entityUpdated: EntityVoidFunction<T>;
    entitiesDeleted: EntityIdsVoidFunction<T>;
    getTable(): IEntitiesTableComponent;
    setTable(table: IEntitiesTableComponent): void;
    getEntityDetailsPage(): IEntityDetailsPageComponent;
    setEntityDetailsPage(entityDetailsPage: IEntityDetailsPageComponent): void;
    updateData(closeDetails?: boolean): void;
    toggleEntityDetails($event: Event, entity: T): void;
    isDetailsOpen(): boolean;
    getActivatedRoute(): ActivatedRoute;
}
export declare const checkBoxCell: (value: boolean) => string;
export declare const groupsCell: (groups?: EntityInfoData[]) => string;
export declare const defaultEntityTablePermissions: (userPermissionsService: UserPermissionsService, entitiesTableConfig: EntityTableConfig<BaseData<HasId>>) => void;
