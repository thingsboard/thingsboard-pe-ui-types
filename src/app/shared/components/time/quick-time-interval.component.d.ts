import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { QuickTimeInterval } from '@shared/models/time/time.models';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class QuickTimeIntervalComponent implements OnInit, ControlValueAccessor {
    private allIntervals;
    modelValue: QuickTimeInterval;
    timeIntervalTranslationMap: Map<QuickTimeInterval, string>;
    rendered: boolean;
    displayLabel: boolean;
    disabled: boolean;
    onlyCurrentInterval: boolean;
    subscriptSizing: SubscriptSizing;
    appearance: MatFormFieldAppearance;
    private propagateChange;
    constructor();
    get intervals(): QuickTimeInterval[];
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(interval: QuickTimeInterval): void;
    onIntervalChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickTimeIntervalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickTimeIntervalComponent, "tb-quick-time-interval", never, { "displayLabel": { "alias": "displayLabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "onlyCurrentInterval": { "alias": "onlyCurrentInterval"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, never, false, never>;
}
