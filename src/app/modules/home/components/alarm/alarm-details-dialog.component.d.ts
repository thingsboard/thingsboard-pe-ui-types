import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { AlarmInfo, AlarmStatus } from '@app/shared/models/alarm.models';
import { AlarmService } from '@core/http/alarm.service';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface AlarmDetailsDialogData {
    alarmId: string;
    allowAcknowledgment: boolean;
    allowClear: boolean;
    displayDetails: boolean;
}
export declare class AlarmDetailsDialogComponent extends DialogComponent<AlarmDetailsDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private datePipe;
    private translate;
    data: AlarmDetailsDialogData;
    private alarmService;
    dialogRef: MatDialogRef<AlarmDetailsDialogComponent, boolean>;
    fb: FormBuilder;
    alarmFormGroup: FormGroup;
    allowAcknowledgment: boolean;
    allowClear: boolean;
    displayDetails: boolean;
    loadAlarmSubject: ReplaySubject<AlarmInfo>;
    alarm$: Observable<AlarmInfo>;
    alarmSeverityColorsMap: Map<import("@app/shared/models/alarm.models").AlarmSeverity, string>;
    alarmStatuses: typeof AlarmStatus;
    alarmUpdated: boolean;
    constructor(store: Store<AppState>, router: Router, datePipe: DatePipe, translate: TranslateService, data: AlarmDetailsDialogData, alarmService: AlarmService, dialogRef: MatDialogRef<AlarmDetailsDialogComponent, boolean>, fb: FormBuilder);
    loadAlarm(): void;
    loadAlarmFields(alarm: AlarmInfo): void;
    ngOnInit(): void;
    close(): void;
    acknowledge(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmDetailsDialogComponent, "tb-alarm-details-dialog", never, {}, {}, never, never>;
}
