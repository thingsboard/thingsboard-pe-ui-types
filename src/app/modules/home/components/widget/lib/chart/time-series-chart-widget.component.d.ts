import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { LegendConfig, LegendData, LegendKey } from '@shared/models/widget.models';
import { TimeSeriesChartWidgetSettings } from '@home/components/widget/lib/chart/time-series-chart-widget.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    widgetComponent: WidgetComponent;
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    settings: TimeSeriesChartWidgetSettings;
    ctx: WidgetContext;
    horizontalLegendPosition: boolean;
    showLegend: boolean;
    legendClass: string;
    legendConfig: LegendConfig;
    legendData: LegendData;
    legendKeys: LegendKey[];
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    legendColumnTitleStyle: ComponentStyle;
    legendLabelStyle: ComponentStyle;
    disabledLegendLabelStyle: ComponentStyle;
    legendValueStyle: ComponentStyle;
    displayLegendValues: boolean;
    private timeSeriesChart;
    constructor(widgetComponent: WidgetComponent, imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    onLatestDataUpdated(): void;
    onLegendKeyEnter(legendKey: LegendKey): void;
    onLegendKeyLeave(legendKey: LegendKey): void;
    toggleLegendKey(legendKey: LegendKey): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartWidgetComponent, "tb-time-series-chart-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
