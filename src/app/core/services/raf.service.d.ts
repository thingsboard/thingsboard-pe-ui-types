import { NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export type CancelAnimationFrame = () => void;
export declare class RafService {
    private window;
    private ngZone;
    private readonly rafFunction;
    private readonly rafSupported;
    constructor(window: Window, ngZone: NgZone);
    raf(frameCallback: () => void, runInZone?: boolean): CancelAnimationFrame;
    static ɵfac: i0.ɵɵFactoryDeclaration<RafService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RafService>;
}
