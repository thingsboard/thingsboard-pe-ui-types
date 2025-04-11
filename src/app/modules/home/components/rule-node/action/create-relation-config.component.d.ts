import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { EntitySearchDirection } from '@app/shared/models/relation.models';
import { EntityType } from '@app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class CreateRelationConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    directionTypes: string[];
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    entityType: typeof EntityType;
    entityTypeNamePatternTranslation: Map<EntityType, string>;
    allowedEntityTypes: EntityType[];
    createRelationConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateRelationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateRelationConfigComponent, "tb-action-node-create-relation-config", never, {}, {}, never, never, false, never>;
}
