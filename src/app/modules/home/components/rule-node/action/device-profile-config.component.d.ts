import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    deviceProfile: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileConfigComponent, "tb-action-node-device-profile-config", never, {}, {}, never, never, false, never>;
}
