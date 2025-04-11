import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { SqsQueueType } from '@home/components/rule-node/rule-node-config.models';
import * as i0 from "@angular/core";
export declare class SqsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    sqsConfigForm: UntypedFormGroup;
    sqsQueueType: typeof SqsQueueType;
    sqsQueueTypes: string[];
    sqsQueueTypeTranslationsMap: Map<SqsQueueType, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SqsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SqsConfigComponent, "tb-external-node-sqs-config", never, {}, {}, never, never, false, never>;
}
