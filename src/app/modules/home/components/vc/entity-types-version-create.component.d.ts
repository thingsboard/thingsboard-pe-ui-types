import { DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntityTypeVersionCreateConfig, SyncStrategy } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class EntityTypesVersionCreateComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    private destroyRef;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    entityTypesVersionCreateFormGroup: UntypedFormGroup;
    syncStrategies: SyncStrategy[];
    syncStrategyTranslations: Map<SyncStrategy, string>;
    entityTypes: typeof EntityType;
    entityTypesWithoutRelatedData: Set<EntityType | import("@shared/models/entity-type.models").AliasEntityType>;
    loading: boolean;
    overrideEntityTypeTranslationsMap: Map<EntityType | import("@shared/models/entity-type.models").AliasEntityType, string>;
    readonly typesWithCalculatedFields: Set<EntityType | import("@shared/models/entity-type.models").AliasEntityType>;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: {
        [entityType: string]: EntityTypeVersionCreateConfig;
    } | undefined): void;
    validate(c: UntypedFormControl): {
        entityTypes: {
            valid: boolean;
        };
    };
    private prepareEntityTypesFormArray;
    private createEntityTypeControl;
    private updateEntityTypeValidators;
    entityTypesFormGroupArray(): UntypedFormGroup[];
    entityTypesFormGroupExpanded(entityTypeControl: AbstractControl): boolean;
    trackByEntityType(index: number, entityTypeControl: AbstractControl): any;
    removeEntityType(index: number): void;
    addEnabled(): boolean;
    addEntityType(): void;
    removeAll(): void;
    entityTypeText(entityTypeControl: AbstractControl): string;
    allowedEntityTypes(entityTypeControl?: AbstractControl): Array<EntityType>;
    isGroupEntityType(entityType: EntityType): boolean;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypesVersionCreateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTypesVersionCreateComponent, "tb-entity-types-version-create", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
