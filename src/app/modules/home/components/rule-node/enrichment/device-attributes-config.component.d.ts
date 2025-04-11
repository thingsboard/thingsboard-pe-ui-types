import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DeviceAttributesConfigComponent extends RuleNodeConfigurationComponent {
    translate: TranslateService;
    private fb;
    deviceAttributesConfigForm: FormGroup;
    constructor(translate: TranslateService, fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceAttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceAttributesConfigComponent, "tb-enrichment-node-device-attributes-config", never, {}, {}, never, never, false, never>;
}
