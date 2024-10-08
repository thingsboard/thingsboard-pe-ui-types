import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { IAliasController, IStateController } from '@core/api/widget-api.models';
import { Widget, WidgetConfig } from '@shared/models/widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Timewindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class WidgetPreviewComponent extends PageComponent implements OnInit, OnChanges {
    protected store: Store<AppState>;
    aliasController: IAliasController;
    stateController: IStateController;
    dashboardTimewindow: Timewindow;
    widget: Widget;
    widgetConfig: WidgetConfig;
    previewWidth: string;
    previewHeight: string;
    widgets: Widget[];
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadPreviewWidget;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetPreviewComponent, "tb-widget-preview", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "stateController": { "alias": "stateController"; "required": false; }; "dashboardTimewindow": { "alias": "dashboardTimewindow"; "required": false; }; "widget": { "alias": "widget"; "required": false; }; "widgetConfig": { "alias": "widgetConfig"; "required": false; }; "previewWidth": { "alias": "previewWidth"; "required": false; }; "previewHeight": { "alias": "previewHeight"; "required": false; }; }, {}, never, [".tb-preview-panel-content"], false, never>;
}
