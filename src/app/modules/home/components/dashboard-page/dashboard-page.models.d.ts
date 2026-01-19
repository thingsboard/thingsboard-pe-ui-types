import { BreakpointId, Dashboard, DashboardLayoutId, DashboardLayoutInfo, GridSettings, WidgetLayouts } from '@app/shared/models/dashboard.models';
import { Widget, WidgetPosition } from '@app/shared/models/widget.models';
import { Timewindow } from '@shared/models/time/time.models';
import { IAliasController, IStateController } from '@core/api/widget-api.models';
import { ILayoutController } from './layout/layout.models';
import { DashboardContextMenuItem, WidgetContextMenuItem } from '@home/models/dashboard-component.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { displayGrids } from 'angular-gridster2/lib/gridsterConfig.interface';
import { ElementRef } from '@angular/core';
export declare type DashboardPageScope = 'tenant' | 'customer';
export interface DashboardPageInitData {
    dashboard: Dashboard;
    currentDashboardId?: string;
    widgetEditMode?: boolean;
    singlePageMode?: boolean;
    entityGroup?: EntityGroupInfo;
    customerId?: string;
}
export interface DashboardContext {
    instanceId: string;
    state: string;
    breakpoint: BreakpointId;
    getDashboard: () => Dashboard;
    dashboardTimewindow: Timewindow;
    aliasController: IAliasController;
    stateController: IStateController;
    stateChanged: Observable<string>;
    stateId: Observable<string>;
    runChangeDetection: () => void;
    dashboardCssClass?: string;
}
export interface IDashboardController {
    dashboardCtx: DashboardContext;
    dashboardContainer: ElementRef;
    dashboardContent: ElementRef;
    elRef: ElementRef;
    openRightLayout(): any;
    openDashboardState(stateId: string, openRightLayout: boolean): any;
    addWidget($event: Event, layoutCtx: DashboardPageLayoutContext): any;
    editWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    replaceReferenceWithWidgetCopy($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    exportWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget, widgetTitle: string): any;
    removeWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    widgetMouseDown($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    dashboardMouseDown($event: Event, layoutCtx: DashboardPageLayoutContext): any;
    widgetClicked($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    prepareDashboardContextMenu(layoutCtx: DashboardPageLayoutContext): Array<DashboardContextMenuItem>;
    prepareWidgetContextMenu(layoutCtx: DashboardPageLayoutContext, widget: Widget, isReference: boolean): Array<WidgetContextMenuItem>;
    copyWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    copyWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): any;
    pasteWidget($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): any;
    pasteWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): any;
}
export interface DashboardPageLayoutContext {
    id: DashboardLayoutId;
    layoutData: DashboardLayoutInfo;
    layoutDataChanged: BehaviorSubject<void>;
    breakpoint: BreakpointId;
    widgets: LayoutWidgetsArray;
    widgetLayouts: WidgetLayouts;
    gridSettings: GridSettings;
    ctrl: ILayoutController;
    dashboardCtrl: IDashboardController;
    ignoreLoading: boolean;
    displayGrid: displayGrids;
}
export interface DashboardPageLayout {
    show: boolean;
    layoutCtx: DashboardPageLayoutContext;
}
export declare type DashboardPageLayouts = {
    [key in DashboardLayoutId]: DashboardPageLayout;
};
export declare class LayoutWidgetsArray implements Iterable<Widget> {
    private dashboardCtx;
    private widgetIds;
    private loaded;
    constructor(dashboardCtx: DashboardContext);
    size(): number;
    isLoading(): boolean;
    isEmpty(): boolean;
    setWidgetIds(widgetIds: string[]): void;
    addWidgetId(widgetId: string): void;
    removeWidgetId(widgetId: string): boolean;
    [Symbol.iterator](): Iterator<Widget>;
    widgetByIndex(index: number): Widget;
    private widgetById;
}
