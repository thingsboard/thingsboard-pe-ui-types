import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { DateFormatSettings } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class DateFormatSettingsPanelComponent extends PageComponent implements OnInit {
    private date;
    protected store: Store<AppState>;
    dateFormat: DateFormatSettings;
    popover: TbPopoverComponent<DateFormatSettingsPanelComponent>;
    dateFormatApplied: EventEmitter<DateFormatSettings>;
    dateFormatFormControl: UntypedFormControl;
    previewText: string;
    constructor(date: DatePipe, store: Store<AppState>);
    ngOnInit(): void;
    cancel(): void;
    applyDateFormat(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFormatSettingsPanelComponent, "tb-date-format-settings-panel", never, { "dateFormat": { "alias": "dateFormat"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "dateFormatApplied": "dateFormatApplied"; }, never, never, false, never>;
}
