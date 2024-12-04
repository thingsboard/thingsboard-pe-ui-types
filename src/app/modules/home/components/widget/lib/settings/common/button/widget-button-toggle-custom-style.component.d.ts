import { ChangeDetectorRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatIconButton } from '@angular/material/button';
import { ButtonToggleAppearance, WidgetButtonToggleCustomStyle, WidgetButtonToggleState } from '@home/components/widget/lib/button/segmented-button-widget.models';
import * as i0 from "@angular/core";
export declare class WidgetButtonToggleCustomStyleComponent implements OnInit, OnChanges, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    disabled: boolean;
    value: boolean;
    appearance: ButtonToggleAppearance;
    borderRadius: string;
    autoScale: boolean;
    state: WidgetButtonToggleState;
    widgetButtonToggleState: typeof WidgetButtonToggleState;
    modelValue: WidgetButtonToggleCustomStyle;
    previewAppearance: ButtonToggleAppearance;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(_isDisabled: boolean): void;
    writeValue(value: WidgetButtonToggleCustomStyle): void;
    clearStyle(): void;
    openButtonCustomStylePopup($event: Event, matButton: MatIconButton): void;
    private updateModel;
    private updatePreviewAppearance;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetButtonToggleCustomStyleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetButtonToggleCustomStyleComponent, "tb-widget-button-toggle-custom-style", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, {}, never, never, false, never>;
}
