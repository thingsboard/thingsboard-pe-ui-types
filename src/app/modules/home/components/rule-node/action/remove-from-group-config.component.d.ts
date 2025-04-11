import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RemoveFromGroupConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    removeFromGroupConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveFromGroupConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RemoveFromGroupConfigComponent, "tb-action-node-remove-from-group-config", never, {}, {}, never, never, false, never>;
}
