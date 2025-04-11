import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatChipGrid, MatChipInputEvent } from '@angular/material/chips';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class DeleteAttributesConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    attributeChipList: MatChipGrid;
    deleteAttributesConfigForm: UntypedFormGroup;
    attributeScopeMap: typeof AttributeScope;
    attributeScopes: string[];
    telemetryTypeTranslationsMap: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    separatorKeysCodes: number[];
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    removeKey(key: string): void;
    addKey(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteAttributesConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeleteAttributesConfigComponent, "tb-action-node-delete-attributes-config", never, {}, {}, never, never, false, never>;
}
