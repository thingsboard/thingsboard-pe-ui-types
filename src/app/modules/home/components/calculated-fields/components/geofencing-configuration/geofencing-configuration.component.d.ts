import { OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { CalculatedFieldGeofencing, CalculatedFieldGeofencingConfiguration, CalculatedFieldOutput } from '@shared/models/calculated-field.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityFilter } from '@shared/models/query/query.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class GeofencingConfigurationComponent implements ControlValueAccessor, Validator, OnChanges {
    private fb;
    private store;
    entityId: EntityId;
    tenantId: string;
    entityName: string;
    ownerId: EntityId;
    readonly: boolean;
    isEditValue: boolean;
    readonly minAllowedScheduledUpdateIntervalInSecForCF: number;
    readonly DataKeyType: typeof DataKeyType;
    geofencingConfiguration: import("@angular/forms").FormGroup<{
        entityCoordinates: import("@angular/forms").FormGroup<{
            latitudeKeyName: import("@angular/forms").FormControl<null>;
            longitudeKeyName: import("@angular/forms").FormControl<null>;
        }>;
        zoneGroups: import("@angular/forms").FormControl<Record<string, CalculatedFieldGeofencing>>;
        scheduledUpdateEnabled: import("@angular/forms").FormControl<boolean>;
        scheduledUpdateInterval: import("@angular/forms").FormControl<number>;
        output: import("@angular/forms").FormControl<CalculatedFieldOutput>;
    }>;
    currentEntityFilter: EntityFilter;
    isRelatedEntity: boolean;
    private propagateChange;
    constructor(fb: FormBuilder, store: Store<AppState>);
    ngOnChanges(changes: SimpleChanges): void;
    validate(): ValidationErrors | null;
    writeValue(config: CalculatedFieldGeofencingConfiguration): void;
    registerOnChange(fn: (config: CalculatedFieldGeofencingConfiguration) => void): void;
    registerOnTouched(_: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updatedModel;
    private checkScheduledUpdateEnabled;
    private checkRelatedEntity;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeofencingConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeofencingConfigurationComponent, "tb-geofencing-configuration", never, { "entityId": { "alias": "entityId"; "required": true; }; "tenantId": { "alias": "tenantId"; "required": true; }; "entityName": { "alias": "entityName"; "required": true; }; "ownerId": { "alias": "ownerId"; "required": true; }; "readonly": { "alias": "readonly"; "required": false; }; "isEditValue": { "alias": "isEditValue"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_isEditValue: unknown;
}
