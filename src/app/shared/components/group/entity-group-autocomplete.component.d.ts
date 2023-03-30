import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityGroupService } from '@core/http/entity-group.service';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityInfoData } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class EntityGroupAutocompleteComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private store;
    translate: TranslateService;
    private entityGroupService;
    private fb;
    selectEntityGroupFormGroup: UntypedFormGroup;
    modelValue: string | null;
    groupType: EntityType;
    private ownerIdValue;
    get ownerId(): EntityId;
    set ownerId(value: EntityId | null);
    excludeGroupIds: Array<string>;
    excludeGroupAll: boolean;
    placeholderText: string;
    notFoundText: string;
    requiredText: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    entityGroupLoaded: EventEmitter<EntityInfoData>;
    entityGroupInput: ElementRef<HTMLInputElement>;
    filteredEntityGroups: Observable<Array<EntityInfoData>>;
    allEntityGroups: Observable<Array<EntityInfoData>>;
    searchText: string;
    private pristine;
    private cleanFilteredEntityGroups;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, entityGroupService: EntityGroupService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    getCurrentEntityGroup(): EntityInfoData | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | EntityInfoData | null): void;
    onFocus(): void;
    reset(keepEntityGroup?: boolean): void;
    updateView(value: string | null, entityGroup: EntityInfoData | string | null): void;
    displayEntityGroupFn(entityGroup?: EntityInfoData): string | undefined;
    fetchEntityGroups(searchText?: string): Observable<Array<EntityInfoData>>;
    getEntityGroups(pageLink: PageLink): Observable<PageData<EntityInfoData>>;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupAutocompleteComponent, "tb-entity-group-autocomplete", never, { "groupType": "groupType"; "ownerId": "ownerId"; "excludeGroupIds": "excludeGroupIds"; "excludeGroupAll": "excludeGroupAll"; "placeholderText": "placeholderText"; "notFoundText": "notFoundText"; "requiredText": "requiredText"; "required": "required"; "disabled": "disabled"; }, { "entityGroupLoaded": "entityGroupLoaded"; }, never, never, false, never>;
}
