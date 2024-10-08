import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { RelationEntityTypeFilter } from '@shared/models/relation.models';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class RelationFiltersComponent extends PageComponent implements ControlValueAccessor, OnInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    enableNotOption: boolean;
    relationFiltersFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get relationFiltersFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    writeValue(filters: Array<RelationEntityTypeFilter>): void;
    removeFilter(index: number): void;
    addFilter(): void;
    private createRelationFilterFormGroup;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelationFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelationFiltersComponent, "tb-relation-filters", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "enableNotOption": { "alias": "enableNotOption"; "required": false; }; }, {}, never, never, false, never>;
}
