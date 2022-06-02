import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface WidgetFont {
    family: string;
    size: number;
    style: 'normal' | 'italic' | 'oblique';
    weight: 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    color: string;
    shadowColor?: string;
}
export declare class WidgetFontComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    display: string;
    disabled: boolean;
    hasShadowColor: boolean;
    sizeTitle: string;
    private modelValue;
    private propagateChange;
    widgetFontFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetFont): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetFontComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetFontComponent, "tb-widget-font", never, { "disabled": "disabled"; "hasShadowColor": "hasShadowColor"; "sizeTitle": "sizeTitle"; }, {}, never, never>;
}
