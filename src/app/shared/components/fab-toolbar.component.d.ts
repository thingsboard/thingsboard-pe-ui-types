import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { _Constructor, CanColor, ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare type FabToolbarDirection = 'left' | 'right';
declare class MatFabToolbarBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const MatFabToolbarMixinBase: _Constructor<CanColor> & typeof MatFabToolbarBase;
export declare class FabTriggerDirective {
    private el;
    constructor(el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<FabTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabTriggerDirective, "mat-fab-trigger", never, {}, {}, never, never, false, never>;
}
export declare class FabActionsDirective implements OnInit {
    private el;
    constructor(el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabActionsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FabActionsDirective, "mat-fab-actions", never, {}, {}, never, never, false, never>;
}
export declare class FabToolbarComponent extends MatFabToolbarMixinBase implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private el;
    private window;
    private fabToolbarResize$;
    isOpen: boolean;
    direction: FabToolbarDirection;
    color: ThemePalette;
    constructor(el: ElementRef<HTMLElement>, window: Window);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onFabToolbarResize;
    private triggerOpenClose;
    static ɵfac: i0.ɵɵFactoryDeclaration<FabToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FabToolbarComponent, "mat-fab-toolbar", never, { "isOpen": { "alias": "isOpen"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export {};
