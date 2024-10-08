import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { ImageResourceInfo } from '@shared/models/resource.models';
import { ImageService } from '@core/http/image.service';
import { MatDialog } from '@angular/material/dialog';
import { ScadaSymbolMetadata } from '@home/components/widget/lib/scada/scada-symbol.models';
import * as i0 from "@angular/core";
export declare enum ScadaSymbolLinkType {
    none = "none",
    content = "content",
    resource = "resource"
}
export declare class ScadaSymbolInputComponent extends PageComponent implements OnInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private imageService;
    private dialog;
    private cd;
    label: string;
    required: boolean;
    disabled: boolean;
    scadaSymbolContent: string;
    scadaSymbolMetadata: ScadaSymbolMetadata;
    scadaSymbolUrl: string;
    imageResource: ImageResourceInfo;
    loadingImageResource: boolean;
    ScadaSymbolLinkType: typeof ScadaSymbolLinkType;
    linkType: ScadaSymbolLinkType;
    private propagateChange;
    constructor(store: Store<AppState>, imageService: ImageService, dialog: MatDialog, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private detectLinkType;
    private updateModel;
    private reset;
    clearSymbol(): void;
    openGallery($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolInputComponent, "tb-scada-symbol-input", never, { "label": { "alias": "label"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "scadaSymbolContent": { "alias": "scadaSymbolContent"; "required": false; }; "scadaSymbolMetadata": { "alias": "scadaSymbolMetadata"; "required": false; }; }, {}, never, never, false, never>;
}
