import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { ArgumentTypeResult, AttributeScopeResult, MathFunction } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class MathFunctionConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    mathFunctionConfigForm: UntypedFormGroup;
    MathFunction: typeof MathFunction;
    ArgumentTypeResult: typeof ArgumentTypeResult;
    argumentTypeResultMap: Map<ArgumentTypeResult, import("../rule-node-config.models").ArgumentTypeData>;
    attributeScopeMap: Map<import("../rule-node-config.models").AttributeScope, string>;
    argumentsResult: ArgumentTypeResult[];
    attributeScopeResult: AttributeScopeResult[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected updateValidators(emitEvent: boolean): void;
    protected validatorTriggers(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<MathFunctionConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MathFunctionConfigComponent, "tb-action-node-math-function-config", never, {}, {}, never, never, false, never>;
}
