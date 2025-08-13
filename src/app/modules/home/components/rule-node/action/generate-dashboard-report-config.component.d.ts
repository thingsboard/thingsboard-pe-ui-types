import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class GenerateDashboardReportConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    generateDashboardReportConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateDashboardReportConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateDashboardReportConfigComponent, "tb-action-node-generate-dashboard-report-config", never, {}, {}, never, never, false, never>;
}
