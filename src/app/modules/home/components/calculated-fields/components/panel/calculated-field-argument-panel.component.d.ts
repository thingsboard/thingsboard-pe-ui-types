import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ArgumentEntityType, ArgumentType, CalculatedFieldArgumentValue, CalculatedFieldType } from '@shared/models/calculated-field.models';
import { EntityType } from '@shared/models/entity-type.models';
import { AttributeScope, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DatasourceType } from '@shared/models/widget.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityFilter } from '@shared/models/query/query.models';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import { EntityAutocompleteComponent } from '@shared/components/entity/entity-autocomplete.component';
import * as i0 from "@angular/core";
export declare class CalculatedFieldArgumentPanelComponent implements OnInit, AfterViewInit {
    private fb;
    private cd;
    private popover;
    private store;
    buttonTitle: string;
    argument: CalculatedFieldArgumentValue;
    entityId: EntityId;
    tenantId: string;
    entityName: string;
    calculatedFieldType: CalculatedFieldType;
    usedArgumentNames: string[];
    entityAutocomplete: EntityAutocompleteComponent;
    argumentsDataApplied: import("@angular/core").OutputEmitterRef<CalculatedFieldArgumentValue>;
    readonly maxDataPointsPerRollingArg: number;
    readonly defaultLimit: number;
    argumentFormGroup: FormGroup<{
        argumentName: FormControl<string>;
        refEntityId: FormGroup<{
            entityType: FormControl<ArgumentEntityType>;
            id: FormControl<string>;
        }>;
        refEntityKey: FormGroup<{
            type: FormControl<ArgumentType>;
            key: FormControl<string>;
            scope: FormControl<AttributeScope>;
        }>;
        defaultValue: FormControl<string>;
        limit: FormControl<number>;
        timeWindow: FormControl<number>;
    }>;
    argumentTypes: ArgumentType[];
    entityFilter: EntityFilter;
    entityNameSubject: BehaviorSubject<string>;
    readonly argumentEntityTypes: ArgumentEntityType[];
    readonly ArgumentEntityTypeTranslations: Map<ArgumentEntityType, string>;
    readonly ArgumentType: typeof ArgumentType;
    readonly DataKeyType: typeof DataKeyType;
    readonly EntityType: typeof EntityType;
    readonly datasourceType: typeof DatasourceType;
    readonly ArgumentTypeTranslations: Map<ArgumentType, string>;
    readonly AttributeScope: typeof AttributeScope;
    readonly ArgumentEntityType: typeof ArgumentEntityType;
    readonly ArgumentEntityTypeParamsMap: Map<ArgumentEntityType, import("@shared/models/calculated-field.models").ArgumentEntityTypeParams>;
    private currentEntityFilter;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, popover: TbPopoverComponent<CalculatedFieldArgumentPanelComponent>, store: Store<AppState>);
    get entityType(): ArgumentEntityType;
    get refEntityIdFormGroup(): FormGroup;
    get refEntityKeyFormGroup(): FormGroup;
    get enableAttributeScopeSelection(): boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    saveArgument(): void;
    cancel(): void;
    private toggleByEntityKeyType;
    private updateEntityFilter;
    private observeEntityFilterChanges;
    private observeEntityTypeChanges;
    private uniqNameRequired;
    private observeEntityKeyChanges;
    private setInitialEntityKeyType;
    private forbiddenArgumentNameValidator;
    private observeUpdatePosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldArgumentPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldArgumentPanelComponent, "tb-calculated-field-argument-panel", never, { "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "argument": { "alias": "argument"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; "tenantId": { "alias": "tenantId"; "required": false; }; "entityName": { "alias": "entityName"; "required": false; }; "calculatedFieldType": { "alias": "calculatedFieldType"; "required": false; }; "usedArgumentNames": { "alias": "usedArgumentNames"; "required": false; }; }, { "argumentsDataApplied": "argumentsDataApplied"; }, never, never, false, never>;
}
