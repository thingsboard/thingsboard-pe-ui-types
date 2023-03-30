import { AfterViewInit, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipGrid } from '@angular/material/chips';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink } from '@shared/models/page/page-link';
import { EntityInfoData } from '@shared/models/entity.models';
import { PageData } from '@shared/models/page/page-data';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import * as i0 from "@angular/core";
export type CreateEntityGroupFunction = (groupType: EntityType, groupName?: string, ownerId?: EntityId) => Observable<EntityInfoData>;
export declare class EntityGroupListComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private store;
    translate: TranslateService;
    private entityGroupService;
    private fb;
    truncate: TruncatePipe;
    entityGroupListFormGroup: UntypedFormGroup;
    modelValue: Array<string> | null;
    groupType: EntityType;
    private ownerIdValue;
    get ownerId(): EntityId;
    set ownerId(value: EntityId);
    excludeGroupAll: boolean;
    labelText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    useGroupInfoValue: boolean;
    createGroupFunction: CreateEntityGroupFunction;
    disabled: boolean;
    entityGroupInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    chipList: MatChipGrid;
    entityGroups: Array<EntityInfoData>;
    filteredEntityGroups: Observable<Array<EntityInfoData>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityGroupService: EntityGroupService, fb: UntypedFormBuilder, truncate: TruncatePipe);
    updateValidators(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<string> | Array<EntityInfoData> | null): void;
    reset(): void;
    add(entityGroup: EntityInfoData): void;
    remove(entityGroup: EntityInfoData): void;
    updateView(): void;
    displayEntityGroupFn(entityGroup?: EntityInfoData): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<EntityInfoData>>;
    getEntityGroups(pageLink: PageLink): Observable<PageData<EntityInfoData>>;
    onFocus(): void;
    textIsNotEmpty(text: string): boolean;
    clear(value?: string): void;
    entityGroupEnter($event: KeyboardEvent): void;
    createEntityGroup($event: Event, groupName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupListComponent, "tb-entity-group-list", never, { "groupType": "groupType"; "ownerId": "ownerId"; "excludeGroupAll": "excludeGroupAll"; "labelText": "labelText"; "required": "required"; "useGroupInfoValue": "useGroupInfoValue"; "createGroupFunction": "createGroupFunction"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
