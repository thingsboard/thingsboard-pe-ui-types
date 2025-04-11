import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { RangeChartWidgetSettings, RangeItem } from './range-chart-widget.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export declare class RangeChartWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    widgetComponent: WidgetComponent;
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    settings: RangeChartWidgetSettings;
    ctx: WidgetContext;
    showLegend: boolean;
    legendClass: string;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    legendLabelStyle: ComponentStyle;
    disabledLegendLabelStyle: ComponentStyle;
    visibleRangeItems: RangeItem[];
    private decimals;
    private units;
    private rangeItems;
    private timeSeriesChart;
    constructor(widgetComponent: WidgetComponent, imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    toggleRangeItem(item: RangeItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeChartWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeChartWidgetComponent, "tb-range-chart-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
