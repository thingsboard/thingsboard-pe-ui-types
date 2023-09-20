import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ColorSettings, ColorType, ComponentStyle } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class ColorSettingsComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    colorType: typeof ColorType;
    modelValue: ColorSettings;
    colorStyle: ComponentStyle;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ColorSettings): void;
    openColorSettingsPopup($event: Event, matButton: MatButton): void;
    private updateColorStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorSettingsComponent, "tb-color-settings", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
