import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BackgroundSettings, BackgroundType, ComponentStyle } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class BackgroundSettingsComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    backgroundType: typeof BackgroundType;
    modelValue: BackgroundSettings;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: BackgroundSettings): void;
    openBackgroundSettingsPopup($event: Event, matButton: MatButton): void;
    private updateBackgroundStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackgroundSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackgroundSettingsComponent, "tb-background-settings", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
