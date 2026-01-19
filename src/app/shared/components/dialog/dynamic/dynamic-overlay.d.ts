import { Overlay, ScrollStrategyOptions, OverlayKeyboardDispatcher, OverlayOutsideClickDispatcher, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentFactoryResolver, Injector, NgZone } from '@angular/core';
import { DynamicOverlayContainer } from './dynamic-overlay-container';
import { Location } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import * as i0 from "@angular/core";
export declare class DynamicOverlay extends Overlay {
    private _dynamicOverlayContainer;
    constructor(scrollStrategies: ScrollStrategyOptions, _overlayContainer: DynamicOverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _positionBuilder: OverlayPositionBuilder, _keyboardDispatcher: OverlayKeyboardDispatcher, _injector: Injector, _ngZone: NgZone, document: Document, _directionality: Directionality, _location: Location, _outsideClickDispatcher: OverlayOutsideClickDispatcher);
    setContainerElement(containerElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicOverlay, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicOverlay>;
}
