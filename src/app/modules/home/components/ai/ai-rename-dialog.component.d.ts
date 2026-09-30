import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export interface AiRenameDialogData {
    title: string;
    value: string;
}
export declare class AiRenameDialogComponent extends DialogComponent<AiRenameDialogComponent, string> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AiRenameDialogComponent>;
    data: AiRenameDialogData;
    private fb;
    valueControl: import("@angular/forms").FormControl<string>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AiRenameDialogComponent>, data: AiRenameDialogData, fb: FormBuilder);
    cancel(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiRenameDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiRenameDialogComponent, "tb-input-dialog", never, {}, {}, never, never, false, never>;
}
