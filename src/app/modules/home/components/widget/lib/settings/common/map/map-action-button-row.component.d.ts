import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { MapActionButtonSettings } from '@shared/models/widget/maps/map.models';
import { WidgetAction, WidgetActionType, widgetType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class MapActionButtonRowComponent implements ControlValueAccessor, Validator {
    private fb;
    buttonRemoved: EventEmitter<any>;
    mapActionButton: FormGroup<{
        label: import("@angular/forms").FormControl<string>;
        icon: import("@angular/forms").FormControl<string>;
        color: import("@angular/forms").FormControl<string>;
        action: import("@angular/forms").FormControl<WidgetAction>;
    }>;
    additionalWidgetActionTypes: WidgetActionType[];
    readonly widgetType: typeof widgetType;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: MapActionButtonSettings): void;
    private validateButtonConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapActionButtonRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapActionButtonRowComponent, "tb-map-action-button-row", never, {}, { "buttonRemoved": "buttonRemoved"; }, never, never, false, never>;
}
