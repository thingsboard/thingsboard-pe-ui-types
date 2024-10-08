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
    static ɵcmp: i0.ɵɵComponentDeclaration<FontSettingsComponent, "tb-font-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "previewText": { "alias": "previewText"; "required": false; }; "initialPreviewStyle": { "alias": "initialPreviewStyle"; "required": false; }; "clearButton": { "alias": "clearButton"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "disabledLineHeight": { "alias": "disabledLineHeight"; "required": false; }; "forceSizeUnit": { "alias": "forceSizeUnit"; "required": false; }; }, {}, never, never, false, never>;
}
