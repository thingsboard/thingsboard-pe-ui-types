import { ChangeDetectorRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WidgetButtonAppearance, WidgetButtonCustomStyle, WidgetButtonState } from '@shared/components/button/widget-button.models';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatIconButton } from '@angular/material/button';
import * as i0 from "@angular/core";
export declare class WidgetButtonCustomStyleComponent implements OnInit, OnChanges, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    disabled: boolean;
    appearance: WidgetButtonAppearance;
    borderRadius: string;
    autoScale: boolean;
    state: WidgetButtonState;
    widgetButtonState: typeof WidgetButtonState;
    modelValue: WidgetButtonCustomStyle;
    previewAppearance: WidgetButtonAppearance;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(_isDisabled: boolean): void;
    writeValue(value: WidgetButtonCustomStyle): void;
    clearStyle(): void;
    openButtonCustomStylePopup($event: Event, matButton: MatIconButton): void;
    private updateModel;
    private updatePreviewAppearance;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetButtonCustomStyleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetButtonCustomStyleComponent, "tb-widget-button-custom-style", never, { "disabled": { "alias": "disabled"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, {}, never, never, false, never>;
}
