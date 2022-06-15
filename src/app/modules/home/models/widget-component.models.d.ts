import { IDashboardComponent } from '@home/models/dashboard-component.models';
import { DataSet, Datasource, DatasourceData, FormattedData, JsonSettingsSchema, Widget, WidgetActionDescriptor, WidgetActionSource, WidgetConfig, WidgetControllerDescriptor, WidgetType, widgetType, WidgetTypeDescriptor, WidgetTypeDetails, WidgetTypeParameters, WidgetExportType } from '@shared/models/widget.models';
import { Timewindow, WidgetTimewindow } from '@shared/models/time/time.models';
import { IAliasController, IStateController, IWidgetSubscription, IWidgetUtils, RpcApi, StateParams, SubscriptionEntityInfo, TimewindowFunctions, WidgetActionsApi, WidgetSubscriptionApi } from '@core/api/widget-api.models';
import { ChangeDetectorRef, ComponentFactory, Injector, NgZone, Type } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RafService } from '@core/services/raf.service';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetLayout } from '@shared/models/dashboard.models';
import { forkJoin, Observable, of } from 'rxjs';
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
import { ResourceService } from '@core/http/resource.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink } from '@shared/models/page/page-link';
import { SortOrder } from '@shared/models/page/sort-order';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EdgeService } from '@core/http/edge.service';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityId } from '@shared/models/id/entity-id';
export interface IWidgetAction {
    name: string;
    icon: string;
    onAction: ($event: Event) => void;
}
export declare type ShowWidgetHeaderActionFunction = (ctx: WidgetContext, data: FormattedData[]) => boolean;
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
    constructor(dashboard: IDashboardComponent, dashboardWidget: IDashboardWidget, widget: Widget, parentDashboard?: IDashboardComponent);
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
    date: DatePipe;
    translate: TranslateService;
    http: HttpClient;
    sanitizer: DomSanitizer;
    router: Router;
    private changeDetectorValue;
    private containerChangeDetectorValue;
    inited: boolean;
    destroyed: boolean;
    subscriptions: {
        [id: string]: IWidgetSubscription;
    };
    defaultSubscription: IWidgetSubscription;
    timewindowFunctions: TimewindowFunctions;
    controlApi: RpcApi;
    utils: IWidgetUtils;
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
    }[] | Observable<{
        [key: string]: any;
    }[]>;
    datasources?: Array<Datasource>;
    data?: Array<DatasourceData>;
    latestData?: Array<DatasourceData>;
    hiddenData?: Array<{
        data: DataSet;
    }>;
    timeWindow?: WidgetTimewindow;
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
        forkJoin: typeof forkJoin;
        of: typeof of;
        map: typeof map;
        mergeMap: typeof mergeMap;
        switchMap: typeof switchMap;
        catchError: typeof catchError;
    };
    registerPopoverComponent(popoverComponent: TbPopoverComponent): void;
    updatePopoverPositions(): void;
    setPopoversHidden(hidden: boolean): void;
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
    pageLink(pageSize: number, page?: number, textSearch?: string, sortOrder?: SortOrder): PageLink;
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
    componentFactory?: ComponentFactory<IDynamicWidgetComponent>;
}
export interface WidgetConfigComponentData {
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
