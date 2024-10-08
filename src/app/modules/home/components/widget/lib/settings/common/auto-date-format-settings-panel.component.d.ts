import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { AutoDateFormatSettings, FormatTimeUnit } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class AutoDateFormatSettingsPanelComponent extends PageComponent implements OnInit {
    private date;
    private fb;
    protected store: Store<AppState>;
    formatTimeUnits: FormatTimeUnit[];
    formatTimeUnitTranslations: Map<FormatTimeUnit, string>;
    autoDateFormatSettings: AutoDateFormatSettings;
    defaultValues: AutoDateFormatSettings;
    popover: TbPopoverComponent<AutoDateFormatSettingsPanelComponent>;
    autoDateFormatSettingsApplied: EventEmitter<AutoDateFormatSettings>;
    autoDateFormatFormGroup: UntypedFormGroup;
    previewText: {
        [unit in FormatTimeUnit]: string;
    };
    constructor(date: DatePipe, fb: UntypedFormBuilder, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyAutoDateFormatSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoDateFormatSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoDateFormatSettingsPanelComponent, "tb-auto-date-format-settings-panel", never, { "autoDateFormatSettings": { "alias": "autoDateFormatSettings"; "required": false; }; "defaultValues": { "alias": "defaultValues"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "autoDateFormatSettingsApplied": "autoDateFormatSettingsApplied"; }, never, never, false, never>;
}
