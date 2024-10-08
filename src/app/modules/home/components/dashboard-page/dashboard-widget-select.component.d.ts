import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetService } from '@core/http/widget.service';
import { DeprecatedFilter, WidgetInfo, widgetType, WidgetTypeInfo } from '@shared/models/widget.models';
import { GridEntitiesFetchFunction, ScrollGridColumns } from '@shared/components/grid/scroll-grid-datasource';
import { ItemSizeStrategy } from '@shared/components/grid/scroll-grid.component';
import * as i0 from "@angular/core";
type selectWidgetMode = 'bundles' | 'allWidgets';
interface WidgetsFilter {
    search: string;
    filter: widgetType[];
    deprecatedFilter: DeprecatedFilter;
}
interface BundleWidgetsFilter extends WidgetsFilter {
    widgetsBundleId: string;
}
export declare class DashboardWidgetSelectComponent implements OnInit {
    private widgetsService;
    private cd;
    private searchSubject;
    private search$;
    private filterWidgetTypes$;
    private deprecatedFilter$;
    private selectWidgetMode$;
    private widgetsBundle$;
    widgetTypes: Set<widgetType>;
    hasDeprecated: boolean;
    aliasController: IAliasController;
    scadaFirst: boolean;
    set search(search: string);
    get search(): string;
    set filterWidgetTypes(widgetTypes: Array<widgetType>);
    get filterWidgetTypes(): Array<widgetType>;
    set selectWidgetMode(mode: selectWidgetMode);
    get selectWidgetMode(): selectWidgetMode;
    set deprecatedFilter(filter: DeprecatedFilter);
    get deprecatedFilter(): DeprecatedFilter;
    set widgetsBundle(widgetBundle: WidgetsBundle);
    get widgetsBundle(): WidgetsBundle;
    widgetSelected: EventEmitter<WidgetInfo>;
    columns: ScrollGridColumns;
    gridWidgetsItemSizeStrategy: ItemSizeStrategy;
    widgetBundlesFetchFunction: GridEntitiesFetchFunction<WidgetsBundle, string>;
    allWidgetsFetchFunction: GridEntitiesFetchFunction<WidgetTypeInfo, WidgetsFilter>;
    widgetsFetchFunction: GridEntitiesFetchFunction<WidgetTypeInfo, BundleWidgetsFilter>;
    widgetsBundleFilter: string;
    allWidgetsFilter: WidgetsFilter;
    widgetsFilter: BundleWidgetsFilter;
    constructor(widgetsService: WidgetService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onWidgetClicked($event: Event, widget: WidgetTypeInfo): void;
    isSystem(item: WidgetsBundle): boolean;
    selectBundle($event: Event, bundle: WidgetsBundle): void;
    isObject(value: any): boolean;
    private toWidgetInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardWidgetSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardWidgetSelectComponent, "tb-dashboard-widget-select", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "scadaFirst": { "alias": "scadaFirst"; "required": false; }; "search": { "alias": "search"; "required": false; }; "filterWidgetTypes": { "alias": "filterWidgetTypes"; "required": false; }; "selectWidgetMode": { "alias": "selectWidgetMode"; "required": false; }; "deprecatedFilter": { "alias": "deprecatedFilter"; "required": false; }; }, { "widgetSelected": "widgetSelected"; }, never, never, false, never>;
}
export {};
