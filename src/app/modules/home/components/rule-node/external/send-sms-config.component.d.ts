import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SendSmsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    sendSmsConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendSmsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendSmsConfigComponent, "tb-external-node-send-sms-config", never, {}, {}, never, never, false, never>;
}
