import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { AlarmRuleSchedule } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import * as i0 from "@angular/core";
export interface AlarmRuleScheduleDialogData {
    readonly: boolean;
    alarmSchedule: AlarmRuleSchedule;
    arguments: Record<string, CalculatedFieldArgument>;
}
export declare class CfAlarmScheduleDialogComponent extends DialogComponent<CfAlarmScheduleDialogComponent, AlarmRuleSchedule> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleScheduleDialogData;
    dialogRef: MatDialogRef<CfAlarmScheduleDialogComponent, AlarmRuleSchedule>;
    private fb;
    readonly: boolean;
    alarmSchedule: AlarmRuleSchedule;
    arguments: Record<string, CalculatedFieldArgument>;
    alarmScheduleControl: import("@angular/forms").FormControl<AlarmRuleSchedule>;
    dynamicModeControl: import("@angular/forms").FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleScheduleDialogData, dialogRef: MatDialogRef<CfAlarmScheduleDialogComponent, AlarmRuleSchedule>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CfAlarmScheduleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CfAlarmScheduleDialogComponent, "tb-cf-alarm-schedule-dialog", never, {}, {}, never, never, false, never>;
}
