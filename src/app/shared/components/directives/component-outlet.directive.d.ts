import { ComponentFactory, ComponentRef, EventEmitter, Injector, OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TbComponentOutletDirective<_T = unknown> implements OnChanges {
    private viewContainer;
    private renderer;
    private componentRef;
    private context;
    tbComponentOutletContext: any | null;
    tbComponentStyle: {
        [klass: string]: any;
    } | null;
    tbComponentInjector: Injector | null;
    tbComponentOutlet: ComponentFactory<any>;
    componentChange: EventEmitter<ComponentRef<any>>;
    static ngTemplateContextGuard<T>(_dir: TbComponentOutletDirective<T>, _ctx: any): _ctx is TbComponentOutletContext;
    private recreateComponent;
    private updateContext;
    constructor(viewContainer: ViewContainerRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbComponentOutletDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbComponentOutletDirective<any>, "[tbComponentOutlet]", ["tbComponentOutlet"], { "tbComponentOutletContext": "tbComponentOutletContext"; "tbComponentStyle": "tbComponentStyle"; "tbComponentInjector": "tbComponentInjector"; "tbComponentOutlet": "tbComponentOutlet"; }, { "componentChange": "componentChange"; }, never, never, false>;
}
export declare class TbComponentOutletContext {
    $implicit: any;
}
