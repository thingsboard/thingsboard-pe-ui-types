import { OnDestroy, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutocompleteAutoScrollRepositionDirective implements AfterViewInit, OnDestroy {
    private readonly trigger;
    private readonly elementRef;
    private readonly renderer;
    private parentScrollSubscription;
    private isIntersecting;
    private intersectionObserver;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updatePanelVisibility;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteAutoScrollRepositionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutocompleteAutoScrollRepositionDirective, "input[matAutocomplete], textarea[matAutocomplete]", never, {}, {}, never, never, false, never>;
}
