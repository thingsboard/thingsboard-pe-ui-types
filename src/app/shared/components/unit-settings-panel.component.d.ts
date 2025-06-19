import { EventEmitter, OnInit } from '@angular/core';
import { AllMeasures, TbUnit, UnitSystem } from '@shared/models/unit.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { FormBuilder } from '@angular/forms';
import { UnitService } from '@core/services/unit.service';
import * as i0 from "@angular/core";
export declare class UnitSettingsPanelComponent implements OnInit {
    private popover;
    private fb;
    private unitService;
    unit: TbUnit;
    required: boolean;
    disabled: boolean;
    unitSettingsApplied: EventEmitter<TbUnit>;
    tagFilter: string;
    measure: AllMeasures;
    UnitSystem: typeof UnitSystem;
    targetMeasure: AllMeasures;
    unitSettingForm: import("@angular/forms").FormGroup<{
        from: import("@angular/forms").FormControl<string>;
        convertUnit: import("@angular/forms").FormControl<boolean>;
        METRIC: import("@angular/forms").FormControl<string>;
        IMPERIAL: import("@angular/forms").FormControl<string>;
        HYBRID: import("@angular/forms").FormControl<string>;
    }>;
    constructor(popover: TbPopoverComponent<UnitSettingsPanelComponent>, fb: FormBuilder, unitService: UnitService);
    ngOnInit(): void;
    clearUnit(): void;
    cancel(): void;
    applyUnitSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnitSettingsPanelComponent, "tb-covert-unit-settings-panel", never, { "unit": { "alias": "unit"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tagFilter": { "alias": "tagFilter"; "required": false; }; "measure": { "alias": "measure"; "required": false; }; }, { "unitSettingsApplied": "unitSettingsApplied"; }, never, never, false, never>;
}
