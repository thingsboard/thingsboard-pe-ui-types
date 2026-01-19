import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { ComplexOperation, EntityKeyValueType } from '@shared/models/query/query.models';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { AlarmRuleFilter } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import { FormControlsFrom } from "@shared/models/tenant.model";
import * as i0 from "@angular/core";
export interface AlarmRuleFilterDialogData {
    filter: AlarmRuleFilter;
    isAdd: boolean;
    arguments: Record<string, CalculatedFieldArgument>;
    usedArguments: Array<string>;
    readonly: boolean;
}
export declare class AlarmRuleFilterDialogComponent extends DialogComponent<AlarmRuleFilterDialogComponent, AlarmRuleFilter> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleFilterDialogData;
    dialogRef: MatDialogRef<AlarmRuleFilterDialogComponent, AlarmRuleFilter>;
    private dialogs;
    private translate;
    private fb;
    private destroyRef;
    filterFormGroup: FormGroup<FormControlsFrom<AlarmRuleFilter>>;
    entityKeyValueTypesKeys: string[];
    entityKeyValueTypeEnum: typeof EntityKeyValueType;
    entityKeyValueTypes: Map<EntityKeyValueType, import("@shared/models/query/query.models").EntityKeyValueTypeData>;
    complexOperationTranslationMap: Map<ComplexOperation, string>;
    predicatesValid: boolean;
    ComplexOperation: typeof ComplexOperation;
    arguments: Record<string, CalculatedFieldArgument>;
    argumentsList: Array<string>;
    readonly: boolean;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleFilterDialogData, dialogRef: MatDialogRef<AlarmRuleFilterDialogComponent, AlarmRuleFilter>, dialogs: DialogService, translate: TranslateService, fb: FormBuilder, destroyRef: DestroyRef);
    argumentInUse(argument: string): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleFilterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleFilterDialogComponent, "tb-alarm-rule-filter-dialog", never, {}, {}, never, never, false, never>;
}
