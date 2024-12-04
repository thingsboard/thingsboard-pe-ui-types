import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ExportResourceDialogData {
    title: string;
    prompt: string;
    include?: boolean;
    ignoreLoading?: boolean;
}
export interface ExportResourceDialogDialogResult {
    include: boolean;
}
export declare class ExportResourceDialogComponent extends DialogComponent<ExportResourceDialogComponent, ExportResourceDialogDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    dialogRef: MatDialogRef<ExportResourceDialogComponent, ExportResourceDialogDialogResult>;
    ignoreLoading: boolean;
    title: string;
    prompt: string;
    includeResourcesFormControl: FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, data: ExportResourceDialogData, dialogRef: MatDialogRef<ExportResourceDialogComponent, ExportResourceDialogDialogResult>);
    cancel(): void;
    export(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportResourceDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportResourceDialogComponent, "tb-export-resource-dialog", never, {}, {}, never, never, false, never>;
}
