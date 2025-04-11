import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RabbitMqConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    rabbitMqConfigForm: UntypedFormGroup;
    messageProperties: string[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RabbitMqConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RabbitMqConfigComponent, "tb-external-node-rabbit-mq-config", never, {}, {}, never, never, false, never>;
}
