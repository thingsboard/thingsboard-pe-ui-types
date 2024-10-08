import { OnInit, TemplateRef } from '@angular/core';
import { DoughnutWidgetSettings } from '@home/components/widget/lib/chart/doughnut-widget.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { TranslateService } from '@ngx-translate/core';
import { LatestChartComponent, LatestChartComponentCallbacks } from '@home/components/widget/lib/chart/latest-chart.component';
import * as i0 from "@angular/core";
export declare class DoughnutWidgetComponent implements OnInit {
    private widgetComponent;
    private translate;
    latestChart: LatestChartComponent;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    settings: DoughnutWidgetSettings;
    callbacks: LatestChartComponentCallbacks;
    constructor(widgetComponent: WidgetComponent, translate: TranslateService);
    ngOnInit(): void;
    onInit(): void;
    onDataUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoughnutWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoughnutWidgetComponent, "tb-doughnut-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
