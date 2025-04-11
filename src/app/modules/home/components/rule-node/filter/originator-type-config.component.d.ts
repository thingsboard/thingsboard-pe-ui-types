import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { EntityType } from '@app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class OriginatorTypeConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    originatorTypeConfigForm: UntypedFormGroup;
    allowedEntityTypes: EntityType[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OriginatorTypeConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OriginatorTypeConfigComponent, "tb-filter-node-originator-type-config", never, {}, {}, never, never, false, never>;
}
