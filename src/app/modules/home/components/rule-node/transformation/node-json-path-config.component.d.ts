import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class NodeJsonPathConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    jsonPathConfigForm: FormGroup;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeJsonPathConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NodeJsonPathConfigComponent, "tb-transformation-node-json-path-config", never, {}, {}, never, never, false, never>;
}
