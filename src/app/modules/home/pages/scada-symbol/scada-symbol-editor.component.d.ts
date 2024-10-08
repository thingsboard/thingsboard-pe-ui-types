import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ScadaSymbolEditObject, ScadaSymbolEditObjectCallbacks } from '@home/pages/scada-symbol/scada-symbol-editor.models';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ScadaSymbolEditorData {
    scadaSymbolContent: string;
}
type editorModeType = 'svg' | 'xml';
export declare class ScadaSymbolEditorComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private cd;
    private zone;
    scadaSymbolShape: ElementRef<HTMLElement>;
    tooltipsContainer: ElementRef<HTMLElement>;
    tooltipsContainerComponent: TbAnchorComponent;
    data: ScadaSymbolEditorData;
    editObjectCallbacks: ScadaSymbolEditObjectCallbacks;
    readonly: boolean;
    updateScadaSymbol: EventEmitter<any>;
    downloadScadaSymbol: EventEmitter<any>;
    scadaSymbolEditObject: ScadaSymbolEditObject;
    zoomInDisabled: boolean;
    zoomOutDisabled: boolean;
    showHiddenElements: boolean;
    showHiddenElementsChange: EventEmitter<boolean>;
    displayShowHidden: boolean;
    svgContentFormControl: FormControl<any>;
    svgContent: string;
    private editorModeValue;
    get editorMode(): editorModeType;
    set editorMode(value: editorModeType);
    constructor(cd: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    getContent(): string;
    getTags(): string[];
    zoomIn(): void;
    zoomOut(): void;
    toggleShowHidden(): void;
    private updateEditorMode;
    private updateContent;
    private updateEditObjectContent;
    private updateZoomButtonsState;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolEditorComponent, "tb-scada-symbol-editor", never, { "data": { "alias": "data"; "required": false; }; "editObjectCallbacks": { "alias": "editObjectCallbacks"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "showHiddenElements": { "alias": "showHiddenElements"; "required": false; }; }, { "updateScadaSymbol": "updateScadaSymbol"; "downloadScadaSymbol": "downloadScadaSymbol"; "showHiddenElementsChange": "showHiddenElementsChange"; }, never, never, false, never>;
}
export {};
