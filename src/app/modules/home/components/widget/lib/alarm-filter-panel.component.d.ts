import { InjectionToken } from '@angular/core';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { OverlayRef } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare const ALARM_FILTER_PANEL_DATA: InjectionToken<any>;
export interface AlarmFilterPanelData {
    statusList: AlarmSearchStatus[];
    severityList: AlarmSeverity[];
    typeList: string[];
}
export declare class AlarmFilterPanelComponent {
    data: AlarmFilterPanelData;
    overlayRef: OverlayRef;
    private fb;
    readonly separatorKeysCodes: number[];
    alarmFilterFormGroup: UntypedFormGroup;
    result: AlarmFilterPanelData;
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    constructor(data: AlarmFilterPanelData, overlayRef: OverlayRef, fb: UntypedFormBuilder);
    alarmTypeList(): string[];
    removeAlarmType(type: string): void;
    addAlarmType(event: MatChipInputEvent): void;
    update(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmFilterPanelComponent, "tb-alarm-filter-panel", never, {}, {}, never, never, false>;
}
