import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { WidgetService } from '@core/http/widget.service';
import { DataLayerPatternSettings, DataLayerPatternType, DataLayerTooltipSettings } from '@shared/models/widget/maps/map.models';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import * as i0 from "@angular/core";
export declare class DataLayerPatternSettingsComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private widgetService;
    private destroyRef;
    DataLayerPatternType: typeof DataLayerPatternType;
    dataLayerTooltipTriggers: import("@shared/models/widget/maps/map.models").DataLayerTooltipTrigger[];
    dataLayerTooltipTriggerTranslationMap: Map<import("@shared/models/widget/maps/map.models").DataLayerTooltipTrigger, string>;
    settingsExpanded: boolean;
    functionScopeVariables: string[];
    disabled: boolean;
    patternType: 'label' | 'tooltip';
    helpId: string;
    patternTitle: string;
    hasTooltipOffset: boolean;
    expand: boolean;
    context: MapSettingsContext;
    private modelValue;
    private propagateChange;
    patternSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataLayerPatternSettings | DataLayerTooltipSettings): void;
    validate(c: UntypedFormControl): {
        [x: string]: {
            valid: boolean;
        };
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataLayerPatternSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataLayerPatternSettingsComponent, "tb-data-layer-pattern-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "patternType": { "alias": "patternType"; "required": false; }; "helpId": { "alias": "helpId"; "required": false; }; "patternTitle": { "alias": "patternTitle"; "required": false; }; "hasTooltipOffset": { "alias": "hasTooltipOffset"; "required": false; }; "expand": { "alias": "expand"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}
