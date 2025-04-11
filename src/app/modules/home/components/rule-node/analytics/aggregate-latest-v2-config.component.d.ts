import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { EntitySearchDirection } from '@shared/models/relation.models';
import * as i0 from "@angular/core";
export declare class AggregateLatestV2ConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    aggregateLatestV2ConfigForm: UntypedFormGroup;
    directionTypes: string[];
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateLatestV2ConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregateLatestV2ConfigComponent, "tb-analytics-node-aggregate-latest-v2-config", never, {}, {}, never, never, false, never>;
}
