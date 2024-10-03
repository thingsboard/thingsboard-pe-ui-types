import { EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ScadaSymbolProperty, ScadaSymbolPropertyType } from '@home/components/widget/lib/scada/scada-symbol.models';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class ScadaSymbolPropertyPanelComponent implements OnInit {
    private fb;
    ValueType: typeof ValueType;
    ScadaSymbolPropertyType: typeof ScadaSymbolPropertyType;
    scadaSymbolPropertyTypes: ScadaSymbolPropertyType[];
    scadaSymbolPropertyTypeTranslations: Map<ScadaSymbolPropertyType, string>;
    scadaSymbolPropertyRowClasses: string[];
    scadaSymbolPropertyFieldClasses: string[];
    isAdd: boolean;
    property: ScadaSymbolProperty;
    booleanPropertyIds: string[];
    disabled: boolean;
    popover: TbPopoverComponent<ScadaSymbolPropertyPanelComponent>;
    propertySettingsApplied: EventEmitter<ScadaSymbolProperty>;
    panelTitle: string;
    propertyFormGroup: UntypedFormGroup;
    private propertyType;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    applyPropertySettings(): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolPropertyPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolPropertyPanelComponent, "tb-scada-symbol-property-panel", never, { "isAdd": "isAdd"; "property": "property"; "booleanPropertyIds": "booleanPropertyIds"; "disabled": "disabled"; "popover": "popover"; }, { "propertySettingsApplied": "propertySettingsApplied"; }, never, never, false, never>;
}
