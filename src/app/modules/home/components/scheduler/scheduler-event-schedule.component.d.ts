import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { SchedulerEventSchedule, SchedulerRepeatType, SchedulerTimeUnit } from '@shared/models/scheduler-event.models';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChipListbox } from '@angular/material/chips';
import * as i0 from "@angular/core";
interface SchedulerEventScheduleConfig {
    timezone: string;
    startDate?: Date;
    repeat?: boolean;
    repeatType?: SchedulerRepeatType;
    weeklyRepeat?: boolean[];
    endsOnDate?: Date;
    days?: number;
    weeks?: number;
    timerRepeat?: {
        repeatInterval?: number;
        timeUnit?: SchedulerTimeUnit;
    };
}
export declare class EndsOnDateErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: UntypedFormControl | null): boolean;
}
export declare class SchedulerEventScheduleComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, Validator {
    protected store: Store<AppState>;
    private fb;
    private cd;
    modelValue: SchedulerEventScheduleConfig | null;
    endsOnDateMatcher: EndsOnDateErrorStateMatcher;
    scheduleConfigFormGroup: UntypedFormGroup;
    schedulerRepeatTypes: string[];
    schedulerRepeatType: typeof SchedulerRepeatType;
    schedulerRepeatTypeTranslations: Map<SchedulerRepeatType, string>;
    schedulerTimeUnits: string[];
    schedulerTimeUnitTranslations: Map<SchedulerTimeUnit, string>;
    weekDays: import("@home/components/scheduler/scheduler-events.models").SchedulerWeekDay[];
    disabled: boolean;
    private lastAppliedTimezone;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    private endsOnDateValidator;
    weeklyRepeatControl(index: number): UntypedFormControl;
    onChipClicked(index: number, chipListBox: MatChipListbox): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    private updateEnabledState;
    writeValue(value: SchedulerEventSchedule | null): void;
    validate(control: AbstractControl): ValidationErrors | null;
    private toSchedulerEventScheduleConfig;
    private fromSchedulerEventScheduleConfig;
    private createDefaultSchedulerEventScheduleConfig;
    private createDefaultWeeklyRepeat;
    private updateModel;
    private dateFromUtcTime;
    private dateTimeToUtcTime;
    private dateToUtcTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventScheduleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventScheduleComponent, "tb-scheduler-event-schedule", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}
export {};
