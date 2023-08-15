import { IDashboardComponent } from '@home/models/dashboard-component.models';
import { DataSet, Datasource, DatasourceData, FormattedData, JsonSettingsSchema, Widget, WidgetActionDescriptor, WidgetActionSource, WidgetConfig, WidgetControllerDescriptor, WidgetType, widgetType, WidgetTypeDescriptor, WidgetTypeDetails, WidgetTypeParameters, WidgetExportType } from '@shared/models/widget.models';
import { Timewindow, WidgetTimewindow } from '@shared/models/time/time.models';
import { IAliasController, IStateController, IWidgetSubscription, IWidgetUtils, RpcApi, StateParams, SubscriptionEntityInfo, TimewindowFunctions, WidgetActionsApi, WidgetSubscriptionApi } from '@core/api/widget-api.models';
import { ChangeDetectorRef, Injector, NgModuleRef, NgZone, Type } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RafService } from '@core/services/raf.service';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetLayout } from '@shared/models/dashboard.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NotificationHorizontalPosition, NotificationType, NotificationVerticalPosition } from '@core/notification/notification.models';
import { AuthUser } from '@shared/models/user.model';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { CustomerService } from '@core/http/customer.service';
import { DashboardService } from '@core/http/dashboard.service';
import { UserService } from '@core/http/user.service';
import { AttributeService } from '@core/http/attribute.service';
import { EntityRelationService } from '@core/http/entity-relation.service';
import { EntityService } from '@core/http/entity.service';
import { DialogService } from '@core/services/dialog.service';
import { CustomDialogService } from '@home/components/widget/dialog/custom-dialog.service';
import { AuthService } from '@core/auth/auth.service';
import { ResourceService } from '@core/http/resource.service';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink, TimePageLink } from '@shared/models/page/page-link';
import { SortOrder } from '@shared/models/page/sort-order';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EdgeService } from '@core/http/edge.service';
import * as RxJS from 'rxjs';
import * as RxJSOperators from 'rxjs/operators';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityId } from '@shared/models/id/entity-id';
import { ReportService } from '@core/http/report.service';
import { AlarmQuery, AlarmSearchStatus, AlarmStatus } from '@app/shared/models/alarm.models';
import { MillisecondsToTimeStringPipe, TelemetrySubscriber } from '@app/shared/public-api';
import { UserId } from '@shared/models/id/user-id';
import { UserSettingsService } from '@core/http/user-settings.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { DynamicComponentModule } from '@core/services/dynamic-component-factory.service';
import { Observable } from 'rxjs';
export interface IWidgetAction {
    name: string;
    icon: string;
    onAction: ($event: Event) => void;
}
export type ShowWidgetHeaderActionFunction = (ctx: WidgetContext, data: FormattedData[]) => boolean;
export interface WidgetHeaderAction extends IWidgetAction {
    displayName: string;
    descriptor: WidgetActionDescriptor;
    useShowWidgetHeaderActionFunction: boolean;
    showWidgetHeaderActionFunction: ShowWidgetHeaderActionFunction;
}
export interface WidgetAction extends IWidgetAction {
    show: boolean;
}
export interface IDashboardWidget {
    updateWidgetParams(): any;
}
export declare class WidgetContext {
    dashboard: IDashboardComponent;
    private dashboardWidget;
    private widget;
    parentDashboard?: IDashboardComponent;
    popoverComponent?: TbPopoverComponent;
    constructor(dashboard: IDashboardComponent, dashboardWidget: IDashboardWidget, widget: Widget, parentDashboard?: IDashboardComponent, popoverComponent?: TbPopoverComponent);
    get stateController(): IStateController;
    get aliasController(): IAliasController;
    get dashboardTimewindow(): Timewindow;
    get widgetConfig(): WidgetConfig;
    get settings(): any;
    get units(): string;
    get decimals(): number;
    set changeDetector(cd: ChangeDetectorRef);
    set containerChangeDetector(cd: ChangeDetectorRef);
    get currentUser(): AuthUser;
    authService: AuthService;
    deviceService: DeviceService;
    assetService: AssetService;
    entityViewService: EntityViewService;
    edgeService: EdgeService;
    customerService: CustomerService;
    dashboardService: DashboardService;
    userService: UserService;
    attributeService: AttributeService;
    entityRelationService: EntityRelationService;
    entityService: EntityService;
    entityGroupService: EntityGroupService;
    dialogs: DialogService;
    customDialog: CustomDialogService;
    resourceService: ResourceService;
    userSettingsService: UserSettingsService;
    telemetryWsService: TelemetryWebsocketService;
    telemetrySubscribers?: TelemetrySubscriber[];
    date: DatePipe;
    milliSecondsToTimeString: MillisecondsToTimeStringPipe;
    translate: TranslateService;
    http: HttpClient;
    sanitizer: DomSanitizer;
    router: Router;
    reportService: ReportService;
    wl: WhiteLabelingService;
    private changeDetectorValue;
    private containerChangeDetectorValue;
    inited: boolean;
    destroyed: boolean;
    subscriptions: {
        [id: string]: IWidgetSubscription;
    };
    defaultSubscription: IWidgetSubscription;
    labelPatterns: Map<RxJS.Observable<string>, LabelVariablePattern>;
    timewindowFunctions: TimewindowFunctions;
    controlApi: RpcApi;
    utils: IWidgetUtils;
    $widgetElement: JQuery<HTMLElement>;
    $container: JQuery<HTMLElement>;
    $containerParent: JQuery<HTMLElement>;
    width: number;
    height: number;
    $scope: IDynamicWidgetComponent;
    isEdit: boolean;
    isMobile: boolean;
    toastTargetId: string;
    widgetNamespace?: string;
    subscriptionApi?: WidgetSubscriptionApi;
    actionsApi?: WidgetActionsApi;
    activeEntityInfo?: SubscriptionEntityInfo;
    exportWidgetData: (widgetExportType: WidgetExportType) => void;
    customDataExport?: () => {
        [key: string]: any;
    }[] | RxJS.Observable<{
        [key: string]: any;
    }[]>;
    datasources?: Array<Datasource>;
    data?: Array<DatasourceData>;
    latestData?: Array<DatasourceData>;
    hiddenData?: Array<{
        data: DataSet;
    }>;
    timeWindow?: WidgetTimewindow;
    embedTitlePanel?: boolean;
    hideTitlePanel: boolean;
    widgetTitle?: string;
    widgetTitleTooltip?: string;
    customHeaderActions?: Array<WidgetHeaderAction>;
    widgetActions?: Array<WidgetAction>;
    servicesMap?: Map<string, Type<any>>;
    $injector?: Injector;
    ngZone?: NgZone;
    store?: Store<AppState>;
    private popoverComponents;
    rxjs: {
        audit: typeof RxJS.audit;
        auditTime: typeof RxJS.auditTime;
        buffer: typeof RxJS.buffer;
        bufferCount: typeof RxJS.bufferCount;
        bufferTime: typeof RxJS.bufferTime;
        bufferToggle: typeof RxJS.bufferToggle;
        bufferWhen: typeof RxJS.bufferWhen;
        catchError: typeof RxJS.catchError;
        combineAll: typeof RxJS.combineLatestAll;
        combineLatestAll: typeof RxJS.combineLatestAll;
        combineLatest: typeof RxJSOperators.combineLatest;
        combineLatestWith: typeof RxJS.combineLatestWith;
        concat: typeof RxJSOperators.concat;
        concatAll: typeof RxJS.concatAll;
        concatMap: typeof RxJS.concatMap;
        concatMapTo: typeof RxJS.concatMapTo;
        concatWith: typeof RxJS.concatWith;
        connect: typeof RxJS.connect;
        count: typeof RxJS.count;
        debounce: typeof RxJS.debounce;
        debounceTime: typeof RxJS.debounceTime;
        defaultIfEmpty: typeof RxJS.defaultIfEmpty;
        delay: typeof RxJS.delay;
        delayWhen: typeof RxJS.delayWhen;
        dematerialize: typeof RxJS.dematerialize;
        distinct: typeof RxJS.distinct;
        distinctUntilChanged: typeof RxJS.distinctUntilChanged;
        distinctUntilKeyChanged: typeof RxJS.distinctUntilKeyChanged;
        elementAt: typeof RxJS.elementAt;
        endWith: typeof RxJS.endWith;
        every: typeof RxJS.every;
        exhaust: typeof RxJS.exhaustAll;
        exhaustAll: typeof RxJS.exhaustAll;
        exhaustMap: typeof RxJS.exhaustMap;
        expand: typeof RxJS.expand;
        filter: typeof RxJS.filter;
        finalize: typeof RxJS.finalize;
        find: typeof RxJS.find;
        findIndex: typeof RxJS.findIndex;
        first: typeof RxJS.first;
        groupBy: typeof RxJS.groupBy;
        ignoreElements: typeof RxJS.ignoreElements;
        isEmpty: typeof RxJS.isEmpty;
        last: typeof RxJS.last;
        map: typeof RxJS.map;
        mapTo: typeof RxJS.mapTo;
        materialize: typeof RxJS.materialize;
        max: typeof RxJS.max;
        merge: typeof RxJSOperators.merge;
        mergeAll: typeof RxJS.mergeAll;
        flatMap: typeof RxJS.mergeMap;
        mergeMap: typeof RxJS.mergeMap;
        mergeMapTo: typeof RxJS.mergeMapTo;
        mergeScan: typeof RxJS.mergeScan;
        mergeWith: typeof RxJS.mergeWith;
        min: typeof RxJS.min;
        multicast: typeof RxJS.multicast;
        observeOn: typeof RxJS.observeOn;
        onErrorResumeNext: typeof RxJS.onErrorResumeNextWith;
        pairwise: typeof RxJS.pairwise;
        partition: typeof RxJSOperators.partition;
        pluck: typeof RxJS.pluck;
        publish: typeof RxJS.publish;
        publishBehavior: typeof RxJS.publishBehavior;
        publishLast: typeof RxJS.publishLast;
        publishReplay: typeof RxJS.publishReplay;
        race: typeof RxJSOperators.race;
        raceWith: typeof RxJS.raceWith;
        reduce: typeof RxJS.reduce;
        repeat: typeof RxJS.repeat;
        repeatWhen: typeof RxJS.repeatWhen;
        retry: typeof RxJS.retry;
        retryWhen: typeof RxJS.retryWhen;
        refCount: typeof RxJS.refCount;
        sample: typeof RxJS.sample;
        sampleTime: typeof RxJS.sampleTime;
        scan: typeof RxJS.scan;
        sequenceEqual: typeof RxJS.sequenceEqual;
        share: typeof RxJS.share;
        shareReplay: typeof RxJS.shareReplay;
        single: typeof RxJS.single;
        skip: typeof RxJS.skip;
        skipLast: typeof RxJS.skipLast;
        skipUntil: typeof RxJS.skipUntil;
        skipWhile: typeof RxJS.skipWhile;
        startWith: typeof RxJS.startWith;
        subscribeOn: typeof RxJS.subscribeOn;
        switchAll: typeof RxJS.switchAll;
        switchMap: typeof RxJS.switchMap;
        switchMapTo: typeof RxJS.switchMapTo;
        switchScan: typeof RxJS.switchScan;
        take: typeof RxJS.take;
        takeLast: typeof RxJS.takeLast;
        takeUntil: typeof RxJS.takeUntil;
        takeWhile: typeof RxJS.takeWhile;
        tap: typeof RxJS.tap;
        throttle: typeof RxJS.throttle;
        throttleTime: typeof RxJS.throttleTime;
        throwIfEmpty: typeof RxJS.throwIfEmpty;
        timeInterval: typeof RxJS.timeInterval;
        timeout: typeof RxJS.timeout;
        timeoutWith: typeof RxJS.timeoutWith;
        timestamp: typeof RxJS.timestamp;
        toArray: typeof RxJS.toArray;
        window: typeof RxJS.window;
        windowCount: typeof RxJS.windowCount;
        windowTime: typeof RxJS.windowTime;
        windowToggle: typeof RxJS.windowToggle;
        windowWhen: typeof RxJS.windowWhen;
        withLatestFrom: typeof RxJS.withLatestFrom;
        zip: typeof RxJSOperators.zip;
        zipAll: typeof RxJS.zipAll;
        zipWith: typeof RxJS.zipWith;
        Observable: typeof RxJS.Observable;
        ConnectableObservable: typeof RxJS.ConnectableObservable;
        observable: string | symbol;
        animationFrames: typeof RxJS.animationFrames;
        Subject: typeof RxJS.Subject;
        BehaviorSubject: typeof RxJS.BehaviorSubject;
        ReplaySubject: typeof RxJS.ReplaySubject;
        AsyncSubject: typeof RxJS.AsyncSubject;
        asap: import("rxjs/internal/scheduler/AsapScheduler").AsapScheduler;
        asapScheduler: import("rxjs/internal/scheduler/AsapScheduler").AsapScheduler;
        async: import("rxjs/internal/scheduler/AsyncScheduler").AsyncScheduler;
        asyncScheduler: import("rxjs/internal/scheduler/AsyncScheduler").AsyncScheduler;
        queue: import("rxjs/internal/scheduler/QueueScheduler").QueueScheduler;
        queueScheduler: import("rxjs/internal/scheduler/QueueScheduler").QueueScheduler;
        animationFrame: import("rxjs/internal/scheduler/AnimationFrameScheduler").AnimationFrameScheduler;
        animationFrameScheduler: import("rxjs/internal/scheduler/AnimationFrameScheduler").AnimationFrameScheduler;
        VirtualTimeScheduler: typeof RxJS.VirtualTimeScheduler;
        VirtualAction: typeof RxJS.VirtualAction;
        Scheduler: typeof RxJS.Scheduler;
        Subscription: typeof RxJS.Subscription;
        Subscriber: typeof RxJS.Subscriber;
        Notification: typeof RxJS.Notification;
        NotificationKind: typeof RxJS.NotificationKind;
        pipe: typeof RxJS.pipe;
        noop: typeof RxJS.noop;
        identity: typeof RxJS.identity;
        isObservable: typeof RxJS.isObservable;
        lastValueFrom: typeof RxJS.lastValueFrom;
        firstValueFrom: typeof RxJS.firstValueFrom;
        ArgumentOutOfRangeError: import("rxjs/internal/util/ArgumentOutOfRangeError").ArgumentOutOfRangeErrorCtor;
        EmptyError: import("rxjs/internal/util/EmptyError").EmptyErrorCtor;
        NotFoundError: import("rxjs/internal/util/NotFoundError").NotFoundErrorCtor;
        ObjectUnsubscribedError: import("rxjs/internal/util/ObjectUnsubscribedError").ObjectUnsubscribedErrorCtor;
        SequenceError: import("rxjs/internal/util/SequenceError").SequenceErrorCtor;
        TimeoutError: import("rxjs/internal/operators/timeout").TimeoutErrorCtor;
        UnsubscriptionError: import("rxjs/internal/util/UnsubscriptionError").UnsubscriptionErrorCtor;
        bindCallback: typeof RxJS.bindCallback;
        bindNodeCallback: typeof RxJS.bindNodeCallback;
        connectable: typeof RxJS.connectable;
        defer: typeof RxJS.defer;
        empty: typeof RxJS.empty;
        forkJoin: typeof RxJS.forkJoin;
        from: typeof RxJS.from;
        fromEvent: typeof RxJS.fromEvent;
        fromEventPattern: typeof RxJS.fromEventPattern;
        generate: typeof RxJS.generate;
        iif: typeof RxJS.iif;
        interval: typeof RxJS.interval;
        never: typeof RxJS.never;
        of: typeof RxJS.of;
        pairs: typeof RxJS.pairs;
        range: typeof RxJS.range;
        throwError: typeof RxJS.throwError;
        timer: typeof RxJS.timer;
        using: typeof RxJS.using;
        scheduled: typeof RxJS.scheduled;
        EMPTY: RxJS.Observable<never>;
        NEVER: RxJS.Observable<never>;
        config: RxJS.GlobalConfig;
        onErrorResumeNextWith: typeof RxJS.onErrorResumeNextWith;
    };
    registerPopoverComponent(popoverComponent: TbPopoverComponent): void;
    updatePopoverPositions(): void;
    setPopoversHidden(hidden: boolean): void;
    registerLabelPattern(label: string, label$: Observable<string>): Observable<string>;
    updateLabelPatterns(): void;
    showSuccessToast(message: string, duration?: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showInfoToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showWarnToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showErrorToast(message: string, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    showToast(type: NotificationType, message: string, duration: number, verticalPosition?: NotificationVerticalPosition, horizontalPosition?: NotificationHorizontalPosition, target?: string): void;
    hideToast(target?: string): void;
    detectChanges(updateWidgetParams?: boolean): void;
    detectContainerChanges(): void;
    updateWidgetParams(): void;
    updateAliases(aliasIds?: Array<string>): void;
    reset(): void;
    destroy(): void;
    closeDialog(resultData?: any): void;
    pageLink(pageSize: number, page?: number, textSearch?: string, sortOrder?: SortOrder): PageLink;
    timePageLink(startTime: number, endTime: number, pageSize: number, page?: number, textSearch?: string, sortOrder?: SortOrder): TimePageLink;
    alarmQuery(entityId: EntityId, pageLink: TimePageLink, searchStatus: AlarmSearchStatus, status: AlarmStatus, fetchOriginator: boolean, assigneeId: UserId): AlarmQuery;
}
export declare class LabelVariablePattern {
    private ctx;
    private pattern;
    private hasVariables;
    private labelSubject;
    label$: RxJS.Observable<string>;
    constructor(label: string, ctx: WidgetContext);
    setupPattern(label: string): void;
    update(): void;
    destroy(): void;
}
export interface IDynamicWidgetComponent {
    readonly ctx: WidgetContext;
    readonly errorMessages: string[];
    readonly $injector: Injector;
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse;
    raf: RafService;
    [key: string]: any;
}
export interface WidgetInfo extends WidgetTypeDescriptor, WidgetControllerDescriptor {
    widgetName: string;
    alias: string;
    typeSettingsSchema?: string | any;
    typeDataKeySettingsSchema?: string | any;
    typeLatestDataKeySettingsSchema?: string | any;
    image?: string;
    description?: string;
    componentType?: Type<IDynamicWidgetComponent>;
    componentModuleRef?: NgModuleRef<DynamicComponentModule>;
}
export interface WidgetConfigComponentData {
    widgetName: string;
    config: WidgetConfig;
    layout: WidgetLayout;
    widgetType: widgetType;
    typeParameters: WidgetTypeParameters;
    actionSources: {
        [actionSourceId: string]: WidgetActionSource;
    };
    isDataEnabled: boolean;
    settingsSchema: JsonSettingsSchema;
    dataKeySettingsSchema: JsonSettingsSchema;
    latestDataKeySettingsSchema: JsonSettingsSchema;
    settingsDirective: string;
    dataKeySettingsDirective: string;
    latestDataKeySettingsDirective: string;
    basicModeDirective: string;
}
export declare const MissingWidgetType: WidgetInfo;
export declare const ErrorWidgetType: WidgetInfo;
export interface WidgetTypeInstance {
    getSettingsSchema?: () => string;
    getDataKeySettingsSchema?: () => string;
    getLatestDataKeySettingsSchema?: () => string;
    typeParameters?: () => WidgetTypeParameters;
    useCustomDatasources?: () => boolean;
    actionSources?: () => {
        [actionSourceId: string]: WidgetActionSource;
    };
    onInit?: () => void;
    onDataUpdated?: () => void;
    onLatestDataUpdated?: () => void;
    onResize?: () => void;
    onEditModeChanged?: () => void;
    onMobileModeChanged?: () => void;
    onDestroy?: () => void;
}
export declare function detailsToWidgetInfo(widgetTypeDetailsEntity: WidgetTypeDetails): WidgetInfo;
export declare function toWidgetInfo(widgetTypeEntity: WidgetType): WidgetInfo;
export declare function toWidgetTypeDetails(widgetInfo: WidgetInfo, id: WidgetTypeId, tenantId: TenantId, bundleAlias: string, createdTime: number): WidgetTypeDetails;
export declare function toWidgetType(widgetInfo: WidgetInfo, id: WidgetTypeId, tenantId: TenantId, bundleAlias: string, createdTime: number): WidgetType;
export declare function updateEntityParams(params: StateParams, targetEntityParamName?: string, targetEntityId?: EntityId, entityName?: string, entityLabel?: string): void;
