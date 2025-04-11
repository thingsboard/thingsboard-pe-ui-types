import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { DataToFetch } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class TenantAttributesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    tenantAttributesConfigForm: FormGroup;
    fetchToData: any[];
    constructor(fb: FormBuilder, translate: TranslateService);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    selectTranslation(latestTelemetryTranslation: string, attributesTranslation: string): string;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected readonly DataToFetch: typeof DataToFetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantAttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantAttributesConfigComponent, "tb-enrichment-node-tenant-attributes-config", never, {}, {}, never, never, false, never>;
}
