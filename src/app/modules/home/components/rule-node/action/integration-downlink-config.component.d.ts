import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class IntegrationDownlinkConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    integrationDownlinkConfigForm: UntypedFormGroup;
    entityType: typeof EntityType;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationDownlinkConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationDownlinkConfigComponent, "tb-action-node-integration-downlink-config", never, {}, {}, never, never, false, never>;
}
