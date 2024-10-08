import { ComponentRef, ElementRef, ViewContainerRef } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
export declare class CircularProgressDirective {
    private elementRef;
    private viewContainerRef;
    showProgressValue: boolean;
    children: JQuery<any>;
    cssWidth: any;
    set showProgress(showProgress: boolean);
    spinnerRef: ComponentRef<MatProgressSpinner>;
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef);
    createCircularProgress(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularProgressDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CircularProgressDirective, "[tb-circular-progress]", never, { "showProgress": { "alias": "tb-circular-progress"; "required": false; }; }, {}, never, never, false, never>;
}
