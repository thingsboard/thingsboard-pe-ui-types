import { AfterViewInit, OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Palette } from '@shared/models/white-labeling.models';
import * as i0 from "@angular/core";
export declare class PaletteComponent extends PageComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private dialog;
    label: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    palette: Palette;
    palettes: Palette[];
    private propagateChange;
    constructor(store: Store<AppState>, dialog: MatDialog);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Palette): void;
    paletteName(palette: Palette): string;
    paletteStyle(palette: Palette): {
        [klass: string]: any;
    };
    paletteTypeChanged(): void;
    editPalette(): void;
    private updatePaletteColors;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaletteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaletteComponent, "tb-palette", never, { "label": "label"; "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
