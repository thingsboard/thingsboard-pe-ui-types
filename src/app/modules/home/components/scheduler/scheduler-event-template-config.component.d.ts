import { AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractControl, AsyncValidator, ControlValueAccessor, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import * as i0 from "@angular/core";
export declare class SchedulerEventTemplateConfigComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy, AsyncValidator {
    private dynamicComponentFactoryService;
    configContentContainer: ViewContainerRef;
    private configuration;
    disabled: boolean;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    schedulerEventType: string;
    private customSchedulerEventComponentType;
    private configComponentRef;
    private configComponent;
    private configTemplate;
    private configComponent$;
    private propagateChange;
    constructor(dynamicComponentFactoryService: DynamicComponentFactoryService);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadTemplate;
    private resolveComponent;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    private updateModel;
    validate(control: AbstractControl): Observable<ValidationErrors | null>;
    private doValidate;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTemplateConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTemplateConfigComponent, "tb-scheduler-event-template-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "schedulerEventConfigTypes": { "alias": "schedulerEventConfigTypes"; "required": false; }; "schedulerEventType": { "alias": "schedulerEventType"; "required": false; }; }, {}, never, never, false, never>;
}
