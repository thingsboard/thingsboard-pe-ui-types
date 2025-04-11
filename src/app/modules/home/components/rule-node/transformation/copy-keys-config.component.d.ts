import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FetchTo } from '../rule-node-config.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class CopyKeysConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    copyKeysConfigForm: FormGroup;
    copyFrom: any[];
    translation: Map<FetchTo, string>;
    constructor(fb: FormBuilder, translate: TranslateService);
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<CopyKeysConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CopyKeysConfigComponent, "tb-transformation-node-copy-keys-config", never, {}, {}, never, never, false, never>;
}
