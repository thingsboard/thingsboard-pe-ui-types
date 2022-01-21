import { AfterViewInit, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
interface EntityListSelectModel {
    entityType: EntityType | AliasEntityType;
    ids: Array<string>;
}
export declare class EntityListSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    private entityService;
    translate: TranslateService;
    private fb;
    entityListSelectFormGroup: FormGroup;
    modelValue: EntityListSelectModel;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    useAliasEntityTypes: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    displayEntityTypeSelect: boolean;
    private readonly defaultEntityType;
    private propagateChange;
    constructor(store: Store<AppState>, entityService: EntityService, translate: TranslateService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<EntityId> | null): void;
    updateView(entityType: EntityType | AliasEntityType | null, entityIds: Array<string> | null): void;
    compareIds(ids1: Array<string> | null, ids2: Array<string> | null): boolean;
    toEntityIds(modelValue: EntityListSelectModel): Array<EntityId>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityListSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityListSelectComponent, "tb-entity-list-select", never, { "allowedEntityTypes": "allowedEntityTypes"; "useAliasEntityTypes": "useAliasEntityTypes"; "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
export {};
