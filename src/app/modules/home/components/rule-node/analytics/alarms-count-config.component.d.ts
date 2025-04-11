import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { TimeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class AlarmsCountConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    alarmsCountConfigForm: UntypedFormGroup;
    aggPeriodTimeUnits: TimeUnit[];
    timeUnits: string[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmsCountConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmsCountConfigComponent, "tb-analytics-node-alarms-count-config", never, {}, {}, never, never, false, never>;
}
