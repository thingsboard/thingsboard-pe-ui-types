import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntitySearchDirection } from '@app/shared/models/relation.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class CheckRelationConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    checkRelationConfigForm: UntypedFormGroup;
    entitySearchDirection: Array<EntitySearchDirection>;
    entitySearchDirectionTranslationsMap: Map<EntitySearchDirection, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean, trigger: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckRelationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckRelationConfigComponent, "tb-filter-node-check-relation-config", never, {}, {}, never, never, false, never>;
}
