import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CustomSchedulerEventType } from '@home/components/scheduler/scheduler-events.models';
import * as i0 from "@angular/core";
export declare function customSchedulerEventTypeValidator(control: AbstractControl): {
    customSchedulerEventType: boolean;
};
export declare class CustomSchedulerEventTypeComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private domSanitizer;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeCustomSchedulerEventType: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    customSchedulerEventTypeFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, domSanitizer: DomSanitizer, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CustomSchedulerEventType): void;
    customSchedulerEventTypeHtml(): SafeHtml;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSchedulerEventTypeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSchedulerEventTypeComponent, "tb-custom-scheduler-event-type", never, { "disabled": "disabled"; "expanded": "expanded"; }, { "removeCustomSchedulerEventType": "removeCustomSchedulerEventType"; }, never, never, false>;
}
