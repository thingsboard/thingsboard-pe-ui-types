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
    static ɵcmp: i0.ɵɵComponentDeclaration<TimezonePanelComponent, "tb-timezone-panel", never, { "timezone": { "alias": "timezone"; "required": false; }; "userTimezoneByDefault": { "alias": "userTimezoneByDefault"; "required": false; }; "localBrowserTimezonePlaceholderOnEmpty": { "alias": "localBrowserTimezonePlaceholderOnEmpty"; "required": false; }; "defaultTimezone": { "alias": "defaultTimezone"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
