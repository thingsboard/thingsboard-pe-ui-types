import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class MsgDelayConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    msgDelayConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MsgDelayConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MsgDelayConfigComponent, "tb-action-node-msg-delay-config", never, {}, {}, never, never, false, never>;
}
