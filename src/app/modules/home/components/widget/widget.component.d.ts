import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DashboardWidget } from '@home/models/dashboard-component.models';
import { LegendConfig, LegendData, Widget, WidgetTypeParameters } from '@shared/models/widget.models';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetService } from '@core/http/widget.service';
import { UtilsService } from '@core/services/utils.service';
import { IDynamicWidgetComponent, WidgetContext, WidgetInfo, WidgetTypeInstance } from '@home/models/widget-component.models';
import { SubscriptionMessage, WidgetSubscriptionContext } from '@core/api/widget-api.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from '@core/services/resources.service';
import { TimeService } from '@core/services/time.service';
import { DeviceService } from '@app/core/http/device.service';
import { ExceptionData } from '@shared/models/error.models';
import { WidgetComponentService } from './widget-component.service';
import { Timewindow } from '@shared/models/time/time.models';
import { CancelAnimationFrame, RafService } from '@core/services/raf.service';
import { DashboardService } from '@core/http/dashboard.service';
import { EntityService } from '@core/http/entity.service';
import { DatePipe } from '@angular/common';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import { EntityDataService } from '@core/api/entity-data.service';
import { TranslateService } from '@ngx-translate/core';
import { AlarmDataService } from '@core/api/alarm-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { MobileService } from '@core/services/mobile.service';
import { DialogService } from '@core/services/dialog.service';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class WidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    protected store: Store<AppState>;
    private route;
    private router;
    private widgetComponentService;
    private componentFactoryResolver;
    private elementRef;
    private injector;
    private dialog;
    private renderer;
    private popoverService;
    private embedDashboardDialogComponent;
    private dashboardPageComponent;
    private widgetService;
    private resources;
    private timeService;
    private deviceService;
    private entityService;
    private dashboardService;
    private importExport;
    private entityDataService;
    private alarmDataService;
    private translate;
    private utils;
    private datePipe;
    private mobileService;
    private dialogs;
    private raf;
    private ngZone;
    private cd;
    isEdit: boolean;
    isMobile: boolean;
    dashboardWidget: DashboardWidget;
    widgetContentContainer: ViewContainerRef;
    widget: Widget;
    widgetInfo: WidgetInfo;
    errorMessages: string[];
    widgetContext: WidgetContext;
    widgetType: any;
    typeParameters: WidgetTypeParameters;
    widgetTypeInstance: WidgetTypeInstance;
    widgetErrorData: ExceptionData;
    loadingData: boolean;
    displayNoData: boolean;
    noDataDisplayMessageText: string;
    displayLegend: boolean;
    legendConfig: LegendConfig;
    legendData: LegendData;
    isLegendFirst: boolean;
    legendContainerLayoutType: string;
    legendStyle: {
        [klass: string]: any;
    };
    dynamicWidgetComponentRef: ComponentRef<IDynamicWidgetComponent>;
    dynamicWidgetComponent: IDynamicWidgetComponent;
    subscriptionContext: WidgetSubscriptionContext;
    subscriptionInited: boolean;
    destroyed: boolean;
    widgetSizeDetected: boolean;
    widgetInstanceInited: boolean;
    dataUpdatePending: boolean;
    latestDataUpdatePending: boolean;
    pendingMessage: SubscriptionMessage;
    cafs: {
        [cafId: string]: CancelAnimationFrame;
    };
    toastTargetId: string;
    private widgetResize$;
    private cssParser;
    private rxSubscriptions;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, widgetComponentService: WidgetComponentService, componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef, injector: Injector, dialog: MatDialog, renderer: Renderer2, popoverService: TbPopoverService, embedDashboardDialogComponent: ComponentType<any>, dashboardPageComponent: ComponentType<any>, widgetService: WidgetService, resources: ResourcesService, timeService: TimeService, deviceService: DeviceService, entityService: EntityService, dashboardService: DashboardService, importExport: ImportExportService, entityDataService: EntityDataService, alarmDataService: AlarmDataService, translate: TranslateService, utils: UtilsService, datePipe: DatePipe, mobileService: MobileService, dialogs: DialogService, raf: RafService, ngZone: NgZone, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private displayWidgetInstance;
    private onDestroy;
    onTimewindowChanged(timewindow: Timewindow): void;
    onLegendKeyHiddenChange(index: number): void;
    private loadFromWidgetInfo;
    private detectChanges;
    private isReady;
    private onInit;
    private onResize;
    private onEditModeChanged;
    private onMobileModeChanged;
    private reInit;
    private reInitImpl;
    private initialize;
    private destroyDynamicWidgetComponent;
    private handleWidgetException;
    private displayMessage;
    private clearMessage;
    private configureDynamicWidgetComponent;
    private createSubscription;
    private createSubscriptionFromInfo;
    private defaultComponentsOptions;
    private defaultSubscriptionOptions;
    private createDefaultSubscription;
    private getActionDescriptors;
    private handleWidgetAction;
    private handleMobileAction;
    private handleWidgetMobileActionError;
    private openDashboardStateInPopover;
    private openDashboardStateInSeparateDialog;
    private elementClick;
    private loadCustomActionResources;
    private processResourcesLoadErrors;
    private exportWidgetData;
    private doExportWidgetData;
    private prepareWidgetExportData;
    private getActiveEntityInfo;
    private checkSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetComponent, "tb-widget", never, { "isEdit": "isEdit"; "isMobile": "isMobile"; "dashboardWidget": "dashboardWidget"; }, {}, never, never>;
}
