import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageType, RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DeviceStateConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    deviceState: FormGroup;
    messageTypeNames: Map<MessageType, string>;
    eventOptions: MessageType[];
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceStateConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceStateConfigComponent, "tb-action-node-device-state-config", never, {}, {}, never, never, false, never>;
}
