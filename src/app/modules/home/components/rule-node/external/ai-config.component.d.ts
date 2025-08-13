import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { EntityType } from '@shared/models/entity-type.models';
import { MatDialog } from '@angular/material/dialog';
import { AiModel, ResponseFormat } from '@shared/models/ai-model.models';
import { TranslateService } from '@ngx-translate/core';
import { Operation, Resource } from '@shared/models/security.models';
import * as i0 from "@angular/core";
export declare class AiConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private translate;
    private dialog;
    aiConfigForm: UntypedFormGroup;
    entityType: typeof EntityType;
    responseFormat: typeof ResponseFormat;
    readonly operation: typeof Operation;
    readonly resource: typeof Resource;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, dialog: MatDialog);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    onEntityChange($event: AiModel): void;
    get getResponseFormatHint(): any;
    createModelAi(formControl: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiConfigComponent, "tb-external-node-ai-config", never, {}, {}, never, never, false, never>;
}
