import { AggLatestMapping } from './aggregate-latest-mapping.models';
import { OnInit } from '@angular/core';
import { AttributeScope, DialogComponent, LatestTelemetry, ScriptLanguage } from '@shared/public-api';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/public-api';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { AggMathFunction } from '@home/components/rule-node/rule-node-config.models';
import * as i0 from "@angular/core";
export interface AggregateLatestMappingDialogData {
    isAdd: boolean;
    mapping?: AggLatestMapping;
    tbelFilterFunctionOnly: boolean;
}
export declare class AggregateLatestMappingDialogComponent extends DialogComponent<AggregateLatestMappingDialogComponent, AggLatestMapping> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AggregateLatestMappingDialogData;
    dialogRef: MatDialogRef<AggregateLatestMappingDialogComponent, AggLatestMapping>;
    fb: UntypedFormBuilder;
    latestTelemetry: typeof LatestTelemetry;
    attributeScope: typeof AttributeScope;
    attributeScopes: string[];
    telemetryTypeTranslationMap: Map<import("@shared/public-api").TelemetryType, string>;
    mathFunctions: string[];
    mathFunctionsTranslationMap: Map<AggMathFunction, string>;
    separatorKeysCodes: number[];
    aggLatestMappingFormGroup: UntypedFormGroup;
    isAdd: boolean;
    mapping: AggLatestMapping;
    filterEntities: boolean;
    tbelFilterFunctionOnly: boolean;
    tbelEnabled: boolean;
    scriptLanguage: typeof ScriptLanguage;
    constructor(store: Store<AppState>, router: Router, data: AggregateLatestMappingDialogData, dialogRef: MatDialogRef<AggregateLatestMappingDialogComponent, AggLatestMapping>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    filterEntitiesChange(): void;
    removeKey(key: string, keysField: string): void;
    addKey(event: MatChipInputEvent, keysField: string): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateLatestMappingDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregateLatestMappingDialogComponent, "tb-agg-latest-mapping-dialog", never, {}, {}, never, never, false, never>;
}
