import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class PubSubConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    pubSubConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PubSubConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PubSubConfigComponent, "tb-external-node-pub-sub-config", never, {}, {}, never, never, false, never>;
}
