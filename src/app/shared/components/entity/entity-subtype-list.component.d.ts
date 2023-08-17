import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInputEvent } from '@angular/material/chips';
import { AssetService } from '@core/http/asset.service';
import { DeviceService } from '@core/http/device.service';
import { EdgeService } from '@core/http/edge.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { BroadcastService } from '@core/services/broadcast.service';
import { FloatLabelType } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class EntitySubTypeListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    private broadcast;
    translate: TranslateService;
    private assetService;
    private deviceService;
    private entityViewService;
    private edgeService;
    private fb;
    entitySubtypeListFormGroup: FormGroup;
    modelValue: Array<string> | null;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    floatLabel: FloatLabelType;
    label: string;
    disabled: boolean;
    entityType: EntityType;
    emptyInputPlaceholder: string;
    filledInputPlaceholder: string;
    entitySubtypeInput: ElementRef<HTMLInputElement>;
    entitySubtypeAutocomplete: MatAutocomplete;
    chipList: MatChipGrid;
    entitySubtypeList: Array<string>;
    filteredEntitySubtypeList: Observable<Array<string>>;
    entitySubtypes: Observable<Array<string>>;
    private broadcastSubscription;
    placeholder: string;
    secondaryPlaceholder: string;
    noSubtypesMathingText: string;
    subtypeListEmptyText: string;
    separatorKeysCodes: number[];
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, broadcast: BroadcastService, translate: TranslateService, assetService: AssetService, deviceService: DeviceService, entityViewService: EntityViewService, edgeService: EdgeService, fb: FormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | null): void;
    private add;
    chipAdd(event: MatChipInputEvent): void;
    remove(entitySubtype: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    displayEntitySubtypeFn(entitySubtype?: string): string | undefined;
    fetchEntitySubtypes(searchText?: string): Observable<Array<string>>;
    getEntitySubtypes(): Observable<Array<string>>;
    onFocus(): void;
    clear(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitySubTypeListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitySubTypeListComponent, "tb-entity-subtype-list", never, { "required": "required"; "floatLabel": "floatLabel"; "label": "label"; "disabled": "disabled"; "entityType": "entityType"; "emptyInputPlaceholder": "emptyInputPlaceholder"; "filledInputPlaceholder": "filledInputPlaceholder"; }, {}, never, ["[matSuffix]"], false, never>;
}
