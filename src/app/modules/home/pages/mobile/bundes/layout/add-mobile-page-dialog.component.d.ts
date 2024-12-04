import { DialogComponent } from '@shared/components/dialog.component';
import { CustomMobilePage } from '@shared/models/mobile-app.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AddMobilePageDialogComponent extends DialogComponent<AddMobilePageDialogComponent, CustomMobilePage> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AddMobilePageDialogComponent, CustomMobilePage>;
    private fb;
    customMobilePage: import("@angular/forms").FormControl<CustomMobilePage>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AddMobilePageDialogComponent, CustomMobilePage>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddMobilePageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddMobilePageDialogComponent, "tb-add-mobile-page-dialog", never, {}, {}, never, never, false, never>;
}
