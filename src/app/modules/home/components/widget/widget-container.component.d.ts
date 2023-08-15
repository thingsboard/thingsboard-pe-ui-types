import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { DashboardWidget, DashboardWidgets } from '@home/models/dashboard-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SafeStyle } from '@angular/platform-browser';
import { WidgetExportType } from '@shared/models/widget.models';
import { GridsterItemComponent } from 'angular-gridster2';
import * as i0 from "@angular/core";
export declare enum WidgetComponentActionType {
    MOUSE_DOWN = 0,
    CLICKED = 1,
    CONTEXT_MENU = 2,
    EDIT = 3,
    EXPORT = 4,
    REMOVE = 5
}
export declare class WidgetComponentAction {
    event: MouseEvent;
    actionType: WidgetComponentActionType;
}
export declare class WidgetContainerComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private renderer;
    private document;
    widgetContainerClass: string;
    tbWidgetElement: ElementRef;
    gridsterItem: GridsterItemComponent;
    widget: DashboardWidget;
    dashboardStyle: {
        [klass: string]: any;
    };
    backgroundImage: SafeStyle | string;
    isEdit: boolean;
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
    private cssClass;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, renderer: Renderer2, document: Document);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isHighlighted(widget: DashboardWidget): boolean;
    isNotHighlighted(widget: DashboardWidget): boolean;
    onFullscreenChanged(expanded: boolean): void;
    onMouseDown(event: MouseEvent): void;
    onClicked(event: MouseEvent): void;
    onContextMenu(event: MouseEvent): void;
    onEdit(event: MouseEvent): void;
    onExport(event: MouseEvent): void;
    onRemove(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetContainerComponent, "tb-widget-container", never, { "gridsterItem": "gridsterItem"; "widget": "widget"; "dashboardStyle": "dashboardStyle"; "backgroundImage": "backgroundImage"; "isEdit": "isEdit"; "isMobile": "isMobile"; "dashboardWidgets": "dashboardWidgets"; "isEditActionEnabled": "isEditActionEnabled"; "isExportActionEnabled": "isExportActionEnabled"; "isRemoveActionEnabled": "isRemoveActionEnabled"; "disableWidgetInteraction": "disableWidgetInteraction"; }, { "widgetFullscreenChanged": "widgetFullscreenChanged"; "widgetComponentAction": "widgetComponentAction"; }, never, never, false, never>;
}
