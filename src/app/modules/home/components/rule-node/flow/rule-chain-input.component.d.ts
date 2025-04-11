import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class RuleChainInputComponent extends RuleNodeConfigurationComponent {
    private fb;
    entityType: typeof EntityType;
    ruleChainInputConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleChainInputComponent, "tb-flow-node-rule-chain-input-config", never, {}, {}, never, never, false, never>;
}
