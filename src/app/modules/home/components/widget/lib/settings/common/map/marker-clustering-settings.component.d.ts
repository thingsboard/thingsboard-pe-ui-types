import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { WidgetService } from '@core/http/widget.service';
import { MarkerClusteringSettings } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class MarkerClusteringSettingsComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private widgetService;
    private destroyRef;
    settingsExpanded: boolean;
    functionScopeVariables: string[];
    disabled: boolean;
    private modelValue;
    private propagateChange;
    clusteringSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MarkerClusteringSettings): void;
    validate(c: UntypedFormControl): {
        markerClustering: {
            valid: boolean;
        };
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkerClusteringSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MarkerClusteringSettingsComponent, "tb-marker-clustering-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
