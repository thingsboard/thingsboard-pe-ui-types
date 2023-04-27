import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class GettingStartedCompletedDialogComponent extends DialogComponent<GettingStartedCompletedDialogComponent, void> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<GettingStartedCompletedDialogComponent, void>;
    addDocLinkFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<GettingStartedCompletedDialogComponent, void>);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GettingStartedCompletedDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GettingStartedCompletedDialogComponent, "tb-getting-started-completed-dialog", never, {}, {}, never, never, false, never>;
}
