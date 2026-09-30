import { ElementRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { DynamicMatDialog } from '@shared/components/dialog/dynamic/dynamic-dialog';
import * as i0 from "@angular/core";
export declare class RequestTrendzComponent extends PageComponent implements OnInit {
    private dialog;
    private elementRef;
    constructor(dialog: DynamicMatDialog, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestTrendzComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RequestTrendzComponent, "tb-request-trendz", never, {}, {}, never, never, false, never>;
}
