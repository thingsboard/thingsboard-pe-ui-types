import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { AttributeScope } from '@app/shared/models/telemetry/telemetry.models';
import { ProcessingType } from '@home/components/rule-node/action/timeseries-config.models';
import { AttributeNodeConfiguration, AttributeNodeConfigurationForm } from '@home/components/rule-node/action/attributes-config.model';
import * as i0 from "@angular/core";
export declare class AttributesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    attributeScopeMap: typeof AttributeScope;
    attributeScopes: string[];
    telemetryTypeTranslationsMap: Map<import("@app/shared/models/telemetry/telemetry.models").TelemetryType, string>;
    ProcessingType: typeof ProcessingType;
    processingStrategies: ProcessingType[];
    ProcessingTypeTranslationMap: Map<ProcessingType, string>;
    maxDeduplicateTime: number;
    attributesConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected validatorTriggers(): string[];
    protected prepareInputConfig(config: AttributeNodeConfiguration): AttributeNodeConfigurationForm;
    protected prepareOutputConfig(config: AttributeNodeConfigurationForm): AttributeNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected updateValidators(emitEvent: boolean, _trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributesConfigComponent, "tb-action-node-attributes-config", never, {}, {}, never, never, false, never>;
}
