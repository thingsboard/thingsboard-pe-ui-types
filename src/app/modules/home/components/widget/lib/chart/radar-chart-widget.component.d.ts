import { OnInit, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { TranslateService } from '@ngx-translate/core';
import { LatestChartComponent, LatestChartComponentCallbacks } from '@home/components/widget/lib/chart/latest-chart.component';
import { RadarChartWidgetSettings } from '@home/components/widget/lib/chart/radar-chart-widget.models';
import { ChartWidgetComponent } from '@home/components/widget/lib/chart/chart.models';
import * as i0 from "@angular/core";
export declare class RadarChartWidgetComponent implements OnInit, ChartWidgetComponent {
    private widgetComponent;
    private translate;
    latestChart: LatestChartComponent;
    ctx: WidgetContext;
    reportMode: boolean;
    widgetTitlePanel: TemplateRef<any>;
    settings: RadarChartWidgetSettings;
    callbacks: LatestChartComponentCallbacks;
    constructor(widgetComponent: WidgetComponent, translate: TranslateService);
    ngOnInit(): void;
    onInit(): void;
    onDataUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadarChartWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadarChartWidgetComponent, "tb-radar-chart-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "reportMode": { "alias": "reportMode"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
