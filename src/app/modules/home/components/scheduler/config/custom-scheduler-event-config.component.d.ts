import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AfterViewInit, DoCheck, OnInit, QueryList } from '@angular/core';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { AbstractControl, ControlValueAccessor, NgForm, ValidationErrors, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomSchedulerEventConfigComponent extends PageComponent implements OnInit, AfterViewInit, DoCheck, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    forms: QueryList<NgForm>;
    configuration: SchedulerEventConfiguration;
    private configurationSnapshot;
    disabled: boolean;
    [key: string]: any;
    private propagateChange;
    constructor(store: Store<AppState>);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    private updateFormsDisabledState;
    validate(_control: AbstractControl): ValidationErrors | null;
    private doValidate;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSchedulerEventConfigComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CustomSchedulerEventConfigComponent, never, never, {}, {}, never, never, false, never>;
}
