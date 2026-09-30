import { ElementRef, OnInit } from '@angular/core';
import { DynamicMatDialog } from '@shared/components/dialog/dynamic/dynamic-dialog';
import * as i0 from "@angular/core";
export declare class RequestEdgeComponent implements OnInit {
    private dialog;
    private elementRef;
    constructor(dialog: DynamicMatDialog, elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RequestEdgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RequestEdgeComponent, "tb-request-edge", never, {}, {}, never, never, false, never>;
}
