import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ImageMapSourceSettings, ImageSourceType } from '@shared/models/widget/maps/map.models';
import { DatasourceType, widgetType } from '@shared/models/widget.models';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class ImageMapSourceSettingsComponent implements OnInit, ControlValueAccessor, Validator {
    private fb;
    private destroyRef;
    ImageSourceType: typeof ImageSourceType;
    DatasourceType: typeof DatasourceType;
    widgetType: typeof widgetType;
    DataKeyType: typeof DataKeyType;
    disabled: boolean;
    context: MapSettingsContext;
    private modelValue;
    private propagateChange;
    imageMapSourceFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ImageMapSourceSettings): void;
    editKey(): void;
    validate(c: UntypedFormControl): {
        imageMapSource: {
            valid: boolean;
        };
    };
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageMapSourceSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageMapSourceSettingsComponent, "tb-image-map-source-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}
