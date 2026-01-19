import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TimeUnit } from '@shared/models/time/time.models';
import { ScriptLanguage } from "@shared/models/rule-node.models";
import { CalculatedFieldArgument } from "@shared/models/calculated-field.models";
import { TbEditorCompleter } from "@shared/models/ace/completion.models";
import { AceHighlightRules } from "@shared/models/ace/ace.models";
import { ComplexOperation } from "@shared/models/query/query.models";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { AlarmRuleCondition, AlarmRuleConditionType, AlarmRuleExpressionType } from "@shared/models/alarm-rule.models";
import * as i0 from "@angular/core";
export interface CfAlarmRuleConditionDialogData {
    readonly: boolean;
    condition: AlarmRuleCondition;
    arguments?: Record<string, CalculatedFieldArgument>;
    testScript: (expression: string) => Observable<string>;
}
export declare class CfAlarmRuleConditionDialogComponent extends DialogComponent<CfAlarmRuleConditionDialogComponent, AlarmRuleCondition> {
    protected store: Store<AppState>;
    protected router: Router;
    data: CfAlarmRuleConditionDialogData;
    dialogRef: MatDialogRef<CfAlarmRuleConditionDialogComponent, AlarmRuleCondition>;
    private fb;
    private translate;
    AlarmRuleExpressionType: typeof AlarmRuleExpressionType;
    timeUnits: TimeUnit[];
    timeUnitTranslations: Map<import("@shared/models/time/time.models").FullTimeUnit, string>;
    alarmConditionTypes: AlarmRuleConditionType[];
    AlarmConditionType: typeof AlarmRuleConditionType;
    alarmConditionTypeTranslation: Map<AlarmRuleConditionType, string>;
    readonly: boolean;
    condition: AlarmRuleCondition;
    conditionFormGroup: import("@angular/forms").FormGroup<{
        expression: import("@angular/forms").FormGroup<{
            type: import("@angular/forms").FormControl<AlarmRuleExpressionType>;
            expression: import("@angular/forms").FormControl<string>;
            operation: import("@angular/forms").FormControl<ComplexOperation>;
            filters: import("@angular/forms").FormControl<any>;
        }>;
        type: import("@angular/forms").FormControl<AlarmRuleConditionType>;
        unit: import("@angular/forms").FormControl<TimeUnit>;
        value: import("@angular/forms").FormGroup<{
            staticValue: import("@angular/forms").FormControl<number>;
            dynamicValueArgument: import("@angular/forms").FormControl<string>;
        }>;
        count: import("@angular/forms").FormGroup<{
            staticValue: import("@angular/forms").FormControl<number>;
            dynamicValueArgument: import("@angular/forms").FormControl<string>;
        }>;
    }>;
    readonly scriptLanguage: typeof ScriptLanguage;
    defaultValuePlaceholder: string;
    defaultValueRequiredError: string;
    defaultValueRangeError: string;
    defaultValuePatternError: string;
    durationDynamicModeControl: import("@angular/forms").FormControl<boolean>;
    repeatingDynamicModeControl: import("@angular/forms").FormControl<boolean>;
    ComplexOperation: typeof ComplexOperation;
    complexOperationTranslationMap: Map<ComplexOperation, string>;
    specText: string;
    filtersValid: boolean;
    functionArgs: Array<string>;
    argumentsEditorCompleter: TbEditorCompleter;
    argumentsHighlightRules: AceHighlightRules;
    arguments: Record<string, CalculatedFieldArgument>;
    argumentsList: Array<string>;
    isNoData: boolean;
    constructor(store: Store<AppState>, router: Router, data: CfAlarmRuleConditionDialogData, dialogRef: MatDialogRef<CfAlarmRuleConditionDialogComponent, AlarmRuleCondition>, fb: FormBuilder, translate: TranslateService);
    updateStaticValueValidator(type: AlarmRuleConditionType, dynamicValue: boolean): void;
    updateExpressionTypeValidator(type: 'SIMPLE' | 'TBEL'): void;
    private checkIsNoData;
    private hasNoData;
    private updateValidators;
    private updateSpecText;
    cancel(): void;
    save(): void;
    onTestScript($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CfAlarmRuleConditionDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CfAlarmRuleConditionDialogComponent, "tb-cf-alarm-rule-condition-dialog", never, {}, {}, never, never, false, never>;
}
