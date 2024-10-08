import { ComponentRef, EventEmitter, Injector, OnChanges, Renderer2, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
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
    tbComponentOutlet: Type<any>;
    componentChange: EventEmitter<ComponentRef<any>>;
    static ngTemplateContextGuard<T>(_dir: TbComponentOutletDirective<T>, _ctx: any): _ctx is TbComponentOutletContext;
    private recreateComponent;
    private updateContext;
    constructor(viewContainer: ViewContainerRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbComponentOutletDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbComponentOutletDirective<any>, "[tbComponentOutlet]", ["tbComponentOutlet"], { "tbComponentOutletContext": { "alias": "tbComponentOutletContext"; "required": false; }; "tbComponentStyle": { "alias": "tbComponentStyle"; "required": false; }; "tbComponentInjector": { "alias": "tbComponentInjector"; "required": false; }; "tbComponentOutlet": { "alias": "tbComponentOutlet"; "required": false; }; }, { "componentChange": "componentChange"; }, never, never, false, never>;
}
export declare class TbComponentOutletContext {
    $implicit: any;
}
