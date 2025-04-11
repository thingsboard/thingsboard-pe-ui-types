import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class RestApiCallConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    restApiCallConfigForm: UntypedFormGroup;
    readonly proxySchemes: string[];
    readonly httpRequestTypes: string[];
    readonly MemoryBufferSizeInKbLimit = 25000;
    readonly IntLimit = 2147483648;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestApiCallConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestApiCallConfigComponent, "tb-external-node-rest-api-call-config", never, {}, {}, never, never, false, never>;
}
