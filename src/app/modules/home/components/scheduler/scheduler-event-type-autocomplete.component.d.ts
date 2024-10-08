import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import * as i0 from "@angular/core";
interface SchedulerEventTypeInfo {
    name: string;
    value: string;
}
export declare class SchedulerEventTypeAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit, Validator, OnDestroy {
    private store;
    translate: TranslateService;
    private userPermissionsService;
    private fb;
    schedulerEventTypeFormGroup: UntypedFormGroup;
    modelValue: string | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    schedulerEventTypeInput: ElementRef<HTMLInputElement>;
    filteredSchedulerEventTypes: Observable<Array<SchedulerEventTypeInfo>>;
    schedulerEventTypes: Array<SchedulerEventTypeInfo>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, userPermissionsService: UserPermissionsService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    validate(): ValidationErrors | null;
    onFocus(): void;
    updateView(value: SchedulerEventTypeInfo | string | null): void;
    displaySchedulerEventTypeFn(eventType?: SchedulerEventTypeInfo): string | undefined;
    fetchSchedulerEventTypes(searchText?: string): Observable<Array<SchedulerEventTypeInfo>>;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTypeAutocompleteComponent, "tb-scheduler-event-type-autocomplete", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "schedulerEventConfigTypes": { "alias": "schedulerEventConfigTypes"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
