import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface JsonObjectEditDialogData {
    jsonValue: object;
    required?: boolean;
    title?: string;
    saveLabel?: string;
    cancelLabel?: string;
}
export declare class JsonObjectEditDialogComponent extends DialogComponent<JsonObjectEditDialogComponent, object> {
    protected store: Store<AppState>;
    protected router: Router;
    data: JsonObjectEditDialogData;
    dialogRef: MatDialogRef<JsonObjectEditDialogComponent, object>;
    fb: FormBuilder;
    private translate;
    jsonFormGroup: FormGroup;
    title: any;
    saveButtonLabel: any;
    cancelButtonLabel: any;
    required: boolean;
    constructor(store: Store<AppState>, router: Router, data: JsonObjectEditDialogData, dialogRef: MatDialogRef<JsonObjectEditDialogComponent, object>, fb: FormBuilder, translate: TranslateService);
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonObjectEditDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonObjectEditDialogComponent, "tb-object-edit-dialog", never, {}, {}, never, never, false, never>;
}
