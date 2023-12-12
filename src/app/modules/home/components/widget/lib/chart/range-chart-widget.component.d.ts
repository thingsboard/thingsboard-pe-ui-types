import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { RangeChartWidgetSettings } from './range-chart-widget.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
interface VisualPiece {
    lt?: number;
    gt?: number;
    lte?: number;
    gte?: number;
    value?: number;
    color?: string;
}
interface RangeItem {
    index: number;
    from?: number;
    to?: number;
    piece: VisualPiece;
    color: string;
    label: string;
    visible: boolean;
    enabled: boolean;
}
export declare class RangeChartWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    settings: RangeChartWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    showLegend: boolean;
    legendClass: string;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    legendLabelStyle: ComponentStyle;
    disabledLegendLabelStyle: ComponentStyle;
    visibleRangeItems: RangeItem[];
    private rangeItems;
    private shapeResize$;
    private decimals;
    private units;
    private drawChartPending;
    private rangeChart;
    private rangeChartOptions;
    private selectedRanges;
    private tooltipDateFormat;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    toggleRangeItem(item: RangeItem): void;
    private drawChart;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeChartWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeChartWidgetComponent, "tb-range-chart-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}
export {};
