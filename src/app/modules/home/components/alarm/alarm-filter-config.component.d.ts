import { ElementRef, InjectionToken, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AlarmFilterConfig } from '@shared/models/query/query.models';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { MatChipInputEvent } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare const ALARM_FILTER_CONFIG_DATA: InjectionToken<any>;
export interface AlarmFilterConfigData {
    panelMode: boolean;
    userMode: boolean;
    alarmFilterConfig: AlarmFilterConfig;
}
export declare class AlarmFilterConfigComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private data;
    private overlayRef;
    private fb;
    private translate;
    private overlay;
    private nativeElement;
    private viewContainerRef;
    alarmFilterPanel: TemplateRef<any>;
    disabled: boolean;
    buttonMode: boolean;
    userMode: boolean;
    propagatedFilter: boolean;
    panelMode: boolean;
    readonly separatorKeysCodes: number[];
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    buttonDisplayValue: any;
    alarmFilterConfigForm: UntypedFormGroup;
    alarmFilterOverlayRef: OverlayRef;
    panelResult: AlarmFilterConfig;
    private alarmFilterConfig;
    private propagateChange;
    constructor(data: AlarmFilterConfigData | undefined, overlayRef: OverlayRef, fb: UntypedFormBuilder, translate: TranslateService, overlay: Overlay, nativeElement: ElementRef, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(alarmFilterConfig?: AlarmFilterConfig): void;
    private updateValidators;
    toggleAlarmFilterPanel($event: Event): void;
    cancel(): void;
    update(): void;
    alarmTypeList(): string[];
    removeAlarmType(type: string): void;
    addAlarmType(event: MatChipInputEvent): void;
    private updateAlarmConfigForm;
    private alarmConfigUpdated;
    private updateButtonDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmFilterConfigComponent, [{ optional: true; }, { optional: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmFilterConfigComponent, "tb-alarm-filter-config", never, { "disabled": "disabled"; "buttonMode": "buttonMode"; "userMode": "userMode"; "propagatedFilter": "propagatedFilter"; }, {}, never, never, false, never>;
}