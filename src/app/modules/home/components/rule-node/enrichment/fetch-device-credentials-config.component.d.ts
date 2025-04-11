import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class FetchDeviceCredentialsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    fetchDeviceCredentialsConfigForm: FormGroup;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FetchDeviceCredentialsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FetchDeviceCredentialsConfigComponent, "tb-enrichment-node-fetch-device-credentials-config", never, {}, {}, never, never, false, never>;
}
