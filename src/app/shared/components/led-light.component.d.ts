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
    static ɵcmp: i0.ɵɵComponentDeclaration<LedLightComponent, "tb-led-light", never, { "size": { "alias": "size"; "required": false; }; "colorOn": { "alias": "colorOn"; "required": false; }; "colorOff": { "alias": "colorOff"; "required": false; }; "offOpacity": { "alias": "offOpacity"; "required": false; }; "enabled": { "alias": "enabled"; "required": false; }; }, {}, never, never, false, never>;
}
