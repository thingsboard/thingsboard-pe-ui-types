import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { ComplexOperation, EntityKeyValueType } from '@shared/models/query/query.models';
import { AlarmRuleFilterPredicate, ComplexAlarmRuleFilterPredicate } from "@shared/models/alarm-rule.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import * as i0 from "@angular/core";
export interface AlarmRuleComplexFilterPredicateDialogData {
    complexPredicate: ComplexAlarmRuleFilterPredicate;
    isAdd: boolean;
    valueType: EntityKeyValueType;
    arguments: Record<string, CalculatedFieldArgument>;
    readonly: boolean;
    argumentInUse: string;
}
export declare class AlarmRuleComplexFilterPredicateDialogComponent extends DialogComponent<AlarmRuleComplexFilterPredicateDialogComponent, ComplexAlarmRuleFilterPredicate> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleComplexFilterPredicateDialogData;
    dialogRef: MatDialogRef<AlarmRuleComplexFilterPredicateDialogComponent, ComplexAlarmRuleFilterPredicate>;
    private fb;
    complexFilterFormGroup: import("@angular/forms").FormGroup<{
        operation: import("@angular/forms").FormControl<ComplexOperation>;
        predicates: import("@angular/forms").FormControl<AlarmRuleFilterPredicate[]>;
    }>;
    EntityKeyValueType: typeof EntityKeyValueType;
    complexOperationEnum: typeof ComplexOperation;
    complexOperationTranslations: Map<ComplexOperation, string>;
    isAdd: boolean;
    arguments: Record<string, CalculatedFieldArgument>;
    readonly: boolean;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleComplexFilterPredicateDialogData, dialogRef: MatDialogRef<AlarmRuleComplexFilterPredicateDialogComponent, ComplexAlarmRuleFilterPredicate>, fb: FormBuilder);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleComplexFilterPredicateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleComplexFilterPredicateDialogComponent, "tb-alarm-rule-complex-filter-predicate-dialog", never, {}, {}, never, never, false, never>;
}
