import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RuleChainOutputComponent extends RuleNodeConfigurationComponent {
    private fb;
    ruleChainOutputConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainOutputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainOutputComponent, "tb-flow-node-rule-chain-output-config", never, {}, {}, never, never, false, never>;
}
