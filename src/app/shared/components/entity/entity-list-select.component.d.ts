import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { EntityId } from '@shared/models/id/entity-id';
import { Operation } from '@shared/models/security.models';
import * as i0 from "@angular/core";
interface EntityListSelectModel {
    entityType: EntityType | AliasEntityType;
    ids: Array<string>;
}
export declare class EntityListSelectComponent implements ControlValueAccessor, OnInit {
    private entityService;
    private fb;
    private destroyRef;
    entityListSelectFormGroup: UntypedFormGroup;
    modelValue: EntityListSelectModel;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    useAliasEntityTypes: boolean;
    operation: Operation;
    required: boolean;
    disabled: boolean;
    inlineField: boolean;
    filterAllowedEntityTypes: boolean;
    predefinedEntityType: EntityType | AliasEntityType;
    additionEntityTypes: {
        [key in string]: string;
    };
    displayEntityTypeSelect: boolean;
    private defaultEntityType;
    private propagateChange;
    constructor(entityService: EntityService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Array<EntityId> | null): void;
    private updateView;
    private compareIds;
    private toEntityIds;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityListSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityListSelectComponent, "tb-entity-list-select", never, { "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "useAliasEntityTypes": { "alias": "useAliasEntityTypes"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "inlineField": { "alias": "inlineField"; "required": false; }; "filterAllowedEntityTypes": { "alias": "filterAllowedEntityTypes"; "required": false; }; "predefinedEntityType": { "alias": "predefinedEntityType"; "required": false; }; "additionEntityTypes": { "alias": "additionEntityTypes"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_required: unknown;
    static ngAcceptInputType_inlineField: unknown;
    static ngAcceptInputType_filterAllowedEntityTypes: unknown;
}
export {};
