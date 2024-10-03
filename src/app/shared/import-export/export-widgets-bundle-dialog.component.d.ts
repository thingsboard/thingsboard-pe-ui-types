import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import * as i0 from "@angular/core";
export interface ExportWidgetsBundleDialogData {
    widgetsBundle: WidgetsBundle;
    includeBundleWidgetsInExport: boolean;
    ignoreLoading?: boolean;
}
export interface ExportWidgetsBundleDialogResult {
    exportWidgets: boolean;
}
export declare class ExportWidgetsBundleDialogComponent extends DialogComponent<ExportWidgetsBundleDialogComponent, ExportWidgetsBundleDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ExportWidgetsBundleDialogData;
    dialogRef: MatDialogRef<ExportWidgetsBundleDialogComponent, ExportWidgetsBundleDialogResult>;
    widgetsBundle: WidgetsBundle;
    ignoreLoading: boolean;
    exportWidgetsFormControl: FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, data: ExportWidgetsBundleDialogData, dialogRef: MatDialogRef<ExportWidgetsBundleDialogComponent, ExportWidgetsBundleDialogResult>);
    ngOnInit(): void;
    cancel(): void;
    export(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportWidgetsBundleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportWidgetsBundleDialogComponent, "tb-export-widgets-bundle-dialog", never, {}, {}, never, never, false, never>;
}
