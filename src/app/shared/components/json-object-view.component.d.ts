import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class JsonObjectViewComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private renderer;
    jsonViewerElmRef: ElementRef;
    private jsonViewer;
    private viewerElement;
    private propagateChange;
    private modelValue;
    private contentValue;
    label: string;
    fillHeight: boolean;
    editorStyle: {
        [klass: string]: any;
    };
    sort: (key: string, value: any) => any;
    autoWidth: boolean;
    autoHeight: boolean;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonObjectViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonObjectViewComponent, "tb-json-object-view", never, { "label": { "alias": "label"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "editorStyle": { "alias": "editorStyle"; "required": false; }; "sort": { "alias": "sort"; "required": false; }; "autoWidth": { "alias": "autoWidth"; "required": false; }; "autoHeight": { "alias": "autoHeight"; "required": false; }; }, {}, never, never, false, never>;
}
