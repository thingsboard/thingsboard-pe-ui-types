import { DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { AdditionalMapDataSourceSettings } from '@shared/models/widget/maps/map.models';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import * as i0 from "@angular/core";
export declare class AdditionalMapDataSourcesComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    disabled: boolean;
    context: MapSettingsContext;
    dataSourcesFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AdditionalMapDataSourceSettings[] | undefined): void;
    validate(c: UntypedFormControl): {
        dataSources: {
            valid: boolean;
        };
    };
    dataSourcesFormArray(): UntypedFormArray;
    trackByDataSource(index: number, dataSourceControl: AbstractControl): any;
    removeDataSource(index: number): void;
    addDataSource(): void;
    private prepareDataSourcesFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdditionalMapDataSourcesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdditionalMapDataSourcesComponent, "tb-additional-map-data-sources", never, { "disabled": { "alias": "disabled"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}
