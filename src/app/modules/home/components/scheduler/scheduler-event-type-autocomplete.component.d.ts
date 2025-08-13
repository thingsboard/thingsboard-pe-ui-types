import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
interface SchedulerEventTypeInfo {
    name: string;
    value: string;
}
export declare class SchedulerEventTypeAutocompleteComponent implements ControlValueAccessor, OnInit, Validator {
    private translate;
    private fb;
    schedulerEventTypeFormGroup: FormGroup;
    required: boolean;
    disabled: boolean;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    label: any;
    placeholder: any;
    appearance: MatFormFieldAppearance;
    schedulerEventTypeInput: ElementRef<HTMLInputElement>;
    filteredSchedulerEventTypes: Observable<Array<SchedulerEventTypeInfo>>;
    searchText: string;
    private dirty;
    private schedulerEventTypes;
    private modelValue;
    private propagateChange;
    constructor(translate: TranslateService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    validate(): ValidationErrors | null;
    onFocus(): void;
    private updateView;
    displaySchedulerEventTypeFn(eventType?: SchedulerEventTypeInfo): string | undefined;
    private fetchSchedulerEventTypes;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTypeAutocompleteComponent, "tb-scheduler-event-type-autocomplete", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "schedulerEventConfigTypes": { "alias": "schedulerEventConfigTypes"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
