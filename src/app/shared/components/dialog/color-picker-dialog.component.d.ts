import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export interface ColorPickerDialogData {
    color: string;
    useThemePalette?: boolean;
}
type ColorMode = 'color' | 'primary' | 'accent';
export declare class ColorPickerDialogComponent extends DialogComponent<ColorPickerDialogComponent, string> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private utils;
    data: ColorPickerDialogData;
    dialogRef: MatDialogRef<ColorPickerDialogComponent, string>;
    fb: FormBuilder;
    useThemePalette: boolean;
    colorMode: ColorMode;
    plainColor: string;
    primaryColor: string;
    accentColor: string;
    dirty: boolean;
    valid: boolean;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, utils: UtilsService, data: ColorPickerDialogData, dialogRef: MatDialogRef<ColorPickerDialogComponent, string>, fb: FormBuilder);
    ngOnInit(): void;
    onPrimaryColorChange(color: string): void;
    onAccentColorChange(color: string): void;
    onPlainColorChange(color: string): void;
    selectedIndexChange(index: number): void;
    private updateValidity;
    cancel(): void;
    select(): void;
    private getColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerDialogComponent, "tb-color-picker-dialog", never, {}, {}, never, never, false, never>;
}
export {};
