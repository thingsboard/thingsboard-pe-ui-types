import { DestroyRef, OnInit } from '@angular/core';
import { AlarmStatus, PageComponent } from '@shared/public-api';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class AlarmStatusSelectComponent extends PageComponent implements OnInit, ControlValueAccessor {
    private fb;
    private destroyRef;
    alarmStatusGroup: FormGroup;
    private propagateChange;
    readonly alarmStatus: typeof AlarmStatus;
    readonly alarmStatusTranslations: Map<AlarmStatus, string>;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    writeValue(value: Array<AlarmStatus>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmStatusSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmStatusSelectComponent, "tb-alarm-status-select", never, {}, {}, never, never, false, never>;
}
