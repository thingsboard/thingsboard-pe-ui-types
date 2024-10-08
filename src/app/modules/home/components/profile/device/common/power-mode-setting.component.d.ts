import { OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PowerMode } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import * as i0 from "@angular/core";
export declare class PowerModeSettingComponent implements OnInit, OnDestroy {
    powerMods: PowerMode[];
    powerModeTranslationMap: Map<PowerMode, string>;
    private destroy$;
    parentForm: UntypedFormGroup;
    isDeviceSetting: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private disablePSKMode;
    private disableEdrxMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<PowerModeSettingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PowerModeSettingComponent, "tb-power-mode-settings", never, { "parentForm": { "alias": "parentForm"; "required": false; }; "isDeviceSetting": { "alias": "isDeviceSetting"; "required": false; }; }, {}, never, never, false, never>;
}
