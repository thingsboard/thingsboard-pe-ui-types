import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AutoDateFormatSettings } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class AutoDateFormatSettingsComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    defaultValues: AutoDateFormatSettings;
    private modelValue;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AutoDateFormatSettings): void;
    openAutoFormatSettingsPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoDateFormatSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoDateFormatSettingsComponent, "tb-auto-date-format-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "defaultValues": { "alias": "defaultValues"; "required": false; }; }, {}, never, never, false, never>;
}
