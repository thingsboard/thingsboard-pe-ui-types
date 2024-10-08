import { OnInit, QueryList } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ScadaSymbolProperty } from '@home/components/widget/lib/scada/scada-symbol.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ScadaSymbolPropertyRowComponent } from '@home/pages/scada-symbol/metadata-components/scada-symbol-property-row.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ScadaSymbolPropertiesComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private translate;
    styleDisplay: string;
    styleOverflow: string;
    propertyRows: QueryList<ScadaSymbolPropertyRowComponent>;
    disabled: boolean;
    booleanPropertyIds: string[];
    propertiesFormGroup: UntypedFormGroup;
    errorText: string;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolProperty[] | undefined): void;
    validate(c: UntypedFormControl): {
        properties: {
            valid: boolean;
        };
    };
    propertyIdUnique(id: string, index: number): boolean;
    propertyDrop(event: CdkDragDrop<string[]>): void;
    propertiesFormArray(): UntypedFormArray;
    trackByProperty(index: number, propertyControl: AbstractControl): any;
    removeProperty(index: number, emitEvent?: boolean): void;
    addProperty(): void;
    private preparePropertiesFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolPropertiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolPropertiesComponent, "tb-scada-symbol-metadata-properties", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
