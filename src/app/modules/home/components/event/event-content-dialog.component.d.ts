import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ContentType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export interface EventContentDialogData {
    content: string;
    title: string;
    contentType: ContentType;
}
export declare class EventContentDialogComponent extends DialogComponent<EventContentDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: EventContentDialogData;
    protected dialogRef: MatDialogRef<EventContentDialogComponent>;
    private renderer;
    eventContentEditorElmRef: ElementRef;
    title: string;
    showBorder: boolean;
    private contentType;
    private aceEditor;
    constructor(store: Store<AppState>, router: Router, data: EventContentDialogData, dialogRef: MatDialogRef<EventContentDialogComponent>, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private isJson;
    private createEditor;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventContentDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventContentDialogComponent, "tb-event-content-dialog", never, {}, {}, never, never, false, never>;
}
