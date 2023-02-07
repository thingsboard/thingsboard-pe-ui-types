import { AfterViewInit, ComponentFactoryResolver, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { DynamicComponentFactoryService } from '@core/services/dynamic-component-factory.service';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import * as i0 from "@angular/core";
export declare class SchedulerEventTemplateConfigComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy {
    private store;
    private dynamicComponentFactoryService;
    private injector;
    private resolver;
    configContentContainer: ViewContainerRef;
    private configuration;
    disabled: boolean;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    schedulerEventType: string;
    private customSchedulerEventConfigFactory;
    private configComponentRef;
    private configComponent;
    private propagateChange;
    constructor(store: Store<AppState>, dynamicComponentFactoryService: DynamicComponentFactoryService, injector: Injector, resolver: ComponentFactoryResolver);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadTemplate;
    private resolveComponentFactory;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTemplateConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTemplateConfigComponent, "tb-scheduler-event-template-config", never, { "disabled": "disabled"; "schedulerEventConfigTypes": "schedulerEventConfigTypes"; "schedulerEventType": "schedulerEventType"; }, {}, never, never, false>;
}
