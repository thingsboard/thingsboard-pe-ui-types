import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Ace } from 'ace-builds';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export declare class JsonObjectViewComponent implements OnInit, OnDestroy {
    elementRef: ElementRef;
    protected store: Store<AppState>;
    private raf;
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
    private widthValue;
    get autoWidth(): boolean;
    set autoWidth(value: boolean);
    private heigthValue;
    get autoHeight(): boolean;
    set autoHeight(value: boolean);
    constructor(elementRef: ElementRef, store: Store<AppState>, raf: RafService, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateEditorSize(editorElement: any, content: string, editor: Ace.Editor): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonObjectViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonObjectViewComponent, "tb-json-object-view", never, { "label": { "alias": "label"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "editorStyle": { "alias": "editorStyle"; "required": false; }; "sort": { "alias": "sort"; "required": false; }; "autoWidth": { "alias": "autoWidth"; "required": false; }; "autoHeight": { "alias": "autoHeight"; "required": false; }; }, {}, never, never, false, never>;
}
