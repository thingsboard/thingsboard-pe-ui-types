import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormattedData } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export interface SelectEntityDialogData {
    entities: FormattedData[];
}
export declare class SelectEntityDialogComponent extends DialogComponent<SelectEntityDialogComponent, FormattedData> {
    protected store: Store<AppState>;
    protected router: Router;
    data: SelectEntityDialogData;
    dialogRef: MatDialogRef<SelectEntityDialogComponent, FormattedData>;
    fb: FormBuilder;
    selectEntityFormGroup: FormGroup;
    constructor(store: Store<AppState>, router: Router, data: SelectEntityDialogData, dialogRef: MatDialogRef<SelectEntityDialogComponent, FormattedData>, fb: FormBuilder);
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectEntityDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectEntityDialogComponent, "tb-select-entity-dialog", never, {}, {}, never, never, false, never>;
}
