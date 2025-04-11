import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MapWidgetSettings } from '@home/components/widget/lib/maps/map-widget.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class MapWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private imagePipe;
    private sanitizer;
    private cd;
    mapElement: ElementRef<HTMLElement>;
    settings: MapWidgetSettings;
    ctx: WidgetContext;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    private map;
    constructor(widgetComponent: WidgetComponent, imagePipe: ImagePipe, sanitizer: DomSanitizer, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapWidgetComponent, "tb-map-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
