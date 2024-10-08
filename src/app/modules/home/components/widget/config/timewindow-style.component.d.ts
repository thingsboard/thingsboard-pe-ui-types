import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TimewindowStyle } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { Timewindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class TimewindowStyleComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    previewValue: Timewindow;
    private modelValue;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimewindowStyle): void;
    openTimewindowStylePopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowStyleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowStyleComponent, "tb-timewindow-style", never, { "disabled": { "alias": "disabled"; "required": false; }; "previewValue": { "alias": "previewValue"; "required": false; }; }, {}, never, never, false, never>;
}
