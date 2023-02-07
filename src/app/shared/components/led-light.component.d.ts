import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LedLightComponent implements OnInit, AfterViewInit, OnChanges {
    private elementRef;
    size: number;
    colorOn: string;
    colorOff: string;
    offOpacity: number;
    private enabledValue;
    get enabled(): boolean;
    set enabled(value: boolean);
    private canvasSize;
    private radius;
    private glowSize;
    private glowColor;
    private paper;
    private circleElement;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private update;
    private draw;
    static ɵfac: i0.ɵɵFactoryDeclaration<LedLightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LedLightComponent, "tb-led-light", never, { "size": "size"; "colorOn": "colorOn"; "colorOff": "colorOff"; "offOpacity": "offOpacity"; "enabled": "enabled"; }, {}, never, never, false>;
}
