import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { QuickTimeInterval } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class QuickTimeIntervalComponent implements OnInit, ControlValueAccessor {
    private allIntervals;
    modelValue: QuickTimeInterval;
    timeIntervalTranslationMap: Map<QuickTimeInterval, string>;
    rendered: boolean;
    disabled: boolean;
    onlyCurrentInterval: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickTimeIntervalComponent, "tb-quick-time-interval", never, { "disabled": "disabled"; "onlyCurrentInterval": "onlyCurrentInterval"; }, {}, never, never, false>;
}
