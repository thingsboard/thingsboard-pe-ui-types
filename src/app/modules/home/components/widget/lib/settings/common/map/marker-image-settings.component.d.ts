import { ChangeDetectorRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { MarkerImageSettings, MarkerImageType } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class MarkerImageSettingsComponent implements ControlValueAccessor {
    private popoverService;
    private renderer;
    private cd;
    private viewContainerRef;
    disabled: boolean;
    MarkerImageType: typeof MarkerImageType;
    modelValue: MarkerImageSettings;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, cd: ChangeDetectorRef, viewContainerRef: ViewContainerRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MarkerImageSettings): void;
    openImageSettingsPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkerImageSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkerImageSettingsComponent, "tb-marker-image-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
