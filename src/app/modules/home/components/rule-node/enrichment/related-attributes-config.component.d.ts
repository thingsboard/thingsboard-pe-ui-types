import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { DataToFetch, SvMapOption } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class RelatedAttributesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    relatedAttributesConfigForm: FormGroup;
    protected readonly DataToFetch: typeof DataToFetch;
    msgMetadataLabelTranslations: Map<DataToFetch, string>;
    originatorFields: SvMapOption[];
    fetchToData: any[];
    constructor(fb: FormBuilder, translate: TranslateService);
    protected configForm(): FormGroup;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    selectTranslation(latestTelemetryTranslation: string, attributesTranslation: string): string;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelatedAttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelatedAttributesConfigComponent, "tb-enrichment-node-related-attributes-config", never, {}, {}, never, never, false, never>;
}
