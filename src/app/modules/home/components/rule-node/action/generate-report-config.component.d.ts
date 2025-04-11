import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class GenerateReportConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    generateReportConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateReportConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateReportConfigComponent, "tb-action-node-generate-report-config", never, {}, {}, never, never, false, never>;
}
