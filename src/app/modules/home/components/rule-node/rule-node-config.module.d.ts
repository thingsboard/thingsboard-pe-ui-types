import { RuleChainService } from '@core/http/rule-chain.service';
import * as i0 from "@angular/core";
import * as i1 from "./empty-config.component";
import * as i2 from "@angular/common";
import * as i3 from "@shared/shared.module";
import * as i4 from "@home/components/rule-node/action/action-rule-node-config.module";
import * as i5 from "@home/components/rule-node/analytics/analytics-rule-node-config.module";
import * as i6 from "@home/components/rule-node/filter/filter-rule-node-config.module";
import * as i7 from "@home/components/rule-node/enrichment/enrichment-rule-node-core.module";
import * as i8 from "@home/components/rule-node/external/external-rule-node-config.module";
import * as i9 from "@home/components/rule-node/transformation/transformation-rule-node-config.module";
import * as i10 from "@home/components/rule-node/flow/flow-rule-node-config.module";
export declare class RuleNodeConfigModule {
    private ruleChainService;
    constructor(ruleChainService: RuleChainService);
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeConfigModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RuleNodeConfigModule, [typeof i1.EmptyConfigComponent], [typeof i2.CommonModule, typeof i3.SharedModule], [typeof i4.ActionRuleNodeConfigModule, typeof i5.AnalyticsRuleNodeConfigModule, typeof i6.FilterRuleNodeConfigModule, typeof i7.EnrichmentRuleNodeCoreModule, typeof i8.ExternalRuleNodeConfigModule, typeof i9.TransformationRuleNodeConfigModule, typeof i10.FlowRuleNodeConfigModule, typeof i1.EmptyConfigComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RuleNodeConfigModule>;
}
