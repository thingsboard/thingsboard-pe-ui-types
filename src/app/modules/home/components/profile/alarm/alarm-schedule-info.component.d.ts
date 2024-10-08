import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AlarmSchedule } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class AlarmScheduleInfoComponent implements ControlValueAccessor, OnInit {
    private dialog;
    private translate;
    private cd;
    disabled: boolean;
    private modelValue;
    scheduleText: string;
    private propagateChange;
    constructor(dialog: MatDialog, translate: TranslateService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AlarmSchedule): void;
    private updateScheduleText;
    openScheduleDialog($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmScheduleInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmScheduleInfoComponent, "tb-alarm-schedule-info", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
