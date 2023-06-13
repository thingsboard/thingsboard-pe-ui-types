import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { IAliasController, IStateController } from '@core/api/widget-api.models';
import { Widget, WidgetConfig } from '@shared/models/widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class WidgetPreviewComponent extends PageComponent implements OnInit, OnChanges {
    protected store: Store<AppState>;
    aliasController: IAliasController;
    stateController: IStateController;
    widget: Widget;
    widgetConfig: WidgetConfig;
    widgets: Widget[];
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadPreviewWidget;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetPreviewComponent, "tb-widget-preview", never, { "aliasController": "aliasController"; "stateController": "stateController"; "widget": "widget"; "widgetConfig": "widgetConfig"; }, {}, never, [".tb-preview-panel-content"], false, never>;
}
