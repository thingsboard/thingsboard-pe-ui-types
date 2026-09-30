import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutofocusDirective implements AfterViewInit {
    private el;
    constructor(el: ElementRef<HTMLInputElement>);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutofocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutofocusDirective, "[tb-auto-focus]", never, {}, {}, never, never, false, never>;
}
