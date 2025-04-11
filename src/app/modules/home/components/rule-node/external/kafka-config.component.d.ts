import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class KafkaConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    kafkaConfigForm: UntypedFormGroup;
    ackValues: string[];
    ToByteStandartCharsetTypesValues: string[];
    ToByteStandartCharsetTypeTranslationMap: Map<string, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KafkaConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KafkaConfigComponent, "tb-external-node-kafka-config", never, {}, {}, never, never, false, never>;
}
