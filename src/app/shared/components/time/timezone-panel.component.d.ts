import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export interface TimezoneSelectionResult {
    timezone: string | null;
}
export declare class TimezonePanelComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    fb: FormBuilder;
    timezone: string | null;
    userTimezoneByDefault: boolean;
    localBrowserTimezonePlaceholderOnEmpty: boolean;
    defaultTimezone: string;
    onClose: (result: TimezoneSelectionResult | null) => void;
    popoverComponent: TbPopoverComponent;
    timezoneForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    ngOnInit(): void;
    update(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezonePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimezonePanelComponent, "tb-timezone-panel", never, { "timezone": "timezone"; "userTimezoneByDefault": "userTimezoneByDefault"; "localBrowserTimezonePlaceholderOnEmpty": "localBrowserTimezonePlaceholderOnEmpty"; "defaultTimezone": "defaultTimezone"; "onClose": "onClose"; "popoverComponent": "popoverComponent"; }, {}, never, never, false, never>;
}
