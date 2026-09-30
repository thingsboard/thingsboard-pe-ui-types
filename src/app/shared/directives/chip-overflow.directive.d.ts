import { AfterViewInit, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ChipOverflowDirective implements AfterViewInit, OnDestroy {
    private host;
    private renderer;
    private zone;
    chipSelector: string;
    gap: number;
    overflowTemplate: string;
    overflowClass: string;
    minChips: number;
    showOverflowedTitle: boolean;
    private resizeObserver?;
    private mutationObserver?;
    private overflowEl;
    private timeoutId?;
    constructor(host: ElementRef<HTMLElement>, renderer: Renderer2, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private prepareHost;
    private createOverflowChip;
    private observeResize;
    private observeMutations;
    private reflow;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipOverflowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ChipOverflowDirective, "[tb-chip-overflow]", never, { "chipSelector": { "alias": "chipSelector"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "overflowTemplate": { "alias": "overflowTemplate"; "required": false; }; "overflowClass": { "alias": "overflowClass"; "required": false; }; "minChips": { "alias": "minChips"; "required": false; }; "showOverflowedTitle": { "alias": "showOverflowedTitle"; "required": false; }; }, {}, never, never, false, never>;
}
