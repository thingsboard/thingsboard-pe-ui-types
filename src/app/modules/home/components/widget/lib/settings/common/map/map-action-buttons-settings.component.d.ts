import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { MapActionButtonSettings } from '@shared/models/widget/maps/map.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class MapActionButtonsSettingsComponent implements ControlValueAccessor, Validator {
    private fb;
    mapActionButtonsForm: import("@angular/forms").FormArray<import("@angular/forms").FormControl<MapActionButtonSettings>>;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(buttons?: MapActionButtonSettings[]): void;
    get dragEnabled(): boolean;
    buttonDrop(event: CdkDragDrop<string[]>): void;
    addButton(): void;
    removeButton(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapActionButtonsSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapActionButtonsSettingsComponent, "tb-map-action-button-settings", never, {}, {}, never, never, false, never>;
}
