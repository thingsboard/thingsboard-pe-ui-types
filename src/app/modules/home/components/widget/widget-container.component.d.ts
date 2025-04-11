import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { DashboardWidget, DashboardWidgets } from '@home/models/dashboard-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SafeStyle } from '@angular/platform-browser';
import { WidgetExportType } from '@shared/models/widget.models';
import { GridsterItemComponent } from 'angular-gridster2';
import { UtilsService } from '@core/services/utils.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { TbContextMenuEvent } from '@shared/models/jquery-event.models';
import { WidgetHeaderActionButtonType } from '@shared/models/widget.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export declare enum WidgetComponentActionType {
    MOUSE_DOWN = 0,
    CLICKED = 1,
    CONTEXT_MENU = 2,
    EDIT = 3,
    EXPORT = 4,
    REMOVE = 5,
    REPLACE_REFERENCE_WITH_WIDGET_COPY = 6
}
export declare class WidgetComponentAction {
    event: MouseEvent | TbContextMenuEvent;
    actionType: WidgetComponentActionType;
}
export declare class WidgetContainerComponent extends PageComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private renderer;
    private container;
    private dashboardUtils;
    private utils;
    widgetContainerClass: string;
    tbWidgetElement: ElementRef;
    gridsterItem: GridsterItemComponent;
    widget: DashboardWidget;
    dashboardStyle: {
        [klass: string]: any;
    };
    backgroundImage: SafeStyle | string;
    isEdit: boolean;
    isEditingWidget: boolean;
    isPreview: boolean;
    isMobile: boolean;
    dashboardWidgets: DashboardWidgets;
    isEditActionEnabled: boolean;
    isExportActionEnabled: boolean;
    isRemoveActionEnabled: boolean;
    disableWidgetInteraction: boolean;
    widgetFullscreenChanged: EventEmitter<boolean>;
    widgetComponentAction: EventEmitter<WidgetComponentAction>;
    widgetExportType: typeof WidgetExportType;
    widgetExportTypeTranslations: Map<WidgetExportType, string>;
    hovered: boolean;
    get widgetEditActionsEnabled(): boolean;
    widgetHeaderActionButtonType: typeof WidgetHeaderActionButtonType;
    private cssClass;
    private editWidgetActionsTooltip;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, renderer: Renderer2, container: ViewContainerRef, dashboardUtils: DashboardUtilsService, utils: UtilsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    isHighlighted(widget: DashboardWidget): boolean;
    isNotHighlighted(widget: DashboardWidget): boolean;
    onFullscreenChanged(expanded: boolean): void;
    onMouseDown(event: MouseEvent): void;
    widgetActionAbsolute(widgetComponent: WidgetComponent, absolute?: boolean): boolean;
    onClicked(event: MouseEvent): void;
    onContextMenu(event: TbContextMenuEvent): void;
    onEdit(event: MouseEvent): void;
    onReplaceReferenceWithWidgetCopy(event: MouseEvent): void;
    onExport(event: MouseEvent): void;
    onRemove(event: MouseEvent): void;
    updateEditWidgetActionsTooltipState(): void;
    private initEditWidgetActionTooltip;
    private updateEditWidgetActionsTooltipSelectedState;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetContainerComponent, "tb-widget-container", never, { "gridsterItem": { "alias": "gridsterItem"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; "dashboardStyle": { "alias": "dashboardStyle"; "required": false; }; "backgroundImage": { "alias": "backgroundImage"; "required": false; }; "isEdit": { "alias": "isEdit"; "required": false; }; "isEditingWidget": { "alias": "isEditingWidget"; "required": false; }; "isPreview": { "alias": "isPreview"; "required": false; }; "isMobile": { "alias": "isMobile"; "required": false; }; "dashboardWidgets": { "alias": "dashboardWidgets"; "required": false; }; "isEditActionEnabled": { "alias": "isEditActionEnabled"; "required": false; }; "isExportActionEnabled": { "alias": "isExportActionEnabled"; "required": false; }; "isRemoveActionEnabled": { "alias": "isRemoveActionEnabled"; "required": false; }; "disableWidgetInteraction": { "alias": "disableWidgetInteraction"; "required": false; }; }, { "widgetFullscreenChanged": "widgetFullscreenChanged"; "widgetComponentAction": "widgetComponentAction"; }, never, never, false, never>;
}
export declare class EditWidgetActionsTooltipComponent implements AfterViewInit {
    element: ElementRef<HTMLElement>;
    cd: ChangeDetectorRef;
    container: WidgetContainerComponent;
    viewInited: EventEmitter<any>;
    constructor(element: ElementRef<HTMLElement>, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditWidgetActionsTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditWidgetActionsTooltipComponent, "ng-component", never, { "container": { "alias": "container"; "required": false; }; }, { "viewInited": "viewInited"; }, never, never, false, never>;
}
