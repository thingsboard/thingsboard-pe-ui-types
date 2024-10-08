import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export declare class TruncateWithTooltipDirective implements OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private tooltip;
    text: string;
    tooltipEnabled: boolean;
    position: TooltipPosition;
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, tooltip: MatTooltip);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private observeMouseEvents;
    private applyTruncationStyles;
    private isOverflown;
    private showTooltip;
    private hideTooltip;
    static ɵfac: i0.ɵɵFactoryDeclaration<TruncateWithTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TruncateWithTooltipDirective, "[tbTruncateWithTooltip]", never, { "text": { "alias": "tbTruncateWithTooltip"; "required": false; }; "tooltipEnabled": { "alias": "tooltipEnabled"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, never, never, false, never>;
}
