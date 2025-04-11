import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class PushToEdgeConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    attributeScopes: string[];
    telemetryTypeTranslationsMap: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    pushToEdgeConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PushToEdgeConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PushToEdgeConfigComponent, "tb-action-node-push-to-edge-config", never, {}, {}, never, never, false, never>;
}
