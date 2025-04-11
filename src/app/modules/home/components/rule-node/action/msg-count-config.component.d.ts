import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class MsgCountConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    msgCountConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MsgCountConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MsgCountConfigComponent, "tb-action-node-msg-count-config", never, {}, {}, never, never, false, never>;
}
