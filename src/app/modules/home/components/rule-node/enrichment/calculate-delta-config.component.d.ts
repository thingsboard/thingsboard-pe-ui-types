import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class CalculateDeltaConfigComponent extends RuleNodeConfigurationComponent {
    translate: TranslateService;
    private fb;
    calculateDeltaConfigForm: FormGroup;
    separatorKeysCodes: number[];
    constructor(translate: TranslateService, fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected updateValidators(emitEvent: boolean): void;
    protected validatorTriggers(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculateDeltaConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculateDeltaConfigComponent, "tb-enrichment-node-calculate-delta-config", never, {}, {}, never, never, false, never>;
}
