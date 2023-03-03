import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WidgetContext } from '@home/models/widget-component.models';
import { BlobEntitiesWidgetSettings } from '@home/components/blob-entity/blob-entities.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { TimePageLink } from '@shared/models/page/page-link';
import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { BlobEntityWithCustomerInfo } from '@shared/models/blob-entity.models';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { BlobEntityService } from '@core/http/blob-entity.service';
import { TranslateService } from '@ngx-translate/core';
import { Timewindow } from '@shared/models/time/time.models';
import { DialogService } from '@core/services/dialog.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class BlobEntitiesComponent extends PageComponent implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    private utils;
    translate: TranslateService;
    private blobEntityService;
    private userPermissionsService;
    private dialogService;
    private cd;
    blobEntitiesWidgetContainerRef: ElementRef;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    widgetMode: boolean;
    ctx: WidgetContext;
    settings: BlobEntitiesWidgetSettings;
    deleteEnabled: boolean;
    authUser: import("../../../../shared/public-api").AuthUser;
    showData: boolean;
    displayCreatedTime: boolean;
    displayType: boolean;
    displayCustomer: boolean;
    displayPagination: boolean;
    pageSizeOptions: any;
    defaultPageSize: number;
    defaultSortOrder: string;
    defaultType: string;
    hidePageSize: boolean;
    displayedColumns: string[];
    timewindow: Timewindow;
    pageLink: TimePageLink;
    noDataDisplayMessageText: string;
    textSearchMode: boolean;
    dataSource: BlobEntitiesDatasource;
    private widgetResize$;
    constructor(store: Store<AppState>, utils: UtilsService, translate: TranslateService, blobEntityService: BlobEntityService, userPermissionsService: UserPermissionsService, dialogService: DialogService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initializeWidgetConfig;
    ngAfterViewInit(): void;
    resize(): void;
    updateData(): void;
    onTimewindowChange(): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    reloadBlobEntities(): void;
    deleteBlobEntity($event: Event, blobEntity: BlobEntityWithCustomerInfo): void;
    deleteBlobEntities($event: Event): void;
    downloadBlobEntity($event: any, blobEntity: BlobEntityWithCustomerInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlobEntitiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlobEntitiesComponent, "tb-blob-entities", never, { "widgetMode": "widgetMode"; "ctx": "ctx"; }, {}, never, never, false, never>;
}
declare class BlobEntitiesDatasource implements DataSource<BlobEntityWithCustomerInfo> {
    private blobEntityService;
    private translate;
    private entitiesSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<BlobEntityWithCustomerInfo>>;
    selection: SelectionModel<BlobEntityWithCustomerInfo>;
    dataLoading: boolean;
    constructor(blobEntityService: BlobEntityService, translate: TranslateService);
    connect(collectionViewer: CollectionViewer): Observable<BlobEntityWithCustomerInfo[] | ReadonlyArray<BlobEntityWithCustomerInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: TimePageLink, type: string): Observable<PageData<BlobEntityWithCustomerInfo>>;
    fetchEntities(type: string, pageLink: TimePageLink): Observable<PageData<BlobEntityWithCustomerInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
}
export {};
