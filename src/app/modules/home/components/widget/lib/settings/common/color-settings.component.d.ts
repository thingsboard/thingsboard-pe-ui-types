import { OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ColorSettings, ColorType, ComponentStyle } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class ColorSettingsComponentService {
    private colorSettingsComponents;
    constructor();
    registerColorSettingsComponent(comp: ColorSettingsComponent): void;
    unregisterColorSettingsComponent(comp: ColorSettingsComponent): void;
    getOtherColorSettingsComponents(comp: ColorSettingsComponent): ColorSettingsComponent[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSettingsComponentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ColorSettingsComponentService>;
}
export declare class ColorSettingsComponent implements OnInit, ControlValueAccessor, OnDestroy {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private colorSettingsComponentService;
    disabled: boolean;
    settingsKey: string;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    rangeAdvancedMode: boolean;
    gradientAdvancedMode: boolean;
    minValue: number;
    maxValue: number;
    colorType: typeof ColorType;
    modelValue: ColorSettings;
    colorStyle: ComponentStyle;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, colorSettingsComponentService: ColorSettingsComponentService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ColorSettings): void;
    openColorSettingsPopup($event: Event, matButton: MatButton): void;
    private updateColorStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorSettingsComponent, "tb-color-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "settingsKey": { "alias": "settingsKey"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; "rangeAdvancedMode": { "alias": "rangeAdvancedMode"; "required": false; }; "gradientAdvancedMode": { "alias": "gradientAdvancedMode"; "required": false; }; "minValue": { "alias": "minValue"; "required": false; }; "maxValue": { "alias": "maxValue"; "required": false; }; }, {}, never, never, false, never>;
}
