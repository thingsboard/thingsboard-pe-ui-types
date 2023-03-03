import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export interface CustomCssDialogData {
    customCss: string;
    readonly: boolean;
}
export declare class CustomCssDialogComponent extends DialogComponent<CustomCssDialogComponent, string> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: CustomCssDialogData;
    dialogRef: MatDialogRef<CustomCssDialogComponent, string>;
    private raf;
    cssEditorElmRef: ElementRef;
    private cssEditor;
    private editorsResizeCaf;
    private editorResize$;
    customCss: string;
    readonly: boolean;
    fullscreen: boolean;
    isDirty: boolean;
    valid: boolean;
    constructor(store: Store<AppState>, router: Router, data: CustomCssDialogData, dialogRef: MatDialogRef<CustomCssDialogComponent, string>, raf: RafService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private onAceEditorResize;
    private updateValue;
    private validate;
    beautifyCss(): void;
    onFullscreen(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCssDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCssDialogComponent, "tb-custom-css-dialog", never, {}, {}, never, never, false, never>;
}
