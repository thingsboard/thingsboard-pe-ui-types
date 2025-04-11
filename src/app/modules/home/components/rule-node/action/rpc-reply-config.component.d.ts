import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RpcReplyConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    rpcReplyConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RpcReplyConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RpcReplyConfigComponent, "tb-action-node-rpc-reply-config", never, {}, {}, never, never, false, never>;
}
