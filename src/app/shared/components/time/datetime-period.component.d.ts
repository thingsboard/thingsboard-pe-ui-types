import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FixedWindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class DatetimePeriodComponent implements OnInit, ControlValueAccessor {
    disabled: boolean;
    modelValue: FixedWindow;
    startDate: Date;
    endDate: Date;
    endTime: any;
    maxStartDate: Date;
    minEndDate: Date;
    maxEndDate: Date;
    changePending: boolean;
    private propagateChange;
    constructor();
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(datePeriod: FixedWindow): void;
    updateView(): void;
    updateMinMaxDates(): void;
    onStartDateChange(): void;
    onEndDateChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimePeriodComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatetimePeriodComponent, "tb-datetime-period", never, { "disabled": "disabled"; }, {}, never, never>;
}
