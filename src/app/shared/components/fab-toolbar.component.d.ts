import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CanColorCtor } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare type FabToolbarDirection = 'left' | 'right';
declare class MatFabToolbarBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const MatFabToolbarMixinBase: CanColorCtor & typeof MatFabToolbarBase;
export declare class FabTriggerDirective {
    private el;
    constructor(el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<FabTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabTriggerDirective, "mat-fab-trigger", never, {}, {}, never>;
}
export declare class FabActionsDirective implements OnInit {
    private el;
    constructor(el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabActionsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabActionsDirective, "mat-fab-actions", never, {}, {}, never>;
}
export declare class FabToolbarComponent extends MatFabToolbarMixinBase implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private el;
    private window;
    private fabToolbarResize$;
    isOpen: boolean;
    direction: FabToolbarDirection;
    constructor(el: ElementRef<HTMLElement>, window: Window);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onFabToolbarResize;
    private triggerOpenClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabToolbarComponent, "mat-fab-toolbar", never, { "color": "color"; "isOpen": "isOpen"; "direction": "direction"; }, {}, never, ["*"]>;
}
export {};
