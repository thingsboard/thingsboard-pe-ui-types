import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TbStringTemplateOutletDirective<_T = unknown> implements OnChanges {
    private viewContainer;
    private templateRef;
    private embeddedViewRef;
    private context;
    tbStringTemplateOutletContext: any | null;
    tbStringTemplateOutlet: any | TemplateRef<any>;
    static ngTemplateContextGuard<T>(_dir: TbStringTemplateOutletDirective<T>, _ctx: any): _ctx is TbStringTemplateOutletContext;
    private recreateView;
    private updateContext;
    constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<any>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbStringTemplateOutletDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbStringTemplateOutletDirective<any>, "[tbStringTemplateOutlet]", ["tbStringTemplateOutlet"], { "tbStringTemplateOutletContext": { "alias": "tbStringTemplateOutletContext"; "required": false; }; "tbStringTemplateOutlet": { "alias": "tbStringTemplateOutlet"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TbStringTemplateOutletContext {
    $implicit: any;
}
