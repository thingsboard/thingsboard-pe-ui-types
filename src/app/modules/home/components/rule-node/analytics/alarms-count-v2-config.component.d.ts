import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { TimeUnit } from '../rule-node-config.models';
import { EntityType } from '@app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class AlarmsCountV2ConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    alarmsCountConfigForm: UntypedFormGroup;
    timeUnits: string[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    propagationEntityTypes: EntityType[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmsCountV2ConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmsCountV2ConfigComponent, "tb-analytics-node-alarms-count-v2-config", never, {}, {}, never, never, false, never>;
}
