import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class SendRpcRequestComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    private fb;
    modelValue: SchedulerEventConfiguration | null;
    sendRpcRequestFormGroup: UntypedFormGroup;
    entityType: typeof EntityType;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendRpcRequestComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendRpcRequestComponent, "tb-send-rpc-request-event-config", never, { "disabled": "disabled"; }, {}, never, never, false>;
}
