import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { AzureIotHubCredentialsType } from '@home/components/rule-node/rule-node-config.models';
import { MqttVersion } from '@shared/models/mqtt.models';
import * as i0 from "@angular/core";
export declare class AzureIotHubConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    azureIotHubConfigForm: UntypedFormGroup;
    allAzureIotHubCredentialsTypes: AzureIotHubCredentialsType[];
    azureIotHubCredentialsTypeTranslationsMap: Map<AzureIotHubCredentialsType, string>;
    MqttVersion: typeof MqttVersion;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureIotHubConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureIotHubConfigComponent, "tb-external-node-azure-iot-hub-config", never, {}, {}, never, never, false, never>;
}
