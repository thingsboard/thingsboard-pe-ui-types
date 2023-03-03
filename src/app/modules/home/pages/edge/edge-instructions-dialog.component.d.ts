import { MatDialogRef } from "@angular/material/dialog";
import { DialogComponent } from "@shared/components/dialog.component";
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
export interface EdgeInstructionsData {
    instructions: string;
}
export declare class EdgeInstructionsDialogComponent extends DialogComponent<EdgeInstructionsDialogComponent, EdgeInstructionsData> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<EdgeInstructionsDialogComponent, EdgeInstructionsData>;
    data: EdgeInstructionsData;
    instructions: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<EdgeInstructionsDialogComponent, EdgeInstructionsData>, data: EdgeInstructionsData);
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeInstructionsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeInstructionsDialogComponent, "tb-edge-instructions", never, {}, {}, never, never, false, never>;
}
