import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { OwnerType } from '@home/components/rule-node/rule-node-config.models';
import * as i0 from "@angular/core";
export declare class ChangeOwnerConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    changeOwnerConfigForm: UntypedFormGroup;
    ownerType: typeof OwnerType;
    ownerTypes: string[];
    ownerTypeTranslationsMap: Map<OwnerType, string>;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangeOwnerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangeOwnerConfigComponent, "tb-action-node-change-owner-config", never, {}, {}, never, never, false, never>;
}
