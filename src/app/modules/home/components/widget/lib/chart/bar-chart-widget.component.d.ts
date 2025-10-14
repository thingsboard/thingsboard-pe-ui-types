import { OnInit, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { TranslateService } from '@ngx-translate/core';
import { LatestChartComponent, LatestChartComponentCallbacks } from '@home/components/widget/lib/chart/latest-chart.component';
import { BarChartWidgetSettings } from '@home/components/widget/lib/chart/bar-chart-widget.models';
import { ChartWidgetComponent } from '@home/components/widget/lib/chart/chart.models';
import * as i0 from "@angular/core";
export declare class BarChartWidgetComponent implements OnInit, ChartWidgetComponent {
    private widgetComponent;
    private translate;
    latestChart: LatestChartComponent;
    ctx: WidgetContext;
    reportMode: boolean;
    widgetTitlePanel: TemplateRef<any>;
    settings: BarChartWidgetSettings;
    callbacks: LatestChartComponentCallbacks;
    constructor(widgetComponent: WidgetComponent, translate: TranslateService);
    ngOnInit(): void;
    onInit(): void;
    onDataUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartWidgetComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartWidgetComponent, "tb-bar-chart-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "reportMode": { "alias": "reportMode"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
