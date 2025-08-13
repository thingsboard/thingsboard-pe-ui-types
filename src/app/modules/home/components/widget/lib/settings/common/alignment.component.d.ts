import { Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { alignment } from '@shared/models/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class AlignmentComponent implements ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    alignmentTranslations: Map<string, string>;
    alignmentIcons: Map<string, string>;
    disabled: boolean;
    horizontal: boolean;
    modelValue: alignment;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: alignment): void;
    openAlignmentPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlignmentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlignmentComponent, "tb-alignment", never, { "disabled": { "alias": "disabled"; "required": false; }; "horizontal": { "alias": "horizontal"; "required": false; }; }, {}, never, never, false, never>;
}
