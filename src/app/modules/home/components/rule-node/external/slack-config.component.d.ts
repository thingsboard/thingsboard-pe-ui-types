import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, SlackChanelType } from '@app/shared/public-api';
import { RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class SlackConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    slackConfigForm: FormGroup;
    slackChanelTypes: SlackChanelType[];
    slackChanelTypesTranslateMap: Map<SlackChanelType, string>;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlackConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlackConfigComponent, "tb-external-node-slack-config", never, {}, {}, never, never, false, never>;
}
