import { AfterViewInit, NgZone, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { TimezoneInfo } from '@shared/models/time/time.models';
import { TimeService } from '@core/services/time.service';
import * as i0 from "@angular/core";
export declare class TimezoneSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private ngZone;
    private fb;
    private timeService;
    selectTimezoneFormGroup: UntypedFormGroup;
    modelValue: string | null;
    defaultTimezoneId: string;
    set defaultTimezone(timezone: string);
    displayLabel: boolean;
    subscriptSizing: SubscriptSizing;
    appearance: MatFormFieldAppearance;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    private userTimezoneByDefaultValue;
    get userTimezoneByDefault(): boolean;
    set userTimezoneByDefault(value: boolean);
    private localBrowserTimezonePlaceholderOnEmptyValue;
    get localBrowserTimezonePlaceholderOnEmpty(): boolean;
    set localBrowserTimezonePlaceholderOnEmpty(value: boolean);
    disabled: boolean;
    timezoneInputTrigger: MatAutocompleteTrigger;
    filteredTimezones: Observable<Array<TimezoneInfo>>;
    searchText: string;
    ignoreClosePanel: boolean;
    private dirty;
    private localBrowserTimezoneInfoPlaceholder;
    private timezones;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, ngZone: NgZone, fb: UntypedFormBuilder, timeService: TimeService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    onPanelClosed(): void;
    updateView(value: string | null): void;
    displayTimezoneFn(timezone?: TimezoneInfo): string | undefined;
    fetchTimezones(searchText?: string): Observable<Array<TimezoneInfo>>;
    clear(): void;
    private loadTimezones;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimezoneSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimezoneSelectComponent, "tb-timezone-select", never, { "defaultTimezone": { "alias": "defaultTimezone"; "required": false; }; "displayLabel": { "alias": "displayLabel"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "required": { "alias": "required"; "required": false; }; "userTimezoneByDefault": { "alias": "userTimezoneByDefault"; "required": false; }; "localBrowserTimezonePlaceholderOnEmpty": { "alias": "localBrowserTimezonePlaceholderOnEmpty"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
