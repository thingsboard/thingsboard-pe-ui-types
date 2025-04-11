import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DuplicateToGroupByNameConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    duplicateToGroupByNameConfigForm: UntypedFormGroup;
    entityGroupTypesList: import("../../../../../shared/public-api").EntityType[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected updateValidators(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DuplicateToGroupByNameConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DuplicateToGroupByNameConfigComponent, "tb-transformation-node-duplicate-to-group-by-name-config", never, {}, {}, never, never, false, never>;
}
