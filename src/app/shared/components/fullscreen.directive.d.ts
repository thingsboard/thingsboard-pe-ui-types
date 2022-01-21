import { ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class FullscreenDirective implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    private renderer;
    private sanitizer;
    private viewContainerRef;
    private overlay;
    fullscreenValue: boolean;
    private overlayRef;
    private parentElement;
    fullscreen: boolean;
    fullscreenElement: HTMLElement;
    fullscreenBackgroundStyle: {
        [klass: string]: any;
    };
    fullscreenBackgroundImage: SafeStyle | string;
    fullscreenChanged: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, renderer: Renderer2, sanitizer: DomSanitizer, viewContainerRef: ViewContainerRef, overlay: Overlay);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    enterFullscreen(): void;
    private setStyle;
    exitFullscreen(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullscreenDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullscreenDirective, "[tb-fullscreen]", never, { "fullscreen": "fullscreen"; "fullscreenElement": "fullscreenElement"; "fullscreenBackgroundStyle": "fullscreenBackgroundStyle"; "fullscreenBackgroundImage": "fullscreenBackgroundImage"; }, { "fullscreenChanged": "fullscreenChanged"; }, never>;
}
