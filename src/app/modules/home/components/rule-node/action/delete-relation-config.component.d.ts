import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityType } from '@app/shared/models/entity-type.models';
import { EntitySearchDirection } from '@app/shared/models/relation.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class DeleteRelationConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    directionTypes: string[];
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    entityTypeNamePatternTranslation: Map<EntityType, string>;
    entityType: typeof EntityType;
    allowedEntityTypes: EntityType[];
    deleteRelationConfigForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteRelationConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeleteRelationConfigComponent, "tb-action-node-delete-relation-config", never, {}, {}, never, never, false, never>;
}
