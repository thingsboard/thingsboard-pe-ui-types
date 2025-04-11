import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { TimeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class AggregateLatestConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    aggregateLatestConfigForm: UntypedFormGroup;
    aggPeriodTimeUnits: TimeUnit[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateLatestConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregateLatestConfigComponent, "tb-analytics-node-aggregate-latest-config", never, {}, {}, never, never, false, never>;
}
