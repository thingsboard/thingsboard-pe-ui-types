import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { QueueService } from '@core/http/queue.service';
import { ServiceType } from '@shared/models/queue.models';
import * as i0 from "@angular/core";
interface Queue {
    queueName: string;
}
export declare class QueueTypeListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    translate: TranslateService;
    private queueService;
    private fb;
    queueFormGroup: FormGroup;
    modelValue: Queue | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    queueType: ServiceType;
    queueInput: ElementRef<HTMLInputElement>;
    filteredQueues: Observable<Array<Queue>>;
    queues: Observable<Array<Queue>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, queueService: QueueService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    updateView(value: Queue | null): void;
    displayQueueFn(queue?: Queue): string | undefined;
    fetchQueues(searchText?: string): Observable<Array<Queue>>;
    getQueues(): Observable<Array<Queue>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueTypeListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QueueTypeListComponent, "tb-queue-type-list", never, { "required": "required"; "disabled": "disabled"; "queueType": "queueType"; }, {}, never, never>;
}
export {};
