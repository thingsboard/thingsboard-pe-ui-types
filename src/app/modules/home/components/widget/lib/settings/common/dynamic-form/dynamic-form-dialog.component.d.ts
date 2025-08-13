import { DialogComponent } from '@shared/components/dialog.component';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export interface DynamicFormDialogData<V> {
    title: string;
    properties: FormProperty[];
    value: V;
}
export declare class DynamicFormDialogComponent<V> extends DialogComponent<DynamicFormDialogComponent<V>, V> {
    protected store: Store<AppState>;
    protected router: Router;
    data: DynamicFormDialogData<V>;
    dialogRef: MatDialogRef<DynamicFormDialogComponent<V>, V>;
    fb: FormBuilder;
    title: string;
    properties: FormProperty[];
    dynamicFormGroup: FormGroup;
    constructor(store: Store<AppState>, router: Router, data: DynamicFormDialogData<V>, dialogRef: MatDialogRef<DynamicFormDialogComponent<V>, V>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormDialogComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormDialogComponent<any>, "tb-dynamic-form-dialog", never, {}, {}, never, never, false, never>;
}
