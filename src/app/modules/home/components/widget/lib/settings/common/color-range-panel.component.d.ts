import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { ColorRange } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ColorRangeSettingsComponent } from '@home/components/widget/lib/settings/common/color-range-settings.component';
import * as i0 from "@angular/core";
export declare class ColorRangePanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    colorRangeSettings: Array<ColorRange>;
    popover: TbPopoverComponent<ColorRangePanelComponent>;
    settingsComponents: ColorRangeSettingsComponent[];
    colorRangeApplied: EventEmitter<ColorRange[]>;
    colorRangeFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    copyColorSettings(comp: ColorRangeSettingsComponent): void;
    cancel(): void;
    applyColorRangeSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorRangePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorRangePanelComponent, "tb-color-range-panel", never, { "colorRangeSettings": { "alias": "colorRangeSettings"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "settingsComponents": { "alias": "settingsComponents"; "required": false; }; }, { "colorRangeApplied": "colorRangeApplied"; }, never, never, false, never>;
}
