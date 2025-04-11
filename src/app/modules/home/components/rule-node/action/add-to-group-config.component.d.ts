import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class AddToGroupConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    addToGroupConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddToGroupConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddToGroupConfigComponent, "tb-action-node-add-to-group-config", never, {}, {}, never, never, false, never>;
}
