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
export declare type EntityBooleanFunction<T extends BaseData<HasId>> = (entity: T) => boolean;
export declare type EntityStringFunction<T extends BaseData<HasId>> = (entity: T) => string;
export declare type EntityVoidFunction<T extends BaseData<HasId>> = (entity: T) => void;
export declare type EntityIdsVoidFunction<T extends BaseData<HasId>> = (ids: HasUUID[]) => void;
export declare type EntityCountStringFunction = (count: number) => string;
export declare type EntityTwoWayOperation<T extends BaseData<HasId>> = (entity: T, originalEntity?: T) => Observable<T>;
export declare type EntityByIdOperation<T extends BaseData<HasId>> = (id: HasUUID) => Observable<T>;
export declare type EntityIdOneWayOperation = (id: HasUUID) => Observable<any>;
export declare type EntityActionFunction<T extends BaseData<HasId>> = (action: EntityAction<T>) => boolean;
export declare type CreateEntityOperation<T extends BaseData<HasId>> = () => Observable<T>;
export declare type EntityRowClickFunction<T extends BaseData<HasId>> = (event: Event, entity: T) => boolean;
export declare type CellContentFunction<T extends BaseData<HasId>> = (entity: T, key: string) => string;
export declare type CellChartContentFunction<T extends BaseData<HasId>> = (entity: T, key: string) => number[];
export declare type CellTooltipFunction<T extends BaseData<HasId>> = (entity: T, key: string) => string | undefined;
export declare type HeaderCellStyleFunction<T extends BaseData<HasId>> = (key: string) => object;
export declare type CellStyleFunction<T extends BaseData<HasId>> = (entity: T, key: string) => object;
export declare type CopyCellContent<T extends BaseData<HasId>> = (entity: T, key: string, length: number) => object;
export declare enum CellActionDescriptorType {
    'DEFAULT' = 0,
    'COPY_BUTTON' = 1
}
export interface CellActionDescriptor<T extends BaseData<HasId>> {
    name: string;
    nameFunction?: (entity: T) => string;
    icon?: string;
    mdiIcon?: string;
    mdiIconFunction?: (entity: T) => string;
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
    isMdiIcon?: boolean;
    isEnabled: () => boolean;
    onAction: ($event: MouseEvent) => void;
}
export declare type EntityTableColumnType = 'content' | 'action' | 'chart';
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
export declare type EntityColumn<T extends BaseData<HasId>> = EntityTableColumn<T> | EntityActionTableColumn<T> | ChartEntityTableColumn<T>;
export declare class EntityTableConfig<T extends BaseData<HasId>, P extends PageLink = PageLink, L extends BaseData<HasId> = T> {
    constructor();
    private table;
    private entityDetailsPage;
    componentsData: any;
    loadDataOnInit: boolean;
    onLoadAction: (route: ActivatedRoute) => void;
    useTimePageLink: boolean;
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
    entityComponent: Type<EntityComponent<T, P, L>>;
    entityTabsComponent: Type<EntityTabsComponent<T, P, L>>;
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
export declare function defaultEntityTablePermissions(userPermissionsService: UserPermissionsService, entitiesTableConfig: EntityTableConfig<BaseData<HasId>>): void;
