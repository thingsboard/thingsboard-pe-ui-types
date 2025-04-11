import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class ToEmailConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    toEmailConfigForm: FormGroup;
    mailBodyTypes: {
        name: string;
        description: string;
        value: string;
    }[];
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected updateValidators(emitEvent: boolean): void;
    protected validatorTriggers(): string[];
    getBodyTypeName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToEmailConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToEmailConfigComponent, "tb-transformation-node-to-email-config", never, {}, {}, never, never, false, never>;
}
