import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface SaveWidgetTypeAsDialogResult {
    widgetName: string;
    bundleId: string;
    bundleAlias: string;
}
export declare class SaveWidgetTypeAsDialogComponent extends DialogComponent<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult>;
    fb: UntypedFormBuilder;
    saveWidgetTypeAsFormGroup: UntypedFormGroup;
    bundlesScope: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SaveWidgetTypeAsDialogComponent, SaveWidgetTypeAsDialogResult>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    saveAs(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveWidgetTypeAsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaveWidgetTypeAsDialogComponent, "tb-save-widget-type-as-dialog", never, {}, {}, never, never, false>;
}
