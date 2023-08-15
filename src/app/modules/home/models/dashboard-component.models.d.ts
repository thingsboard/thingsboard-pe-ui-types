import { GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { Widget, WidgetPosition, WidgetExportType } from '@app/shared/models/widget.models';
import { WidgetLayout, WidgetLayouts } from '@app/shared/models/dashboard.models';
import { IDashboardWidget, WidgetAction, WidgetContext, WidgetHeaderAction } from './widget-component.models';
import { Timewindow } from '@shared/models/time/time.models';
import { Observable } from 'rxjs';
import { IterableDiffer, KeyValueDiffer } from '@angular/core';
import { IAliasController, IStateController } from '@app/core/api/widget-api.models';
import { UtilsService } from '@core/services/utils.service';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ComponentStyle } from '@shared/models/widget-settings.models';
export interface WidgetsData {
    widgets: Array<Widget>;
    widgetLayouts?: WidgetLayouts;
}
export interface ContextMenuItem {
    enabled: boolean;
    shortcut?: string;
    icon: string;
    value: string;
}
export interface DashboardContextMenuItem extends ContextMenuItem {
    action: (contextMenuEvent: MouseEvent) => void;
}
export interface WidgetContextMenuItem extends ContextMenuItem {
    action: (contextMenuEvent: MouseEvent, widget: Widget) => void;
}
export interface DashboardCallbacks {
    onEditWidget?: ($event: Event, widget: Widget) => void;
    onExportWidget?: ($event: Event, widget: Widget) => void;
    onRemoveWidget?: ($event: Event, widget: Widget) => void;
    onWidgetMouseDown?: ($event: Event, widget: Widget) => void;
    onWidgetClicked?: ($event: Event, widget: Widget) => void;
    prepareDashboardContextMenu?: ($event: Event) => Array<DashboardContextMenuItem>;
    prepareWidgetContextMenu?: ($event: Event, widget: Widget) => Array<WidgetContextMenuItem>;
}
export interface IDashboardComponent {
    utils: UtilsService;
    gridsterOpts: GridsterConfig;
    gridster: GridsterComponent;
    dashboardWidgets: DashboardWidgets;
    mobileAutofillHeight: boolean;
    isMobileSize: boolean;
    isEdit: boolean;
    autofillHeight: boolean;
    dashboardTimewindow: Timewindow;
    dashboardTimewindowChanged: Observable<Timewindow>;
    aliasController: IAliasController;
    stateController: IStateController;
    onUpdateTimewindow(startTimeMs: number, endTimeMs: number, interval?: number, persist?: boolean): void;
    onResetTimewindow(): void;
    resetHighlight(): void;
    highlightWidget(widgetId: string, delay?: number): any;
    selectWidget(widgetId: string, delay?: number): any;
    getSelectedWidget(): Widget;
    getEventGridPosition(event: Event): WidgetPosition;
    notifyGridsterOptionsChanged(): any;
    pauseChangeNotifications(): any;
    resumeChangeNotifications(): any;
    notifyLayoutUpdated(): any;
}
export declare class DashboardWidgets implements Iterable<DashboardWidget> {
    private dashboard;
    private widgetsDiffer;
    private widgetLayoutsDiffer;
    highlightedMode: boolean;
    dashboardWidgets: Array<DashboardWidget>;
    widgets: Iterable<Widget>;
    widgetLayouts: WidgetLayouts;
    parentDashboard?: IDashboardComponent;
    popoverComponent?: TbPopoverComponent;
    [Symbol.iterator](): Iterator<DashboardWidget>;
    get activeDashboardWidgets(): Array<DashboardWidget>;
    constructor(dashboard: IDashboardComponent, widgetsDiffer: IterableDiffer<Widget>, widgetLayoutsDiffer: KeyValueDiffer<string, WidgetLayout>);
    doCheck(): void;
    widgetLayoutsUpdated(): void;
    setWidgets(widgets: Iterable<Widget>, widgetLayouts: WidgetLayouts): void;
    highlightWidget(widgetId: string): DashboardWidget;
    selectWidget(widgetId: string): DashboardWidget;
    resetHighlight(): DashboardWidget;
    isHighlighted(widget: DashboardWidget): boolean;
    isNotHighlighted(widget: DashboardWidget): boolean;
    getSelectedWidget(): DashboardWidget;
    private findWidgetById;
    updateRowsAndSort(): void;
    sortWidgets(): void;
}
export declare class DashboardWidget implements GridsterItem, IDashboardWidget {
    private dashboard;
    widget: Widget;
    widgetLayout?: WidgetLayout;
    private parentDashboard?;
    private popoverComponent?;
    private highlightedValue;
    private selectedValue;
    isFullscreen: boolean;
    color: string;
    backgroundColor: string;
    padding: string;
    margin: string;
    borderRadius: string;
    title$: Observable<string>;
    titleTooltip: string;
    showTitle: boolean;
    titleStyle: ComponentStyle;
    titleIcon: string;
    showTitleIcon: boolean;
    titleIconStyle: ComponentStyle;
    dropShadow: boolean;
    enableFullscreen: boolean;
    enableDataExport: boolean;
    hasTimewindow: boolean;
    hasAggregation: boolean;
    onlyQuickInterval: boolean;
    onlyHistoryTimewindow: boolean;
    style: ComponentStyle;
    showWidgetTitlePanel: boolean;
    showWidgetActions: boolean;
    customHeaderActions: Array<WidgetHeaderAction>;
    widgetActions: Array<WidgetAction>;
    widgetContext: WidgetContext;
    widgetId: string;
    private gridsterItemComponentSubject;
    private gridsterItemComponentValue;
    get mobileHide(): boolean;
    get desktopHide(): boolean;
    set gridsterItemComponent(item: GridsterItemComponentInterface);
    get highlighted(): boolean;
    set highlighted(highlighted: boolean);
    get selected(): boolean;
    set selected(selected: boolean);
    constructor(dashboard: IDashboardComponent, widget: Widget, widgetLayout?: WidgetLayout, parentDashboard?: IDashboardComponent, popoverComponent?: TbPopoverComponent);
    gridsterItemComponent$(): Observable<GridsterItemComponentInterface>;
    updateWidgetParams(detectChanges?: boolean): void;
    exportWidgetData($event: Event, widgetExportType: WidgetExportType): void;
    updateParamsFromData(detectChanges?: boolean): void;
    private updateCustomHeaderActions;
    private filterCustomHeaderAction;
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get cols(): number;
    set cols(cols: number);
    get rows(): number;
    set rows(rows: number);
    get widgetOrder(): number;
}
