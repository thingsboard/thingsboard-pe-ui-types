import { OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { MapItemTooltips, MapItemType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class MapItemTooltipsComponent implements ControlValueAccessor, OnChanges {
    private fd;
    mapItemType: MapItemType;
    tooltipsForm: FormGroup;
    MapItemType: typeof MapItemType;
    readonly mapItemTooltipsDefaultTranslate: Required<MapItemTooltips>;
    private modelValue;
    private propagateChange;
    constructor(fd: FormBuilder);
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: MapItemTooltips): void;
    private updatedValidators;
    private updatedModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapItemTooltipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapItemTooltipsComponent, "tb-map-item-tooltips", never, { "mapItemType": { "alias": "mapItemType"; "required": true; }; }, {}, never, never, false, never>;
}
