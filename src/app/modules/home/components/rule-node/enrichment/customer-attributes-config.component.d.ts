import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { DataToFetch } from '@home/components/rule-node/rule-node-config.models';
import * as i0 from "@angular/core";
export declare class CustomerAttributesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    customerAttributesConfigForm: FormGroup;
    dataToFetch: typeof DataToFetch;
    dataToFetchTranslations: Map<DataToFetch, string>;
    fetchToData: any[];
    constructor(fb: FormBuilder, translate: TranslateService);
    protected configForm(): FormGroup;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    selectTranslation(latestTelemetryTranslation: string, attributesTranslation: string): string;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected readonly DataToFetch: typeof DataToFetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerAttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerAttributesConfigComponent, "tb-enrichment-node-customer-attributes-config", never, {}, {}, never, never, false, never>;
}
