import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { FixedWindow } from '@shared/models/time/time.models';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class DatetimePeriodComponent implements ControlValueAccessor {
    private fb;
    disabled: boolean;
    subscriptSizing: SubscriptSizing;
    appearance: MatFormFieldAppearance;
    private modelValue;
    maxStartDate: Date;
    maxEndDate: Date;
    private maxStartDateTs;
    private minEndDateTs;
    private maxStartTs;
    private maxEndTs;
    private timeShiftMs;
    dateTimePeriodFormGroup: import("@angular/forms").FormGroup<{
        startDate: import("@angular/forms").FormControl<Date>;
        endDate: import("@angular/forms").FormControl<Date>;
    }>;
    private changePending;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(datePeriod: FixedWindow): void;
    private updateView;
    private updateMinMaxDates;
    private onStartDateChange;
    private onEndDateChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimePeriodComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatetimePeriodComponent, "tb-datetime-period", never, { "disabled": { "alias": "disabled"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, never, false, never>;
}
