import { ComponentFactoryResolver, ComponentRef, ElementRef, ViewContainerRef } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
export declare class CircularProgressDirective {
    private elementRef;
    private componentFactoryResolver;
    private viewContainerRef;
    showProgressValue: boolean;
    children: JQuery<any>;
    cssWidth: any;
    set showProgress(showProgress: boolean);
    spinnerRef: ComponentRef<MatSpinner>;
    constructor(elementRef: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    createCircularProgress(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularProgressDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CircularProgressDirective, "[tb-circular-progress]", never, { "showProgress": "tb-circular-progress"; }, {}, never>;
}
