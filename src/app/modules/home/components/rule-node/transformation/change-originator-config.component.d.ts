import { FormBuilder, FormGroup } from '@angular/forms';
import { OriginatorSource } from '@home/components/rule-node/rule-node-config.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { EntityType } from '@app/shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class ChangeOriginatorConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    originatorSource: typeof OriginatorSource;
    originatorSources: OriginatorSource[];
    originatorSourceTranslationMap: Map<OriginatorSource, string>;
    originatorSourceDescTranslationMap: Map<OriginatorSource, string>;
    changeOriginatorConfigForm: FormGroup;
    allowedEntityTypes: EntityType[];
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangeOriginatorConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangeOriginatorConfigComponent, "tb-transformation-node-change-originator-config", never, {}, {}, never, never, false, never>;
}
