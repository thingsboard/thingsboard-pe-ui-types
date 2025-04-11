import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SendEmailConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    sendEmailConfigForm: UntypedFormGroup;
    smtpProtocols: string[];
    tlsVersions: string[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendEmailConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendEmailConfigComponent, "tb-external-node-send-email-config", never, {}, {}, never, never, false, never>;
}
