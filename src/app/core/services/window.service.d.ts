import { ClassProvider, FactoryProvider, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const WINDOW: InjectionToken<unknown>;
export declare abstract class WindowRef {
    get nativeWindow(): Window | object;
}
export declare class BrowserWindowRef extends WindowRef {
    constructor();
    get nativeWindow(): Window | object;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrowserWindowRef, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BrowserWindowRef>;
}
export declare function windowFactory(browserWindowRef: BrowserWindowRef, platformId: object): Window | object;
export declare const browserWindowProvider: ClassProvider;
export declare const windowProvider: FactoryProvider;
export declare const WINDOW_PROVIDERS: (ClassProvider | FactoryProvider)[];
