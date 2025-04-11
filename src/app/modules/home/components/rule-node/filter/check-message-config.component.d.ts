import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class CheckMessageConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    checkMessageConfigForm: FormGroup;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    private atLeastOne;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    get touchedValidationControl(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckMessageConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckMessageConfigComponent, "tb-filter-node-check-message-config", never, {}, {}, never, never, false, never>;
}
