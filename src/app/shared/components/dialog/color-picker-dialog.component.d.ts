import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ColorPickerDialogData {
    color: string;
    colorClearButton: boolean;
    useThemePalette?: boolean;
}
export interface ColorPickerDialogResult {
    color?: string;
    canceled?: boolean;
}
export declare class ColorPickerDialogComponent extends DialogComponent<ColorPickerDialogComponent, ColorPickerDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    data: ColorPickerDialogData;
    dialogRef: MatDialogRef<ColorPickerDialogComponent, ColorPickerDialogResult>;
    color: string;
    colorClearButton: boolean;
    useThemePalette: boolean;
    constructor(store: Store<AppState>, router: Router, data: ColorPickerDialogData, dialogRef: MatDialogRef<ColorPickerDialogComponent, ColorPickerDialogResult>);
    selectColor(color: string): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerDialogComponent, "tb-color-picker-dialog", never, {}, {}, never, never, false, never>;
}
