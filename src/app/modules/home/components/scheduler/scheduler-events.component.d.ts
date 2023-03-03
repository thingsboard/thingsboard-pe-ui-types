import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { SchedulerEventWithCustomerInfo } from '@shared/models/scheduler-event.models';
import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { SchedulerEventService } from '@core/http/scheduler-event.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import { DialogService } from '@core/services/dialog.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { schedulerCalendarView, SchedulerEventsWidgetSettings } from '@home/components/scheduler/scheduler-events.models';
import { CalendarOptions } from '@fullcalendar/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SchedulerEventsComponent extends PageComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    protected store: Store<AppState>;
    private utils;
    translate: TranslateService;
    private schedulerEventService;
    private userPermissionsService;
    private dialogService;
    private dialog;
    private router;
    private route;
    private cd;
    schedulerEventWidgetContainerRef: ElementRef;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    calendarContainer: ElementRef<HTMLElement>;
    calendarComponent: FullCalendarComponent;
    schedulerEventMenuTrigger: MatMenuTrigger;
    widgetMode: boolean;
    ctx: WidgetContext;
    edgeId: string;
    settings: SchedulerEventsWidgetSettings;
    editEnabled: boolean;
    addEnabled: boolean;
    deleteEnabled: boolean;
    authUser: import("../../../../shared/public-api").AuthUser;
    showData: boolean;
    mode: string;
    displayPagination: boolean;
    pageSizeOptions: any;
    defaultPageSize: number;
    defaultSortOrder: string;
    defaultEventType: string;
    hidePageSize: boolean;
    noDataDisplayMessageText: any;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    assignEnabled: boolean;
    dataSource: SchedulerEventsDatasource;
    currentCalendarView: schedulerCalendarView;
    schedulerCalendarViews: schedulerCalendarView[];
    schedulerCalendarViewTranslations: Map<schedulerCalendarView, string>;
    schedulerEventMenuPosition: {
        x: string;
        y: string;
    };
    schedulerContextMenuEvent: MouseEvent;
    calendarOptions: CalendarOptions;
    private calendarApi;
    private schedulerEvents;
    private currentCalendarViewValue;
    private widgetResize$;
    private schedulerEventConfigTypes;
    constructor(store: Store<AppState>, utils: UtilsService, translate: TranslateService, schedulerEventService: SchedulerEventService, userPermissionsService: UserPermissionsService, dialogService: DialogService, dialog: MatDialog, router: Router, route: ActivatedRoute, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private initializeWidgetConfig;
    ngAfterViewInit(): void;
    resize(): void;
    updateData(reload?: boolean): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    reloadSchedulerEvents(): void;
    deleteSchedulerEvent($event: Event, schedulerEvent: SchedulerEventWithCustomerInfo): void;
    deleteSchedulerEvents($event: Event): void;
    addSchedulerEvent($event: Event): void;
    assignToEdgeSchedulerEvent($event: Event): void;
    editSchedulerEvent($event: any, schedulerEventWithCustomerInfo: SchedulerEventWithCustomerInfo): void;
    viewSchedulerEvent($event: any, schedulerEventWithCustomerInfo: SchedulerEventWithCustomerInfo): void;
    private openSchedulerEventDialog;
    private openAssignSchedulerEventToEdgeDialog;
    triggerResize(): void;
    changeCalendarView(): void;
    calendarViewTitle(): string;
    gotoCalendarToday(): void;
    isCalendarToday(): boolean;
    gotoCalendarPrev(): void;
    gotoCalendarNext(): void;
    private onEventClick;
    private openSchedulerEventContextMenu;
    onSchedulerEventContextMenuMouseLeave(): void;
    private onDayClick;
    private onEventDrop;
    private onEventDidMount;
    private moveEvent;
    private updateCalendarEvents;
    private eventSourceFunction;
    private toCalendarEvent;
    private eventInfo;
    unassignFromEdge($event: Event, schedulerEvent: SchedulerEventWithCustomerInfo): void;
    unassignFromEdgeSchedulerEvents($event: Event): void;
    private updatedRouterQueryParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventsComponent, "tb-scheduler-events", never, { "widgetMode": "widgetMode"; "ctx": "ctx"; "edgeId": "edgeId"; }, {}, never, never, false, never>;
}
declare class SchedulerEventsDatasource implements DataSource<SchedulerEventWithCustomerInfo> {
    private schedulerEventService;
    private schedulerEventConfigTypes;
    private entitiesSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<SchedulerEventWithCustomerInfo>>;
    selection: SelectionModel<SchedulerEventWithCustomerInfo>;
    private allEntities;
    dataLoading: boolean;
    edgeId: string;
    constructor(schedulerEventService: SchedulerEventService, schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    });
    connect(collectionViewer: CollectionViewer): Observable<SchedulerEventWithCustomerInfo[] | ReadonlyArray<SchedulerEventWithCustomerInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: PageLink, eventType: string, reload?: boolean): Observable<PageData<SchedulerEventWithCustomerInfo>>;
    fetchEntities(eventType: string, pageLink: PageLink): Observable<Array<PageData<SchedulerEventWithCustomerInfo>>>;
    getAllEntities(eventType: string): Observable<Array<SchedulerEventWithCustomerInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
}
export {};
