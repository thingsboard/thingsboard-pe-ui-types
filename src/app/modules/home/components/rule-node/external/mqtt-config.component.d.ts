import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class MqttConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    mqttConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected updateValidators(emitEvent: boolean): void;
    protected validatorTriggers(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttConfigComponent, "tb-external-node-mqtt-config", never, {}, {}, never, never, false, never>;
}
