import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipList } from '@angular/material/chips';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export declare class EntityGroupListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private store;
    translate: TranslateService;
    private entityService;
    private entityGroupService;
    private fb;
    entityGroupListFormGroup: FormGroup;
    modelValue: Array<string> | null;
    groupType: EntityType;
    private ownerIdValue;
    get ownerId(): EntityId;
    set ownerId(value: EntityId);
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityGroupInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    chipList: MatChipList;
    entityGroups: Array<BaseData<EntityId>>;
    filteredEntityGroups: Observable<Array<BaseData<EntityId>>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityService: EntityService, entityGroupService: EntityGroupService, fb: FormBuilder);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | null): void;
    reset(): void;
    add(entityGroup: BaseData<EntityId>): void;
    remove(entityGroup: BaseData<EntityId>): void;
    displayEntityGroupFn(entityGroup?: BaseData<EntityId>): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<BaseData<EntityId>>>;
    onFocus(): void;
    clear(value?: string): void;
    static ??fac: i0.????FactoryDeclaration<EntityGroupListComponent, never>;
    static ??cmp: i0.????ComponentDeclaration<EntityGroupListComponent, "tb-entity-group-list", never, { "groupType": "groupType"; "ownerId": "ownerId"; "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
