import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SendRestApiCallReplyConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    sendRestApiCallReplyConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendRestApiCallReplyConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendRestApiCallReplyConfigComponent, "tb-action-node-send-rest-api-call-reply-config", never, {}, {}, never, never, false, never>;
}
