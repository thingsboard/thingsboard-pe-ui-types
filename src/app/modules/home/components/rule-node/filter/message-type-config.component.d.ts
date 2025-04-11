import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class MessageTypeConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    messageTypeConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageTypeConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageTypeConfigComponent, "tb-filter-node-message-type-config", never, {}, {}, never, never, false, never>;
}
