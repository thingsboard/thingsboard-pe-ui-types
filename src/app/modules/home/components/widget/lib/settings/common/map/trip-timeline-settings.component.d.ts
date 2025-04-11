import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { WidgetService } from '@core/http/widget.service';
import { TripTimelineSettings } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class TripTimelineSettingsComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private widgetService;
    private destroyRef;
    settingsExpanded: boolean;
    functionScopeVariables: string[];
    disabled: boolean;
    private modelValue;
    private propagateChange;
    tripTimelineSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TripTimelineSettings): void;
    validate(c: UntypedFormControl): {
        tripTimelineSettings: {
            valid: boolean;
        };
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TripTimelineSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TripTimelineSettingsComponent, "tb-trip-timeline-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
