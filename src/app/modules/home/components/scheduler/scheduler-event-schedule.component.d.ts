import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { SchedulerEventSchedule, SchedulerRepeatType, SchedulerTimeUnit } from '@shared/models/scheduler-event.models';
import { ErrorStateMatcher } from '@angular/material/core';
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
    isErrorState(control: FormControl | null): boolean;
}
export declare class SchedulerEventScheduleComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    modelValue: SchedulerEventScheduleConfig | null;
    endsOnDateMatcher: EndsOnDateErrorStateMatcher;
    scheduleConfigFormGroup: FormGroup;
    schedulerRepeatTypes: string[];
    schedulerRepeatType: typeof SchedulerRepeatType;
    schedulerRepeatTypeTranslations: Map<SchedulerRepeatType, string>;
    schedulerTimeUnits: string[];
    schedulerTimeUnitTranslations: Map<SchedulerTimeUnit, string>;
    disabled: boolean;
    private lastAppliedTimezone;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    private endsOnDateValidator;
    weeklyRepeatControl(index: number): FormControl;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    private updateEnabledState;
    writeValue(value: SchedulerEventSchedule | null): void;
    private toSchedulerEventScheduleConfig;
    private fromSchedulerEventScheduleConfig;
    private createDefaultSchedulerEventScheduleConfig;
    private createDefaultWeeklyRepeat;
    private updateModel;
    private dateFromUtcTime;
    private dateTimeToUtcTime;
    private dateToUtcTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventScheduleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventScheduleComponent, "tb-scheduler-event-schedule", never, { "disabled": "disabled"; }, {}, never, never>;
}
export {};
