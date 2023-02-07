import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageLink } from '@shared/models/page/page-link';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EntitiesDataSource } from '@home/models/datasource/entity-datasource';
import { TranslateService } from '@ngx-translate/core';
import { BaseData, HasId } from '@shared/models/base-data';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { CellActionDescriptor, CellActionDescriptorType, EntityActionTableColumn, EntityColumn, EntityTableColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { EntityTypeTranslation } from '@shared/models/entity-type.models';
import { DialogService } from '@core/services/dialog.service';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Timewindow } from '@shared/models/time/time.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import { IEntitiesTableComponent } from '@home/models/entity/entity-table-component.models';
import { EntityDetailsPanelComponent } from '@home/components/entity/entity-details-panel.component';
import * as i0 from "@angular/core";
export declare class EntitiesTableComponent extends PageComponent implements IEntitiesTableComponent, AfterViewInit, OnInit, OnChanges {
    protected store: Store<AppState>;
    route: ActivatedRoute;
    translate: TranslateService;
    dialog: MatDialog;
    private dialogService;
    private domSanitizer;
    private cd;
    private router;
    private componentFactoryResolver;
    private elementRef;
    entitiesTableConfig: EntityTableConfig<BaseData<HasId>>;
    translations: EntityTypeTranslation;
    headerActionDescriptors: Array<HeaderActionDescriptor>;
    groupActionDescriptors: Array<GroupActionDescriptor<BaseData<HasId>>>;
    cellActionDescriptors: Array<CellActionDescriptor<BaseData<HasId>>>;
    actionColumns: Array<EntityActionTableColumn<BaseData<HasId>>>;
    entityColumns: Array<EntityTableColumn<BaseData<HasId>>>;
    displayedColumns: string[];
    headerCellStyleCache: Array<any>;
    cellContentCache: Array<SafeHtml>;
    cellTooltipCache: Array<string>;
    cellStyleCache: Array<any>;
    selectionEnabled: any;
    defaultPageSize: number;
    displayPagination: boolean;
    hidePageSize: boolean;
    pageSizeOptions: any;
    pageLink: PageLink;
    pageMode: boolean;
    textSearchMode: boolean;
    timewindow: Timewindow;
    dataSource: EntitiesDataSource<BaseData<HasId>>;
    cellActionType: typeof CellActionDescriptorType;
    isDetailsOpen: boolean;
    detailsPanelOpened: EventEmitter<boolean>;
    entityTableHeaderAnchor: TbAnchorComponent;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    entityDetailsPanel: EntityDetailsPanelComponent;
    private updateDataSubscription;
    private viewInited;
    private widgetResize$;
    constructor(store: Store<AppState>, route: ActivatedRoute, translate: TranslateService, dialog: MatDialog, dialogService: DialogService, domSanitizer: DomSanitizer, cd: ChangeDetectorRef, router: Router, componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private init;
    ngAfterViewInit(): void;
    private updatePaginationSubscriptions;
    addEnabled(): boolean;
    clearSelection(): void;
    updateData(closeDetails?: boolean): void;
    private dataLoaded;
    onRowClick($event: Event, entity: any): void;
    toggleEntityDetails($event: Event, entity: any): void;
    addEntity($event: Event): void;
    onEntityUpdated(entity: BaseData<HasId>): void;
    onEntityAction(action: EntityAction<BaseData<HasId>>): void;
    deleteEntity($event: Event, entity: BaseData<HasId>): void;
    deleteEntities($event: Event, entities: BaseData<HasId>[]): void;
    onTimewindowChange(): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean, preserveTimewindow?: boolean): void;
    columnsUpdated(resetData?: boolean): void;
    headerCellStyle(column: EntityColumn<BaseData<HasId>>): any;
    clearCellCache(col: number, row: number): void;
    cellContent(entity: BaseData<HasId>, column: EntityColumn<BaseData<HasId>>, row: number): any;
    cellTooltip(entity: BaseData<HasId>, column: EntityColumn<BaseData<HasId>>, row: number): string;
    cellStyle(entity: BaseData<HasId>, column: EntityColumn<BaseData<HasId>>, row: number): any;
    cellChartStyle(entity: BaseData<HasId>, column: EntityColumn<BaseData<HasId>>, row: number): any;
    trackByColumnKey(index: any, column: EntityTableColumn<BaseData<HasId>>): string;
    trackByEntityId(index: number, entity: BaseData<HasId>): string;
    protected updatedRouterParamsAndData(queryParams: object, queryParamsHandling?: QueryParamsHandling): void;
    detectChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesTableComponent, "tb-entities-table", never, { "entitiesTableConfig": "entitiesTableConfig"; }, {}, never, never, false>;
}
