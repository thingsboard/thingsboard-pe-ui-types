import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ColorPickerDialogData {
    color: string;
}
export declare class ColorPickerDialogComponent extends DialogComponent<ColorPickerDialogComponent, string> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: ColorPickerDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<ColorPickerDialogComponent, string>;
    fb: UntypedFormBuilder;
    colorPickerFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: ColorPickerDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ColorPickerDialogComponent, string>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    onColorChange(color: string): void;
    cancel(): void;
    select(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerDialogComponent, "tb-color-picker-dialog", never, {}, {}, never, never, false>;
}
