import { OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ColorRange, ColorRangeSettings, ComponentStyle } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class ColorRangeSettingsComponentService {
    private colorSettingsComponents;
    constructor();
    registerColorSettingsComponent(comp: ColorRangeSettingsComponent): void;
    unregisterColorSettingsComponent(comp: ColorRangeSettingsComponent): void;
    getOtherColorSettingsComponents(comp: ColorRangeSettingsComponent): ColorRangeSettingsComponent[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorRangeSettingsComponentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColorRangeSettingsComponentService>;
}
export declare class ColorRangeSettingsComponent implements OnInit, ControlValueAccessor, OnDestroy {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private colorSettingsComponentService;
    disabled: boolean;
    settingsKey: string;
    modelValue: Array<ColorRange>;
    colorStyle: ComponentStyle;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, colorSettingsComponentService: ColorRangeSettingsComponentService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<ColorRange> | ColorRangeSettings): void;
    openColorRangeSettingsPopup($event: Event, matButton: MatButton): void;
    private updateColorStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorRangeSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorRangeSettingsComponent, "tb-color-range-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "settingsKey": { "alias": "settingsKey"; "required": false; }; }, {}, never, never, false, never>;
}
