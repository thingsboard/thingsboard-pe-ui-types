import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class EmptyConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    emptyConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyConfigComponent, "tb-node-empty-config", never, {}, {}, never, never, false, never>;
}
