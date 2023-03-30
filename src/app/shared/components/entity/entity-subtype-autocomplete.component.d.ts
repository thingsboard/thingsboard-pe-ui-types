import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DeviceService } from '@core/http/device.service';
import { EntityType } from '@app/shared/models/entity-type.models';
import { BroadcastService } from '@app/core/services/broadcast.service';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { EdgeService } from '@core/http/edge.service';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class EntitySubTypeAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private store;
    private broadcast;
    translate: TranslateService;
    private deviceService;
    private assetService;
    private entityViewService;
    private edgeService;
    private fb;
    subTypeFormGroup: UntypedFormGroup;
    modelValue: string | null;
    entityType: EntityType;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    excludeSubTypes: Array<string>;
    appearance: MatFormFieldAppearance;
    subTypeInput: ElementRef;
    selectEntitySubtypeText: string;
    entitySubtypeText: string;
    entitySubtypeRequiredText: string;
    entitySubtypeMaxLength: string;
    filteredSubTypes: Observable<Array<string>>;
    subTypes: Observable<Array<string>>;
    private broadcastSubscription;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, broadcast: BroadcastService, translate: TranslateService, deviceService: DeviceService, assetService: AssetService, entityViewService: EntityViewService, edgeService: EdgeService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    updateView(value: string | null): void;
    displaySubTypeFn(subType?: string): string | undefined;
    fetchSubTypes(searchText?: string, strictMatch?: boolean): Observable<Array<string>>;
    getSubTypes(): Observable<Array<string>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitySubTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitySubTypeAutocompleteComponent, "tb-entity-subtype-autocomplete", never, { "entityType": "entityType"; "required": "required"; "disabled": "disabled"; "excludeSubTypes": "excludeSubTypes"; "appearance": "appearance"; }, {}, never, never, false, never>;
}
