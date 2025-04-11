import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DuplicateToGroupConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    isTypeSelected: boolean;
    duplicateToGroupConfigForm: FormGroup;
    entityGroupTypes: import("../../../../../shared/public-api").EntityType[];
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DuplicateToGroupConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DuplicateToGroupConfigComponent, "tb-transformation-node-duplicate-to-group-config", never, {}, {}, never, never, false, never>;
}
