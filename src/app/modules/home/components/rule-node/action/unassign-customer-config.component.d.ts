import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class UnassignCustomerConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    unassignCustomerConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnassignCustomerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnassignCustomerConfigComponent, "tb-action-node-un-assign-to-customer-config", never, {}, {}, never, never, false, never>;
}
