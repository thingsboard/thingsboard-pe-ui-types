import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NgForm } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { Palette } from '@shared/models/white-labeling.models';
import { ColorPalette } from '@shared/models/material.models';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export interface PaletteDialogData {
    palette: Palette;
}
export declare class PaletteDialogComponent extends DialogComponent<PaletteDialogComponent, ColorPalette> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private translate;
    private dialogs;
    data: PaletteDialogData;
    dialogRef: MatDialogRef<PaletteDialogComponent, ColorPalette>;
    paletteForm: NgForm;
    palette: Palette;
    colors: ColorPalette;
    paletteInfo: ColorPalette;
    hues: string[];
    paletteKey: string;
    constructor(store: Store<AppState>, router: Router, translate: TranslateService, dialogs: DialogService, data: PaletteDialogData, dialogRef: MatDialogRef<PaletteDialogComponent, ColorPalette>);
    ngOnInit(): void;
    hueStyle(hue: string): {
        [klass: string]: any;
    };
    hueName(hue: string): string;
    editColor(hue: string): void;
    cancel(): void;
    savePalette(): void;
    private normalizeColors;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaletteDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaletteDialogComponent, "tb-palette-dialog", never, {}, {}, never, never>;
}
