import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { ColorProcessor, ComponentStyle } from '@shared/models/widget-settings.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { ValueChartCardLayout, ValueChartCardWidgetSettings } from '@home/components/widget/lib/cards/value-chart-card-widget.models';
import * as i0 from "@angular/core";
export declare class ValueChartCardWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private widgetComponent;
    private cd;
    chartElement: ElementRef;
    valueChartCardContent: ElementRef<HTMLElement>;
    valueChartCardValue: ElementRef<HTMLElement>;
    settings: ValueChartCardWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    layout: ValueChartCardLayout;
    showValue: boolean;
    valueText: string;
    valueStyle: ComponentStyle;
    valueColor: ColorProcessor;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    private flot;
    private flotDataKey;
    private valueKey;
    private contentResize$;
    private decimals;
    private units;
    private valueFontSize;
    constructor(renderer: Renderer2, widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    onLatestDataUpdated(): void;
    onEditModeChanged(): void;
    onDestroy(): void;
    private onResize;
    private setValueFontSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueChartCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueChartCardWidgetComponent, "tb-value-chart-card-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}