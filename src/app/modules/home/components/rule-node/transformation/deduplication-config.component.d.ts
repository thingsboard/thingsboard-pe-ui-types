import { FormBuilder, FormGroup } from '@angular/forms';
import { FetchMode } from '@home/components/rule-node/rule-node-config.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DeduplicationConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    deduplicationConfigForm: FormGroup;
    deduplicationStrategie: typeof FetchMode;
    deduplicationStrategies: string[];
    deduplicationStrategiesTranslations: Map<FetchMode, string>;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected updateValidators(emitEvent: boolean): void;
    protected validatorTriggers(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DeduplicationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeduplicationConfigComponent, "tb-transformation-node-deduplication-config", never, {}, {}, never, never, false, never>;
}
