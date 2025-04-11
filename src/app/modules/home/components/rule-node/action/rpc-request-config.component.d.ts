import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RpcRequestConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    rpcRequestConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RpcRequestConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RpcRequestConfigComponent, "tb-action-node-rpc-request-config", never, {}, {}, never, never, false, never>;
}
