import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DuplicateToRelatedConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    duplicateToRelatedConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DuplicateToRelatedConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DuplicateToRelatedConfigComponent, "tb-transformation-node-duplicate-to-related-config", never, {}, {}, never, never, false, never>;
}
