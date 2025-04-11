import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { FetchTo } from '@home/components/rule-node/rule-node-config.models';
import * as i0 from "@angular/core";
export declare class DeleteKeysConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    deleteKeysConfigForm: FormGroup;
    deleteFrom: any[];
    translation: Map<FetchTo, string>;
    constructor(fb: FormBuilder, translate: TranslateService);
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected configForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteKeysConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeleteKeysConfigComponent, "tb-transformation-node-delete-keys-config", never, {}, {}, never, never, false, never>;
}
