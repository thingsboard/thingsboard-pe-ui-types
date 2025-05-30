import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { ObjectLwM2M } from './lwm2m-profile-config.models';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
export declare class Lwm2mObjectListComponent implements ControlValueAccessor, OnInit, Validator {
    private deviceProfileService;
    private fb;
    private requiredValue;
    private dirty;
    lwm2mListFormGroup: UntypedFormGroup;
    objectsList: Array<ObjectLwM2M>;
    filteredObjectsList: Observable<Array<ObjectLwM2M>>;
    disabled: boolean;
    searchText: string;
    get required(): boolean;
    set required(value: boolean);
    addList: EventEmitter<any>;
    removeList: EventEmitter<any>;
    objectInput: ElementRef<HTMLInputElement>;
    matAutocompleteTrigger: MatAutocompleteTrigger;
    private propagateChange;
    constructor(deviceProfileService: DeviceProfileService, fb: UntypedFormBuilder);
    private updateValidators;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ObjectLwM2M[]): void;
    validate(): ValidationErrors | null;
    private add;
    remove: (object: ObjectLwM2M) => void;
    displayObjectLwm2mFn: (object?: ObjectLwM2M) => string;
    private fetchListObjects;
    onFocus: () => void;
    textIsNotEmpty(text: string): boolean;
    private clear;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObjectListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObjectListComponent, "tb-profile-lwm2m-object-list", never, { "required": { "alias": "required"; "required": false; }; }, { "addList": "addList"; "removeList": "removeList"; }, never, never, false, never>;
}
