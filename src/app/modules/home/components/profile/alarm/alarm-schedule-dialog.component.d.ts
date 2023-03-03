import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { AlarmSchedule } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export interface AlarmScheduleDialogData {
    readonly: boolean;
    alarmSchedule: AlarmSchedule;
}
export declare class AlarmScheduleDialogComponent extends DialogComponent<AlarmScheduleDialogComponent, AlarmSchedule> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmScheduleDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AlarmScheduleDialogComponent, AlarmSchedule>;
    private fb;
    private utils;
    translate: TranslateService;
    readonly: boolean;
    alarmSchedule: AlarmSchedule;
    alarmScheduleFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AlarmScheduleDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AlarmScheduleDialogComponent, AlarmSchedule>, fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmScheduleDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmScheduleDialogComponent, "tb-alarm-schedule-dialog", never, {}, {}, never, never, false, never>;
}
