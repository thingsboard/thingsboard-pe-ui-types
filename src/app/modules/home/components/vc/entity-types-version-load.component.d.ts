import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntityTypeVersionLoadConfig } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { MatCheckbox } from '@angular/material/checkbox/checkbox';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class EntityTypesVersionLoadComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    entityTypesVersionLoadFormGroup: FormGroup;
    entityTypes: typeof EntityType;
    overrideEntityTypeTranslationsMap: Map<EntityType | import("@shared/models/entity-type.models").AliasEntityType, string>;
    constructor(store: Store<AppState>, translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: {
        [entityType: string]: EntityTypeVersionLoadConfig;
    } | undefined): void;
    validate(c: FormControl): {
        entityTypes: {
            valid: boolean;
        };
    };
    private prepareEntityTypesFormArray;
    private createEntityTypeControl;
    entityTypesFormGroupArray(): FormGroup[];
    entityTypesFormGroupExpanded(entityTypeControl: AbstractControl): boolean;
    trackByEntityType(index: number, entityTypeControl: AbstractControl): any;
    removeEntityType(index: number): void;
    addEnabled(): boolean;
    addEntityType(): void;
    removeAll(): void;
    entityTypeText(entityTypeControl: AbstractControl): string;
    allowedEntityTypes(entityTypeControl?: AbstractControl): Array<EntityType>;
    onRemoveOtherEntities(removeOtherEntitiesCheckbox: MatCheckbox, entityTypeControl: AbstractControl, $event: Event): void;
    isGroupEntityType(entityType: EntityType): boolean;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypesVersionLoadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTypesVersionLoadComponent, "tb-entity-types-version-load", never, { "disabled": "disabled"; }, {}, never, never>;
}
