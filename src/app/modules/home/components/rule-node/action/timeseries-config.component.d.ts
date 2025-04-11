import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { ProcessingType, TimeseriesNodeConfiguration, TimeseriesNodeConfigurationForm } from '@home/components/rule-node/action/timeseries-config.models';
import * as i0 from "@angular/core";
export declare class TimeseriesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    timeseriesConfigForm: FormGroup;
    ProcessingType: typeof ProcessingType;
    processingStrategies: ProcessingType[];
    ProcessingTypeTranslationMap: Map<ProcessingType, string>;
    maxDeduplicateTime: number;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected validatorTriggers(): string[];
    protected prepareInputConfig(config: TimeseriesNodeConfiguration): TimeseriesNodeConfigurationForm;
    protected prepareOutputConfig(config: TimeseriesNodeConfigurationForm): TimeseriesNodeConfiguration;
    protected onConfigurationSet(config: TimeseriesNodeConfigurationForm): void;
    protected updateValidators(emitEvent: boolean, _trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesConfigComponent, "tb-action-node-timeseries-config", never, {}, {}, never, never, false, never>;
}
