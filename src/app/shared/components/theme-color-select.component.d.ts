import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { ColorPalette } from '@shared/models/material.models';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class ThemeColorSelectComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private wl;
    private utils;
    palette: 'primary' | 'accent';
    private modelValue;
    private propagateChange;
    paletteInfo: ColorPalette;
    hues: string[];
    colors: ColorPalette;
    paletteKey: string;
    selectedHue: string;
    constructor(store: Store<AppState>, wl: WhiteLabelingService, utils: UtilsService);
    ngOnInit(): void;
    hueStyle(hue: string): {
        [klass: string]: any;
    };
    selectedColorStyle(): {
        [klass: string]: any;
    };
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: string): void;
    selectColor(hue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeColorSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeColorSelectComponent, "tb-theme-color-select", never, { "palette": "palette"; }, {}, never, never, false, never>;
}
