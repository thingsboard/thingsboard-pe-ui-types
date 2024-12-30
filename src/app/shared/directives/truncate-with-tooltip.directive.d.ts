import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { ContentObserver } from '@angular/cdk/observers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export declare class TruncateWithTooltipDirective implements OnInit {
    private elementRef;
    private renderer;
    private tooltip;
    private contentObserver;
    text: import("@angular/core").InputSignal<string>;
    tooltipEnabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    position: import("@angular/core").InputSignal<TooltipPosition>;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, tooltip: MatTooltip, contentObserver: ContentObserver);
    ngOnInit(): void;
    private showTooltipOnOverflow;
    private applyTruncationStyles;
    private isOverflown;
    static ɵfac: i0.ɵɵFactoryDeclaration<TruncateWithTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TruncateWithTooltipDirective, "[tbTruncateWithTooltip]", never, { "text": { "alias": "tbTruncateWithTooltip"; "required": false; "isSignal": true; }; "tooltipEnabled": { "alias": "tooltipEnabled"; "required": false; "isSignal": true; }; "position": { "alias": "position"; "required": false; "isSignal": true; }; }, {}, never, never, false, [{ directive: typeof i1.MatTooltip; inputs: { "matTooltipClass": "matTooltipClass"; "matTooltipTouchGestures": "matTooltipTouchGestures"; }; outputs: {}; }]>;
}
