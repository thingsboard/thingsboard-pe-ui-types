import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ColorProcessor, ComponentStyle } from '@shared/models/widget-settings.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { LabelValueCardWidgetSettings } from '@home/components/widget/lib/cards/label-value-card-widget.models';
import * as i0 from "@angular/core";
export declare class LabelValueCardWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    labelCardPanel: ElementRef<HTMLElement>;
    labelCardContent: ElementRef<HTMLElement>;
    labelCardRow: ElementRef<HTMLElement>;
    settings: LabelValueCardWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    showLabel: boolean;
    label$: Observable<string>;
    labelStyle: ComponentStyle;
    labelColor: ColorProcessor;
    valueText: string;
    valueStyle: ComponentStyle;
    valueColor: ColorProcessor;
    showIcon: boolean;
    icon: string;
    iconStyle: ComponentStyle;
    iconColor: ColorProcessor;
    hasCardClickAction: boolean;
    private panelResize$;
    private valueFormat;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    cardClick($event: Event): void;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelValueCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelValueCardWidgetComponent, "tb-label-value-card-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
