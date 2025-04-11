import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SaveToCustomTableConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    saveToCustomTableConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveToCustomTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaveToCustomTableConfigComponent, "tb-action-node-custom-table-config", never, {}, {}, never, never, false, never>;
}
