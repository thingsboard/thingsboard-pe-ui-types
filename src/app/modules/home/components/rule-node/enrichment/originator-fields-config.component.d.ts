import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SvMapOption } from '@home/components/rule-node/rule-node-config.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class OriginatorFieldsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    originatorFieldsConfigForm: FormGroup;
    originatorFields: SvMapOption[];
    constructor(fb: FormBuilder, translate: TranslateService);
    protected configForm(): FormGroup;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OriginatorFieldsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OriginatorFieldsConfigComponent, "tb-enrichment-node-originator-fields-config", never, {}, {}, never, never, false, never>;
}
