import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class AssignCustomerConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    assignCustomerConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssignCustomerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssignCustomerConfigComponent, "tb-action-node-assign-to-customer-config", never, {}, {}, never, never, false, never>;
}
