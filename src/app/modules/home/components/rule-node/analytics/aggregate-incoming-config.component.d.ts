import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { AggIntervalType, AggMathFunction, IntervalPersistPolicy, StatePersistPolicy, TimeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class AggregateIncomingConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    aggregateIncomingConfigForm: UntypedFormGroup;
    aggPeriodTimeUnits: TimeUnit[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    mathFunctions: string[];
    mathFunctionsTranslationMap: Map<AggMathFunction, string>;
    aggIntervalType: typeof AggIntervalType;
    aggIntervalTypes: string[];
    aggIntervalTypesTranslationMap: Map<AggIntervalType, string>;
    intervalPersistPolicies: string[];
    intervalPersistPolicyTranslationMap: Map<IntervalPersistPolicy, string>;
    statePersistPolicies: string[];
    statePersistPolicyTranslationMap: Map<StatePersistPolicy, string>;
    StatePersistPolicy: typeof StatePersistPolicy;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected prepareOutputConfig(): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateIncomingConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregateIncomingConfigComponent, "tb-analytics-node-aggregate-incoming-config", never, {}, {}, never, never, false, never>;
}
