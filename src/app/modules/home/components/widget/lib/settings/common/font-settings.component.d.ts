import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ComponentStyle, cssUnit, Font } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class FontSettingsComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    previewText: string | (() => string);
    initialPreviewStyle: ComponentStyle;
    clearButton: boolean;
    autoScale: boolean;
    disabledLineHeight: boolean;
    forceSizeUnit: cssUnit;
    private modelValue;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Font): void;
    openFontSettingsPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FontSettingsComponent, "tb-font-settings", never, { "disabled": "disabled"; "previewText": "previewText"; "initialPreviewStyle": "initialPreviewStyle"; "clearButton": "clearButton"; "autoScale": "autoScale"; "disabledLineHeight": "disabledLineHeight"; "forceSizeUnit": "forceSizeUnit"; }, {}, never, never, false, never>;
}
