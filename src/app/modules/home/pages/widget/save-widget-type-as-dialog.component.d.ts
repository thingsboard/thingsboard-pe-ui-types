import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface SaveWidgetTypeAsDialogResult {
    widgetName: string;
    widgetBundleId?: string;
}
export interface SaveWidgetTypeAsDialogData {
    dialogTitle?: string;
    title?: string;
    saveAsActionTitle?: string;
}
export declare class SaveWidgetTypeAsDialogComponent extends DialogComponent<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    dialogRef: MatDialogRef<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult>;
    fb: FormBuilder;
    saveWidgetTypeAsFormGroup: FormGroup;
    bundlesScope: string;
    dialogTitle: string;
    saveAsActionTitle: string;
    constructor(store: Store<AppState>, router: Router, data: SaveWidgetTypeAsDialogData, dialogRef: MatDialogRef<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult>, fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    saveAs(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveWidgetTypeAsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaveWidgetTypeAsDialogComponent, "tb-save-widget-type-as-dialog", never, {}, {}, never, never, false, never>;
}
