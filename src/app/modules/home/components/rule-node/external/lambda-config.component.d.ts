import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class LambdaConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    lambdaConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LambdaConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LambdaConfigComponent, "tb-external-node-lambda-config", never, {}, {}, never, never, false, never>;
}
