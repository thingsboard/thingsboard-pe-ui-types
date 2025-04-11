import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FetchTo } from '../rule-node-config.models';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RenameKeysConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    renameKeysConfigForm: FormGroup;
    renameIn: any[];
    translation: Map<FetchTo, string>;
    constructor(fb: FormBuilder, translate: TranslateService);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<RenameKeysConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RenameKeysConfigComponent, "tb-transformation-node-rename-keys-config", never, {}, {}, never, never, false, never>;
}
