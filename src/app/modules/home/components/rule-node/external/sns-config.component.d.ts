import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SnsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    snsConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnsConfigComponent, "tb-external-node-sns-config", never, {}, {}, never, never, false, never>;
}
